"use client";

import { useEffect, useState, Fragment } from "react";
import useGameStatus from "./useGameStatus";
import useGrassInfo from "./useGrassInfo";
import { Dialog, Transition } from "@headlessui/react";
import BuyModal from "./BuyModal";
import useAsset from "./useAsset";
import AssetDisplay from "./AssetDisplay";
import { Toaster } from "react-hot-toast";
import RoleDisplay from "./RoleDisplay";
import useSheepInfo from "./useSheepInfo";
import useWolfInfo from "./useWolfInfo";
import RoleDetailModal from "./RoleDetailModal";
import toast from "react-hot-toast";
import CountdownTimer from "./TimeCountdown";
import { formatNumber } from "@/utils/formatter";

export default function GameView() {
  const [initDataUnsafe, setInitDataUnsafe] = useState<any | null>(null);

  const [isDetailOpen, setIsDetailOpen] = useState('');
  const [isBuyOpen, setIsBuyOpen] = useState(false);

  useEffect(() => {
    if ((window as any)?.Telegram?.WebApp?.initDataUnsafe) {
      console.log((window as any).Telegram?.WebApp?.initDataUnsafe);
      setInitDataUnsafe((window as any)?.Telegram?.WebApp?.initDataUnsafe);
    }
  }, []);
  const gameStatus = useGameStatus();
  const { totalGrass, grasses, updateGrasses } = useGrassInfo();
  const { totalSheep, sheeps, updateSheep } = useSheepInfo();
  const { totalWolves, wolves, updateWolves } = useWolfInfo()
  const { asset, updateAsset } = useAsset(1);

  const userId = initDataUnsafe?.user?.id || 1;

  const buy = async (type: string ) => {
    console.log('购买')
    const res = await fetch(`http://1.116.37.183:8080/game/${type}/buy`, {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
      }),
    });
    const data = await res.json();
    console.log(data)
    if (data.code === 0) {
      toast.success("购买成功");
      if (type === 'grass') {
        await updateGrasses()
      }
      if (type === 'sheep') {
        await updateSheep()
      }
      if (type === 'wolf') {
        await updateWolves()
      }
      await updateAsset()
    }
  };

  

  return (
    <div className="max-w-[100vw] w-full">
      {initDataUnsafe?.user && (
        <p>{`Hi, ${initDataUnsafe?.user?.username}(${initDataUnsafe?.user?.id})`}</p>
      )}
      <div className="border px-4 py-4 rounded">
        {gameStatus && (
          <p className="text-center">{`当前回合：${gameStatus.round}, 能量池：${formatNumber(gameStatus.init_pool_balance)}，`} <CountdownTimer targetTime={gameStatus.liquidation_time} /> </p>
        )}
        <RoleDisplay type="grass" total={totalGrass} onDetail={() => setIsDetailOpen('grass')} onBuy={() => buy('grass')} />
        <RoleDisplay type="sheep" total={totalSheep} onDetail={() => setIsDetailOpen('sheep')} onBuy={() => buy('sheep')} />
        <RoleDisplay type="wolf" total={totalWolves} onDetail={() => setIsDetailOpen('wolf')} onBuy={() => buy('wolf')} />
      </div>
      <AssetDisplay asset={asset} userId={1} />
      <RoleDetailModal isOpen={Boolean(isDetailOpen)} type={isDetailOpen} grasses={grasses} sheeps={sheeps} wolves={wolves} onClose={() => setIsDetailOpen('')} />

      <BuyModal
        userId={1}
        isOpen={isBuyOpen}
        onClose={() => setIsBuyOpen(false)}
        type="grass"
        onSuccess={() => console.log("success")}
      />
      <Toaster />
    </div>
  );
}
