import Head from "next/head";
import { Articles } from "../../src/components";

export default function NftHome() {
  return (
    <>
      <Head>
        <title>W3BBZ - NFT</title>
      </Head>
      <Articles
        articlesJSON={{
          title: "NFT",
          subTitle:
            "I've been spending some time tinkering with NFTs and smart contracts and sh*t",
          description: `
          Im no artiste
          Im no genius
          I love SVG
          And i enjoy having some stupid programming fun`,
          data: [
            {
              id: "nft-01",
              title: "Coming soon",
              subTitle: "Let me compile some stuff and come back later...",
            },
          ],
        }}
      />
    </>
  );
}
