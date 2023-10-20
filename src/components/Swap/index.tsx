"use client";
import React from "react";
// import { useContractRead, useConnect, useAccount, useEnsAvatar, useEnsName, useDisconnect } from 'wagmi';
// import { getPublicClient, getWalletClient } from '@wagmi/core'
import { SwapWidget, darkTheme } from "@uniswap/widgets";

const Swap = () => {
  return (
    <>
      <SwapWidget theme={darkTheme} width="calc(100vw - 32px)" />
    </>
  );
  // const { address, connector, isConnected } = useAccount()
  // const { connect, connectors, error, isLoading, pendingConnector } =
  //   useConnect()

  // if (isConnected) {
  //   return (
  //     <div>
  //       {/* <SwapWidget width={480}/> */}
  //     </div>
  //   )
  // }

  // return (
  //   <div>
  //     {connectors.map((connector) => (
  //       <button
  //         disabled={!connector.ready}
  //         key={connector.id}
  //         onClick={() => connect({ connector })}
  //       >
  //         {connector.name}
  //         {!connector.ready && ' (unsupported)'}
  //         {isLoading &&
  //           connector.id === pendingConnector?.id &&
  //           ' (connecting)'}
  //       </button>
  //     ))}

  //     {error && <div>{error.message}</div>}
  //   </div>
  //  )
};

export default Swap;
