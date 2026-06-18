"use client"

import type { FC, ReactNode } from "react"
import { liskSepolia } from "viem/chains"

import { PrivyProvider } from "@/lib/privy/react-auth"

const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <PrivyProvider
      appId={privyAppId || ""}
      config={{
        loginMethods: ["email", "sms"],
        supportedChains: [liskSepolia],
        defaultChain: liskSepolia,
        embeddedWallets: {
          ethereum: {
            createOnLogin: "all-users",
          },
          showWalletUIs: true,
        },
        appearance: {
          theme: "light",
          accentColor: "#F2780E",
          logo: "/images/chainmovelogo.png",
        },
      }}
    >
      {children}
    </PrivyProvider>
  )
}
