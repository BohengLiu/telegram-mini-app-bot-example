"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function OnboardingModal({ isOpen, onClose }: Props) {
  const [url, setUrl] = useState("");
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                {/* <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  
                </Dialog.Title> */}
                <div className="flex flex-col items-center">
                  <a
                    href={`https://t.me/share/url?url=${
                      typeof window != "undefined"
                        ? window.encodeURIComponent(
                            "https://t.me/my_tg_twa_counter_bot"
                          )
                        : "https://t.me/my_tg_twa_counter_bot"
                    }&text=${
                      typeof window != "undefined"
                        ? window.encodeURIComponent("hello")
                        : "hello"
                    }`}
                  >
                    Share
                  </a>
                  {/* <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" placeholder="okx" className="border" />
                  <a href={url} target="_blank">
                    打开钱包
                  </a> */}
                </div>
                {/* <script async src="
                  <a href="okx" />
                </div>
                {/* <script async src="https://telegram.org/js/telegram-widget.js?22" data-telegram-share-url="https://core.telegram.org/widgets/share"></script> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
