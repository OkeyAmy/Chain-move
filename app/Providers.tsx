"use client"

import type { FC, ReactNode } from "react"

import { PrivyProvider } from "@/lib/privy/react-auth"
import { embeddedWalletProviderConfig } from "@/lib/wallet/config"

const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID

function getDefaultNetwork(): WalletNetwork {
  const stellarConfig = getStellarConfig()
  return stellarConfig.network.toLowerCase() === "mainnet" ? "stellar-mainnet" : "stellar-testnet"
}

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  const defaultNetwork = getDefaultNetwork()

  return (
    <PrivyProvider
      appId={privyAppId || ""}
      config={embeddedWalletProviderConfig}
    >
      {children}
    </PrivyProvider>
  )
}
