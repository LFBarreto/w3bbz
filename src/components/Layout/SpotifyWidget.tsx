import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useWindowScroll } from "react-use";
import { useRouter } from "next/router";
import Flex from "./Flex";

const WidgetContainer = styled(Flex).attrs({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "50%",
  height: 80,
})<{ visible: boolean }>`
  overflow: hidden;
  border-radius: 0 15px 0 0;
  filter: var(--sptfy-filter);
  z-index: 2;
  transform: ${(p) => (p.visible ? "none" : "translateX(-100%)")};
  ${(p) => p.theme.transition(["transform"])};
`;

export default function SpotifyWidget() {
  const [height, setHeight] = useState(0);
  const router = useRouter();
  const { y } = useWindowScroll();

  useEffect(() => {
    const handleRouteChange = () => {
      setHeight(document.body.scrollHeight - document.body.clientHeight);
    };
    handleRouteChange();
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <WidgetContainer visible={height > 0 && y > height - 200}>
      <iframe
        src="https://open.spotify.com/embed/playlist/5m6fyyrbLJMOv1wrLcAgei?utm_source=generator&theme=0"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </WidgetContainer>
  );
}
