'use client';
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { formatNumber } from "@/utils/formatter";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  type: string;
  grasses: any[];
  sheeps: any[];
  wolves: any[];
}

export default function RoleDetailModal({
  isOpen,
  type,
  grasses,
  sheeps,
  wolves,
  onClose,
}: Props) {

  const data = type === "grass" ? grasses : type === "sheep" ? sheeps : wolves;

  return (
    <Transition appear show={Boolean(isOpen)} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={onClose}
      >
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
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  详情
                </Dialog.Title>
                <div className="h-[50vh] w-full overflow-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="">
                        <th className="w-[60%]">ID</th>
                        <th>能量</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((grass) => (
                        <tr key={grass.id}>
                          <td>{grass.id}</td>
                          <td>{formatNumber(grass.energy)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    关闭
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
