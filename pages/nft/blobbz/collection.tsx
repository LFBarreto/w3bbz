import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { useRouter } from "next/router";
import Head from "next/head";

import {
  NFTViewer,
  Banner,
  BannerContainer,
  Text,
  Button,
  QRCode,
} from "../../../src/components";
import Flex, { FlexBoxProps } from "../../../src/components/Layout/Flex";

const IdText = styled(Text).attrs({
  whiteSpace: "nowrap",
  height: "min-content",
  variant: "small",
  color: "white",
  flex: "1",
})``;

const IdLabel = styled(Flex).attrs({
  height: "82px",
  alignItems: "stretch",
  bottom: 4,
  position: "absolute",
})``;

const RowContent = styled(Flex).attrs({
  p: 4,
  overflow: "hidden",
  position: "relative",
})`
  flex: 0 0 50%;
  height: ${(p) => (p.height ? p.height : "200%")};
  @media (max-width: 720px) {
    flex: 1;
    height: 100%;
  }
`;

const ButtonsContainer = styled(Flex).attrs({
  width: "100%",
  height: "50px",
  justifyContent: "space-between",
  flexWrap: "wrap",
  px: "0.5rem",
  bg: "background.main",
  alignItems: "flex-end",
})``;

type RowContainerProps = FlexBoxProps & { index: number };

const RowContainer = styled(Flex).attrs<RowContainerProps, RowContainerProps>(
  ({ index }: { index: number }) => ({
    flexDirection: index % 2 ? "row" : "row-reverse",
    position: "relative",
    overflowX: "visible",
    zIndex: 999 - index,
    height: 360,
    index,
  })
)`
  ${IdLabel} {
    right: ${(p) => (p.index % 2 ? "unset" : p.theme.space[4])}px;
  }
`;

const LabelContainer = styled(Flex).attrs({
  p: 2,
  flexDirection: "column",
})`
  background-image: var(--filter-noise);
  background-repeat: repeat;
  mix-blend-mode: difference;
`;

type TokenData = {
  id: number;
  metadata: {
    image: string;
    name: string;
    attributes: any[];
  };
};

const BlobzRow = memo(({ blobz, id }: { blobz: TokenData; id: number }) => {
  const router = useRouter();

  const prefix = id % 2 ? ">>>" : "";
  const suffix = id % 2 ? "" : "<<<";

  return (
    <RowContainer data-id={blobz.id} index={id}>
      <RowContent>
        <IdLabel flexDirection={id % 2 ? "row" : "row-reverse"}>
          <QRCode data={location.origin + `/nft/blobbz/${blobz.id}`} />
          <LabelContainer alignItems={id % 2 ? "flex-start" : "flex-end"}>
            <IdText fontWeight="900">{`${prefix} ${blobz.metadata.name} ${suffix}`}</IdText>
            <IdText>{`${prefix} Main color #${blobz.metadata.attributes[0].value} ${suffix}`}</IdText>
            <IdText>{`${prefix} Accent color #${blobz.metadata.attributes[1].value} ${suffix}`}</IdText>
          </LabelContainer>
        </IdLabel>

        <NFTViewer
          metadata={blobz.metadata}
          extraIframeHTML="<style>:root{cursor: pointer;} :root:not(:hover) * { animation-play-state: paused!important} </style>"
          onIframeClick={() => router.push(`/nft/blobbz/${blobz.id}`)}
        />
      </RowContent>
    </RowContainer>
  );
});

