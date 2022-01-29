import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Head from "next/head";
import { useRouter } from "next/router";
import { NFTViewer, Banner, BannerContainer } from "../../../src/components";

const extraIframeHTML = `<style> html, body { margin: 0; padding: 0; overflow:hidden; height: 100%; width: 100%;} @keyframes fadeInWow { 0% {transform: scale(0) translate(300px, 300px)} to {transform: scale(1) translate(300px, 300px)}} #mouse-circle-wow{ will-change: transform; transform: scale(0) translate(300px, 300px); animation: fadeInWow 0.5s ease-out forwards; }#inner-iframe, svg { width: 100%; height: 100%}</style>`;

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

    b.addEventListener(
      "mousedown",
      (e: any) => {
        x = e.offsetX * ratioX;
        y = e.offsetY * ratioY;
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
          x = e.offsetX * ratioX;
          y = e.offsetY * ratioY;
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
          x = clientX * ratioX;
          y = clientY * ratioY;
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
      </Head>
      {data?.tokenURI ? (
        <>
          <BannerContainer>
            <Banner>
              CLICK {"&"} MOVE {">>>"} DOUBLE CLICK FULLSCREEN {">>>"}
            </Banner>
          </BannerContainer>
          <NFTViewer
            data={data.tokenURI}
            extraIframeHTML={extraIframeHTML}
            insertionCallback={insertionCallback}
          />
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
