import React from "react";
import { providers } from "ethers";
import { Provider, chain } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
// import { WalletLinkConnector } from "wagmi/connectors/walletLink";

const infuraId =
  process.env.INFURA_ID || (process.env.NEXT_PUBLIC_INFURA_ID as string);

// Chains for connectors to support
const chains = [chain.polygonMainnet];

// Set up connectors
const connectors = () => {
  // const rpcUrl =
  //   chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
  //   chain.mainnet.rpcUrls[0];
  return [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
      },
    }),
    // new WalletLinkConnector({
    //   options: {
    //     appName: "W3BBZ",
    //     jsonRpcUrl: `${rpcUrl}/${infuraId}`,
    //   },
    // }),
  ];
};

const provider = new providers.InfuraProvider(
  chain.polygonMainnet.id,
  infuraId
);

export default function WagmiLayout({
  children,
  ...props
}: {
  children: React.ReactElement;
}) {
  return (
    <Provider
      autoConnect
      connectors={connectors}
      provider={provider}
      {...props}
      connectorStorageKey="webbz.wallet"
    >
      {children}
    </Provider>
  );
}