BlobzRow.displayName = "BlobzRow";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function BlobzCollection() {
  const [fetchedPages, setFetchedPages] = useState<number[]>([0]);
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [collectionMetadata, setCollectionMetadata] = useState({
    totalSupply: 0,
    remaining: 0,
    limit: 0,
  });
  const [indexedList, setIndexedList] = useState<Record<string, TokenData>>({});
  const { data, error } = useSWR("/api/blobbz?page=" + page, fetcher);

  const collection: TokenData[] = useMemo(() => {
    const iL: TokenData[] = Object.values(indexedList);
    iL.reverse();
    return iL.slice(offset * 5, offset * 5 + 5);
  }, [indexedList, offset]);

  useEffect(() => {
    if (data) {
      const indexedData = data.data.reduce(
        (acc: Record<number, TokenData>, d: TokenData) => {
          acc[d.id] = d;
          return acc;
        },
        {}
      );

      setIndexedList((state) => ({ ...state, ...indexedData }));
      setCollectionMetadata({
        totalSupply: data.totalSupply,
        remaining: data.remaining,
        limit: data.limit,
      });
      setFetchedPages((s) => [...s, data.page]);
      setLoading(false);
    }
  }, [data]);

  const nextPage = useCallback(() => {
    if (!fetchedPages.includes(offset + 1)) {
      setPage(offset + 1);
    }
    setOffset(offset + 1);
    window.scrollTo(0, 0);
  }, [fetchedPages, offset]);
  const previousPage = useCallback(() => {
    setOffset(offset - 1);
    window.scrollTo(0, 0);
  }, [offset]);

  return (
    <>
      <Head>
        <title>WEBBZ - BLOBZBLOCKZ</title>
        <meta
          name="description"
          content="W3BBZ - BlobzBlockz A series of 512 blobz fully generated on chain. Inspired by lava lamps and their inhate randomness (ie: cloudflare lava lamps RNG) This series explores generative art on polygon using solidity. Each NFT is unique in shape size animations and mix of colors."
        />
        <meta property="og:url" content="https://w3b.bz/nft/blobbz" />
        <meta property="og:image" content="https://w3b.bz/images/blobzzz.png" />
        <style>
          {
            "#smiley-container, #footer-main-banner { display: none; } #smiley-container *, #footer-main-banner * { animation: none!important; }"
          }
        </style>
      </Head>

      <Flex flex="1" pt={"152px"} flexDirection="column" overflow="hidden">
        {collection.length <= 0 ? null : (
          <>
            {" "}
            {collection.map((blobz, i) => (
              <BlobzRow key={`blobz-${blobz.id}-${i}`} blobz={blobz} id={i} />
            ))}
            <RowContainer>
              <RowContent />
            </RowContainer>
          </>
        )}
      </Flex>
      <Flex
        width="100%"
        position="sticky"
        id="blobz-collection-page"
        flexDirection="column"
        justifyContent="flex-end"
        flex="0 0 153px"
        style={{ bottom: 0, left: 0, zIndex: 1000 }}
      >
        <ButtonsContainer>
          {offset > 0 ? (
            <Button
              textAlign="left"
              variant="h5"
              whiteSpace="nowrap"
              onClick={previousPage}
              noInvert
            >
              {"<<<"} PREVIOUS
            </Button>
          ) : (
            <Flex flex="1" />
          )}
          {collectionMetadata.limit <= 0 ? (
            <Flex flex="1" />
          ) : (
            <Button
              width="100%"
              textAlign="right"
              variant="h5"
              whiteSpace="nowrap"
              onClick={nextPage}
              noInvert
            >
              NEXT {">>>"}
            </Button>
          )}
        </ButtonsContainer>
        <BannerContainer bg={error ? "var(--e-c80)" : "var(--p-c80)"}>
          {loading ? (
            <Banner>LOADING {">>>"}</Banner>
          ) : error ? (
            <Banner>ERROR {">>>"}</Banner>
          ) : (
            <Banner>
              {`BLOBZ-BLOCKZ >>> TOTAL SUPPLY: ${collectionMetadata.totalSupply} >>> BLOBZ-BLOCKZ >>> REMAINING: ${collectionMetadata.remaining} >>> `}
            </Banner>
          )}
        </BannerContainer>
      </Flex>
    </>
  );
}

export default memo(BlobzCollection);
