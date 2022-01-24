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
          subTitle: "May i show you my cool projects?",
          description: `
          No JPEGs allowed!
          `,
          data: [
            /** {
              id: "nft-blobz-01",
              title: "Blobz-Blockz",
              subTitle: "Generative blobz on the blockchain",
              content: "",
              link: { href: "/nft/blobz", label: ">>> learn more" },
              hashtags: ["artz", "math", "solidity", "svg"],
            },**/
            {
              id: "nft-t3t99-01",
              title: "Tetris 99 Token",
              subTitle: "Generative game on the blockchain",
              content: `
              A collection of 99 Tetris card games fully on chain, unique in rarity and traits.

              This is also a battle royale game fully on chain, 
              giving you a chance to win a price just by owning a token.
  
              This NFT project builds on the previous space invader one.
              during transfer the Token evolves and takes a new shape
              both in data as well as visual.

              `,
              image: "/images/tetris-99.png",
              href: {
                href: "https://opensea.io/collection/t3s-99",
                label: "view on opensea",
              },
              hashtags: ["game", "solidity", "svg"],
              reverse: true,
            },
            {
              id: "nft-spit-01",
              title: "Space-invaderz",
              subTitle: "Recursive SVG + pseudo 3D",
              content: `
              A experiment on how far i can push the NFT format to create
              (almost fully on chain) some cute alien invaders. 
              There are 128 combinations of Space invaders that will animate 
              and evolve to the environment. 👾
              They are ever changing containing 
              a trace of the last transfer on the image itself.
              `,
              image: "/images/space-invader.gif",
              href: {
                href: "https://opensea.io/collection/spi-t",
                label: "view on opensea",
              },
              hashtags: ["3d", "solidity", "svg"],
            },
            {
              id: "nft-svgt-01",
              title: "SVG-T",
              subTitle: "Scalar Vector Graphics Tokens",
              content: `
              
              (or Svg Monad) are little experimentation
              on how far i can go with parametric animations
              on svg and keep it lightweight. 
              All the data is on chain
              Each mint generates a new random 
              set of colors and animation speed

              `,
              reverse: true,
              image: "/images/svgt.png",
              href: {
                href: "https://opensea.io/collection/svgt",
                label: "view on opensea",
              },
              hashtags: ["abstract", "solidity", "svg"],
            },
          ],
        }}
      />
    </>
  );
}
