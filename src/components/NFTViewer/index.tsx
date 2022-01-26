import React, { useCallback, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { useLocalStorage } from "react-use";
import { useContract, useProvider, erc721ABI } from "wagmi";
import { useRouter } from "next/router";
import { Flex, Banner } from "..";

const BannerContainer = styled(Flex).attrs({
  flexDirection: "column",
  width: "100%",
  bg: "primary.c80",
})`
  background-image: var(--filter-noise);
  background-repeat: repeat;
`;

const JSON_PREFIX = "data:application/json;base64,";
const SVG_PREFIX = "data:image/svg+xml;base64,";

function NFTViewer({
  contract,
  abi,
  tokenId,
}: {
  contract: string;
  abi: any;
  tokenId: number;
}) {
  const router = useRouter();
  const key = `token-uri-storage-${contract}-${tokenId}`;
  const [data, setData] = useLocalStorage(key);
  const ref = useRef<HTMLIFrameElement | undefined>();
  const provider = useProvider();
  const contractInterface = useContract({
    addressOrName: contract,
    contractInterface: abi || erc721ABI,
    signerOrProvider: provider,
  });

  useEffect(() => {
    if (
      contractInterface &&
      contractInterface.tokenURI &&
      !(key in localStorage)
    ) {
      contractInterface.tokenURI(tokenId).then(
        (d: string) => {
          setData(d);
        },
        (e: { code: string }) => {
          if (e?.code === "CALL_EXCEPTION") router.replace("/404");
        }
      );
    }
  }, [contractInterface, key, router, setData, tokenId]);

  const metadata = useMemo(() => {
    if (!data || typeof data !== "string") return null;

    return JSON.parse(atob(data.replace(JSON_PREFIX, "")));
  }, [data]);

  const svgData = useMemo(() => {
    if (!metadata) return null;

    return atob(metadata.image.replace(SVG_PREFIX, ""));
  }, [metadata]);

  const setupSvgListeners = useCallback(() => {
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
              .catch((err) => {
                alert(
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
  }, []);

  useEffect(() => {
    if (ref && ref.current && !!svgData) {
      if (ref.current?.contentDocument?.body) {
        ref.current.contentDocument.body.innerHTML = `<style> html, body { margin: 0; padding: 0; overflow:hidden; height: 100%; width: 100%;} @keyframes fadeInWow { 0% {transform: scale(0) translate(300px, 300px)} to {transform: scale(1) translate(300px, 300px)}} #mouse-circle-wow{ will-change: transform; transform: scale(0) translate(300px, 300px); animation: fadeInWow 0.5s ease-out forwards; }#inner-iframe, svg { width: 100%; height: 100%}</style><div id="inner-iframe">${svgData}</div>`;

        setTimeout(setupSvgListeners, 500);
      }
    }
  }, [ref, setupSvgListeners, svgData]);

  return (
    <>
      <BannerContainer>
        <Banner>
          CLICK {"&"} MOVE {">>>"} DOUBLE CLICK FULLSCREEN {">>>"}
        </Banner>
      </BannerContainer>
      <iframe
        style={{ border: "none" }}
        sandbox="allow-scripts allow-same-origin"
        // @ts-expect-error legacy ref
        ref={ref}
        width="100%"
        height="100%"
      />
    </>
  );
}

export default NFTViewer;
