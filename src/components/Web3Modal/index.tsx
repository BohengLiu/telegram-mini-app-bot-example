"use client";

import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon, polygonMumbai, sepolia } from "wagmi/chains";
import Swap from "../Swap";


// 1. Get projectId
const projectId = "df6535763d28360429eca5dcde8c8bdb";

// 2. Create wagmiConfig
const metadata = {
  name: "Web3 Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum, polygon, polygonMumbai, sepolia];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

let count = 0

if (typeof window !== "undefined") {
  const originalWindowOpen = window.open;
  (window as any).originOpen = originalWindowOpen;
  (window as any).open = function (
    url?: string | URL,
    target?: string,
    features?: string
  ) {
    // 这里添加你想要的额外功能，例如：
    console.log("window.open has been called with url: " + url);
    count = count + 1

    // 调用原始的 window.open 函数
    let newTarget = target;
    if (typeof url === "string" && !url.startsWith("http")) {
      newTarget = "_blank";
    }
    // detect if ios
    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      if (count % 2) {
        newTarget = undefined;
      } else {
        newTarget = '_self'
      }
      
    }

    return originalWindowOpen(url, newTarget, features);
  };
}

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

export default function Web3App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <w3m-button />
      <div className="w-full h-4" />
      <Swap />
    </WagmiConfig>
  );
}
