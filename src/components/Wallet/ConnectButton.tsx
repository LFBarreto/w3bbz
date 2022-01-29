import React from "react";
import styled from "styled-components";
import { useConnect, useAccount, useNetwork } from "wagmi";
import { Flex, Button, Banner, MintButton, BannerContainer } from "../";

const Container = styled(Flex).attrs({
  flexDirection: "column",
  width: "100%",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  position: "sticky",
  top: "0px",
  left: 0,
  right: 0,
  bg: "primary.c80",
  zIndex: 4,
})`
  min-height: 132px;
  height: auto;
`;

type ConnectButtonProps = {
  contract?: string;
  abi: any;
  name: string;
  redirectRoute: string;
  bgImage?: string;
};

export default function ConnectButton({
  contract,
  abi,
  name,
  redirectRoute,
  bgImage,
}: ConnectButtonProps) {
  const [{ data, error: accountError }, disconnect] = useAccount();
  const [{ data: connectData, error: connectError }, connect] = useConnect();
  const [{ data: dataNetwork, error: errorNetwork }, switchNetwork] =
    useNetwork();
  const isLogged = data?.address;
  const supportedChain = dataNetwork.chains?.[0];
  const notSupported = dataNetwork.chain?.unsupported;

  if (!contract) return null;

  return (
    <Container>
      {notSupported && supportedChain && switchNetwork ? (
        errorNetwork?.message ? (
          <BannerContainer bg="var(--e-c80)">
            <Banner key="error-network-connect-button" color="textContrast">
              {errorNetwork?.message}
            </Banner>
          </BannerContainer>
        ) : (
          <BannerContainer bg="var(--e-c80)">
            <Banner key="not-supported-connect-button" color="textContrast">
              chain not suported{" "}
            </Banner>
          </BannerContainer>
        )
      ) : isLogged ? (
        accountError?.message ? (
          <BannerContainer bg="var(--e-c80)">
            <Banner key="error-connect-button" color="textContrast">
              {accountError?.message}
            </Banner>
          </BannerContainer>
        ) : (
          <BannerContainer>
            <Banner key="adress-connect-button" color="textContrast">
              {data.ens || data.address}
            </Banner>
          </BannerContainer>
        )
      ) : connectData.connectors.length > 0 ? (
        connectError?.message ? (
          <BannerContainer bg="var(--e-c80)">
            <Banner key="connect-error-connect-button" color="textContrast">
              {connectError?.message}
            </Banner>
          </BannerContainer>
        ) : (
          <BannerContainer>
            <Banner key="connect-wallet-connect-button" color="textContrast">
              Connect my wallet {">>>"}
            </Banner>
          </BannerContainer>
        )
      ) : null}
      <Flex
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-end"
        width="100%"
        flex={1}
      >
        <MintButton
          contract={contract}
          abi={abi}
          disabled={notSupported || !isLogged}
          name={name}
          redirectRoute={redirectRoute}
          bgImage={bgImage}
          address={data?.address}
        />
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="flex-end"
        width="100%"
        pr="3rem"
        pl={"1rem"}
      >
        {notSupported && supportedChain && switchNetwork ? (
          <Button
            whiteSpace="nowrap"
            color="textContrast"
            onClick={() => switchNetwork(supportedChain.id)}
          >
            switch to {supportedChain?.name}
          </Button>
        ) : isLogged ? (
          <Button
            color="textContrast"
            whiteSpace="nowrap"
            onClick={() => disconnect()}
          >
            Disconnect {"<<<"}
          </Button>
        ) : connectData.connectors.length > 0 ? (
          connectData.connectors.map((connector: any) => (
            <Button
              key={connector.name}
              whiteSpace="nowrap"
              color="textContrast"
              onClick={() => connect(connector)}
            >
              {connector.name} {"<<<"}
            </Button>
          ))
        ) : null}
      </Flex>
    </Container>
  );
}
