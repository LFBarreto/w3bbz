import { Provider } from "wagmi";
import React from "react";

export default function WagmiLayout({
  children,
  ...props
}: {
  children: React.ReactElement;
}) {
  return (
    <Provider {...props} connectorStorageKey="webbz.wallet">
      {children}
    </Provider>
  );
}
