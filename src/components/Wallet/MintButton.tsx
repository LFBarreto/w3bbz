import ReactDOM from "react-dom";
import React, { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import { useContract, erc721ABI, useContractEvent, useSigner } from "wagmi";
import { Flex, Banner, SvgMintButton, BannerContainer } from "../";
import { useRouter } from "next/router";

const ActiveMintButton = ({
  contract,
  abi,
  signer,
  name,
  redirectRoute,
  bgImage,
  address,
}: {
  contract: string;
  abi: any;
  disabled?: boolean;
  name: string;
  redirectRoute: string;
  bgImage?: string;
  address: string;
  signer: any;
}) => {
  const router = useRouter();
  const [doc, setDoc] = useState<any>();
  const [tx, setTx] = useState<string>("");
  const [supply, setSupply] = useState(-1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const contractInterface = useContract({
    addressOrName: contract,
    contractInterface: abi || erc721ABI,
    signerOrProvider: signer,
  });

  useContractEvent(
    {
      addressOrName: contract,
      contractInterface: abi,
    },
    "Transfer",
    ([from, to, tokenID]) => {
      if (
        from === "0x0000000000000000000000000000000000000000" &&
        to.toLowerCase() === address.toLowerCase()
      ) {
        setTx("");
        router.push(`${redirectRoute}${tokenID.toNumber()}`);
      }
    }
  );

  useEffect(() => {
    setDoc(document.body);
  }, []);

  const getSupply = useCallback(async () => {
    if (
      supply === -1 &&
      contractInterface &&
      contractInterface.REMAINING_SUPPLY
    ) {
      const remainingSupply = await contractInterface.REMAINING_SUPPLY();
      setSupply(remainingSupply.toNumber());
    }
  }, [contractInterface, supply]);

  useEffect(() => {
    getSupply();
  }, [getSupply]);

  const mint = useCallback(() => {
    if (contractInterface && supply > 0 && !loading && !tx) {
      setLoading(true);
      setError(null);
      contractInterface
        ?.mint({
          value: ethers.constants.WeiPerEther,
          gasLimit: 1000000,
        })
        .then(
          ({ hash }: { hash: string }) => {
            setTx(hash);
            setLoading(false);
          },
          (e: { message: string }) => {
            setError(e.message);
            setLoading(false);
          }
        );
    }
    if (tx) {
      // @ts-expect-error window is defined
      window.open(`https://polygonscan.com/tx/` + tx, "_blank").focus();
    }
  }, [contractInterface, loading, supply, tx]);

  return doc ? (
    <>
      {error ? (
        <BannerContainer bg="var(--e-c80)">
          <Banner key="error-mint-connect-button" color="textContrast">
            {error}
          </Banner>
        </BannerContainer>
      ) : (
        <Flex flex={1} />
      )}
      {ReactDOM.createPortal(
        <SvgMintButton
          onClick={mint}
          supply={supply}
          name={name}
          loading={loading}
          text1={tx ? "VIEW" : "MINT"}
          text2={tx ? "TX" : "HERE"}
          bgImage={bgImage}
          active={supply !== 1 && signer}
        />,
        doc
      )}
    </>
  ) : null;
};

export default function MintButton({
  contract,
  abi,
  disabled,
  name,
  redirectRoute,
  bgImage,
  address,
}: {
  contract: string;
  abi: any;
  disabled?: boolean;
  name: string;
  redirectRoute: string;
  bgImage?: string;
  address?: string;
}) {
  const [{ data }] = useSigner();

  return contract && abi && data && address ? (
    <ActiveMintButton
      contract={contract}
      abi={abi}
      disabled={disabled}
      signer={data}
      name={name}
      redirectRoute={redirectRoute}
      bgImage={bgImage}
      address={address}
    />
  ) : null;
}
