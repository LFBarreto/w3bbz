import Head from "next/head";
import { ConnectButton, TopBanner, Articles } from "../../../src/components";

import abi from "./abi-blobz.json";

const blobzContract =
  process.env.BLOBZ_CONTRACT_ADDRESS ||
  process.env.NEXT_PUBLIC_BLOBZ_CONTRACT_ADDRESS;

export default function BlobzHome() {
  return (
    <>
      <Head>
        <title>WEBBZ - BLOBZ</title>
        <meta name="description" content="W3BBZ" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          {
            "#smiley-container { display: none; } .spotify-widget-container{ z-index: 5!important; }"
          }
        </style>
      </Head>
      <TopBanner src="/images/blobz-banner.png" />
      <ConnectButton
        contract={blobzContract}
        abi={abi}
        name="BLOBZBLOCKZ"
        redirectRoute="/nft/blobbz/"
        bgImage="/images/blobzzzz.png"
      />
      <Articles
        articlesJSON={{
          data: [
            {
              id: "blockz-blockz",
              title: "Blobz-Blockz",
              subTitle: "Generative blobz on the blockchain",
              content: `A series of 512 blobz fully generated on chain.
                Inspired by lava lamps and their inhate randomness (ie: cloudflare lava lamps RNG)

                This series explores generative art on polygon using solidity.

                Each NFT is unique in shape size animations and mix of colors.

                During the minting process some variables are set and then,
                the magic can begin!

                Using some pseudo trigonometry onchain i managed to recreate 
                a very cool JS library (blobshape.js) that generates blobz
              `,
              image: "/images/lava-lamps.jpg",
              href: {
                href: "https://github.com/LFBarreto/mamie-fait-des-nft/blob/main/contracts/libraries/SVGBlob.sol",
                label: ">>> checkout the code",
              },
            },
            {
              id: "blockz-blockz-2",
              content: `
              Each token generates 5 to 9 random shapes that are spread a bit randomly through the svg space.
              On top of that i used a very col technique to merge shapes together through blur filtering and color matrix filters in svg.
              
              The mix between the random shapes and the random positions makes it so that the animations that arent randomized apear to be.
              However animation timings are overlapped and are set during the minting process making so that the total animation loop has an average duration of arroung 30mins.

              This work is heavily inspired by lava lamps and abtract artists such as yaoi kusama 
              (theres even a subtheme thats a direct reference in colors and shape to her pumpkin series).

              Feel free to check out the whole collection on opensea or mint one here!
              `,
              image: "/images/yaoi-kusama.jpg",
              href: {
                href: "https://opensea.io/collection/blobz-blockz",
                label: ">>> View on opensea",
              },
            },
          ],
        }}
      />
    </>
  );
}
