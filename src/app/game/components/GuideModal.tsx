"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuideModal({ isOpen, onClose }: Props) {
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
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  游戏教程
                </Dialog.Title>
                <div className=" w-full overflow-auto h-[60vh] space-y-2 py-4">
                  <p>
                    1.
                    每回合持续时间10分钟，前9分钟为操作时间，后一分钟为结算时间，结算时间不能操作。
                  </p>
                  <p>
                    2.
                    购买草、羊、狼角色分别消耗2，50，200代币，初始能量值分别为2，50，200，能量值清零时角色死亡无法操作{" "}
                  </p>
                  <p>
                    3. 结算逻辑如下：
                    <ul className="pl-4 space-y-1">
                      <li>
                        a.
                        每回合每只狼会进行捕食，按照铸造顺序先后结算，结算开始先消耗20点能量进入池子作为活动消耗。当有草的情况下，狼会随机选择一只羊捕食，被捕食的羊能量清零，其中40%的能量归入池子，60%的能量归狼。当狼的能量大于400时，会分裂成2只狼。所有狼都结算完毕后，如果狼的数量大于100，则所有狼的能量减少100归于池子，开始羊结算。
                      </li>
                      <li>
                        b.
                        每回合每只羊会进食吃草，按照铸造顺序先后结算，结算开始先消耗5点能量进入池子作为活动消耗。当有草的情况下，羊会随机选择一棵草进食，被进食的草能量清零，其中40%的能量归入池子，60%的能量归羊。当羊的能量大于100时，会分裂成2只羊。所有羊都结算完毕后，开始草的结算。
                      </li>
                      <li>c. 每回合所有草平均分配所有池子里的能量。</li>
                    </ul>
                  </p>
                  <p>4. 操作阶段可以出售角色，获得能量相应的代币。 </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-lime-300 px-4 py-2 text-sm font-medium text-black focus:outline-none "
                    onClick={onClose}
                  >
                    我了解了
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
