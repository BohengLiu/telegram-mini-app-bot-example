"use client";

import type { WcWallet } from "@web3modal/core";
import { Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { walletConfig } from "./walletConfig";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function WalletConnector({ open, onClose }: Props) {
  const [step, setStep] = useState("list");
  const [selectedWallet, setSelectedWallet] = useState<WcWallet | null>(null);

  return (
    <Transition
      show={open}
      enter="transition duration-100 ease-out"
      enterFrom="transform translate-y-full"
      enterTo="transform translate-y-0"
      leave="transition duration-75 ease-out"
      leaveFrom="transform translate-y-0"
      leaveTo="transform translate-y-full"
      as={Fragment}
    >
      <div
        id="drawer-bottom-example"
        className="fixed bottom-0 left-0 right-0 z-40 w-full p-4 overflow-y-auto transition-transform bg-gray-800"
        aria-labelledby="drawer-bottom-label"
      >
        {step === "list" && (
          <>
            <div className="flex py-2 px-4">
              <h2 className="flex-grow">123</h2>
              <span onClick={onClose}>X</span>
            </div>
            <div>
              {walletConfig.map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedWallet(item);
                      setStep("detail");
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
          </>
        )}
        {step === "detail" && selectedWallet && (
          <>
            <div className="flex py-2 px-4">
              <h2 className="flex-grow">123</h2>
              <span onClick={onClose}>X</span>
            </div>
            <div>
              {walletConfig.map((item) => {
                return <div key={item.id}>{item.name}</div>;
              })}
            </div>
          </>
        )}
      </div>
    </Transition>
  );
}
