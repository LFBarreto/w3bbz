import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  NFTViewer,
  Banner,
  BannerContainer,
  QRCode,
  Flex,
  Link,
  Text,
} from "../../../src/components";

const extraIframeHTML = `<style>@keyframes fadeInWow { 0% {transform: scale(0) translate(300px, 300px)} to {transform: scale(1) translate(300px, 300px)}} #mouse-circle-wow{ will-change: transform; transform: scale(0) translate(300px, 300px); animation: fadeInWow 0.5s ease-out forwards; }</style>`;

const insertionCallback = (ref: any) => {
  if (!ref || !ref.current || !ref.current.contentDocument) return null;
  const innerDoc = ref.current.contentDocument;
  const el = innerDoc.querySelector("#global");
  if (el) {
    const mouseCircle = innerDoc.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    mouseCircle.setAttribute("cx", "0");
    mouseCircle.setAttribute("cy", "0");
    mouseCircle.setAttribute("r", "50px");
    mouseCircle.setAttribute("fill", "url(#blobC_)");
    mouseCircle.setAttribute("id", "mouse-circle-wow");

    let isDrawing = false;
    let x = 0;
    let y = 0;

    const b = innerDoc.querySelector("svg");

    if (!b) return;

    el.appendChild(mouseCircle);

    const { width, height } = b.getBoundingClientRect();
    let ratioX = 600 / width;
    let ratioY = 600 / height;
    let isHeightBigger = height > width;
    let minmax = isHeightBigger ? height : width;

    let offsetMax = (minmax - 600) / 2;
    let demiOffset = offsetMax / 2;
    const getRatio = (t: number, isX: boolean) =>
      isX !== isHeightBigger ? -demiOffset + (t * (600 + offsetMax)) / 600 : t;

    b.addEventListener(
      "mousedown",
      (e: any) => {
        x = getRatio(e.offsetX * ratioX, true);
        y = getRatio(e.offsetY * ratioY, false);
        isDrawing = true;
      },
      false
    );

    b.addEventListener(
      "mousemove",
      (e: any) => {
        if (isDrawing === true) {
          mouseCircle.setAttribute(
            "style",
            `transform: translate(${x}px, ${y}px); animation:none;`
          );
          x = getRatio(e.offsetX * ratioX, true);
          y = getRatio(e.offsetY * ratioY, false);
        }
      },
      false
    );

    b.addEventListener(
      "touchmove",
      (e: any) => {
        const { changedTouches } = e;
        if (changedTouches && changedTouches[0]) {
          const { clientX, clientY } = changedTouches[0];
          mouseCircle.setAttribute(
            "style",
            `transform: translate(${x}px, ${y}px); animation:none;`
          );
          x = getRatio(clientX * ratioX, true);
          y = getRatio(clientY * ratioY, false);
        }
      },
      false
    );

    b.addEventListener(
      "mouseup",
      () => {
        if (isDrawing === true) {
          mouseCircle.setAttribute(
            "style",
            `transform: translate(${x}px, ${y}px); animation:none;`
          );
          x = 0;
          y = 0;
          isDrawing = false;
        }
      },
      false
    );
    b.addEventListener(
      "dblclick",
      () => {
        if (!innerDoc.fullscreenElement) {
          b.requestFullscreen()
            .then(() => {
              const { width, height } = b.getBoundingClientRect();
              ratioX = 600 / width;
              ratioY = 600 / height;
              isHeightBigger = height > width;
              minmax = isHeightBigger ? height : width;
              offsetMax = (minmax - 600) / 2;
              demiOffset = offsetMax / 2;
            })
            .catch((err: { message: string; name: string }) => {
              console.error(
                `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
              );
            });
        } else {
          innerDoc.exitFullscreen().then(() => {
            const { width, height } = b.getBoundingClientRect();
            ratioX = 600 / width;
            ratioY = 600 / height;
            isHeightBigger = height > width;
            minmax = isHeightBigger ? height : width;
            offsetMax = (minmax - 600) / 2;
            demiOffset = offsetMax / 2;
          });
        }
      },
      false
    );
  }
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function Blobz({ id }: { id: string }) {
  const { data, error } = useSWR("/api/blobbz/" + id, fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  });

  return (
    <>
      <Head>
        <title>BLOBZ-BLOCKZ#{id}</title>
        <meta
          name="description"
          content={`W3BBZ - #${id} BlobzBlockz A series of 512 blobz fully generated on chain. Inspired by lava lamps and their inhate randomness (ie: cloudflare lava lamps RNG) This series explores generative art on polygon using solidity. Each NFT is unique in shape size animations and mix of colors.`}
        />
        <meta property="og:url" content={`https://w3b.bz/nft/blobbz/${id}`} />
        <meta property="og:image" content="https://w3b.bz/images/blobzzz.png" />
        <style>
          {
            "#smiley-container, #footer-main-banner { display: none; } #smiley-container *, #footer-main-banner * { animation: none!important; }"
          }
        </style>
      </Head>
      {data?.metadata ? (
        <>
          <Flex position="relative" flex="1">
            <Flex
              position="absolute"
              alignItems="flex-end"
              bottom={0}
              right={0}
            >
              <Flex
                flexDirection="column"
                alignItems="flex-end"
                justifyContent="flex-end"
                style={{ mixBlendMode: "difference" }}
              >
                <Text variant="small" color="white">
                  {data.metadata.name}
                </Text>
                <Link
                  href={`https://opensea.io/assets/matic/0xc8296a570246a690e5f53b42e47841a4ede1944c/${id}`}
                  target="_blank"
                  color="white"
                >
                  view on opensea
                </Link>
              </Flex>

              <QRCode
                ml={2}
                pr={2}
                bg="white"
                data={`https://opensea.io/assets/matic/0xc8296a570246a690e5f53b42e47841a4ede1944c/${id}`}
              />
            </Flex>
            <NFTViewer
              metadata={data.metadata}
              extraIframeHTML={extraIframeHTML}
              insertionCallback={insertionCallback}
            />
          </Flex>
          <BannerContainer>
            <Banner>{`CLICK & MOVE >>> DOUBLE CLICK FULLSCREEN >>>`}</Banner>
          </BannerContainer>
        </>
      ) : error ? (
        <BannerContainer bg="var(--e-c80)">
          <Banner>ERROR {">>>"}</Banner>
        </BannerContainer>
      ) : (
        <BannerContainer>
          <Banner>LOADING {">>>"}</Banner>
        </BannerContainer>
      )}
    </>
  );
}

export default function BlobzHome() {
  const router = useRouter();
  const { id } = router.query;
  const [validId, setValidId] = useState<string | undefined>();

  useEffect(() => {
    if (id !== undefined) {
      if (isNaN(+id) || Array.isArray(id)) {
        router.replace("/404");
      } else {
        setValidId(id);
      }
    }
  }, [id, router]);

  return validId ? (
    <Blobz id={validId} />
  ) : (
    <BannerContainer>
      <Banner>LOADING {">>>"}</Banner>
    </BannerContainer>
  );
}
