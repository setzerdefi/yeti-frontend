import { base } from "wagmi/chains"
import { createConfig, createStorage, cookieStorage, http, fallback } from "wagmi"
import { connectorsForWallets } from "@rainbow-me/rainbowkit"
import {
    injectedWallet,
    rainbowWallet,
    coinbaseWallet,
    walletConnectWallet,
    trustWallet,
    rabbyWallet,
} from "@rainbow-me/rainbowkit/wallets"

const appName = "Yeti app"
const projectId = "0"

const connectors = connectorsForWallets(
    [
        {
            groupName: 'Wallets',
            wallets: [
                injectedWallet,
                rainbowWallet,
                coinbaseWallet,
                walletConnectWallet,
                trustWallet,
                rabbyWallet,
            ],
        },
    ],
    { appName, projectId }
)

const transports = {
    [base.id]: fallback([http("https://rpc.ankr.com/arbitrum"), http()]),
}

const storage = createStorage({ storage: cookieStorage })

export const config = createConfig({
    ssr: true,
    storage,
    connectors,
    transports,
    chains: [base],
})
