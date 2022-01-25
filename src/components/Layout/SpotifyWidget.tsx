import styled from "styled-components";
import Flex from "./Flex";

const WidgetContainer = styled(Flex).attrs({
  position: "sticky",
  top: "calc(100% - 80px)",
  right: "100%",
  bottom: "10px",
  height: 80,
})`
  overflow: hidden;
  border-radius: 0 15px 0 0;
  filter: var(--sptfy-filter);
  z-index: 2;
  width: 50%;
  min-width: 350px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export default function SpotifyWidget() {
  return (
    <WidgetContainer>
      <iframe
        src="https://open.spotify.com/embed/playlist/2Dta1TdixfDg0UvumSw7NE?utm_source=generator&theme=0"
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </WidgetContainer>
  );
}
