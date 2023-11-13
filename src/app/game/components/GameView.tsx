"use client";

import { useCallback, useEffect, useState } from "react";
import useGameStatus from "./useGameStatus";
import useGrassInfo from "./useGrassInfo";
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
import GuideModal from "./GuideModal";
import { genBuySuccessLog } from "@/utils/game";
import useUserLogs from "./useUserLogs";
// import Grid from "./Grid";
// import usePositions from "./usePositions";

export default function GameView() {
  const [initDataUnsafe, setInitDataUnsafe] = useState<any | null>(null);

  const [isDetailOpen, setIsDetailOpen] = useState("");
  const [isBuyOpen, setIsBuyOpen] = useState(false);

  // ----------------- Debug获得Tg注入内容 -----------------

  const [curUrl, setCurUrl] = useState("");

  useEffect(() => {
    setCurUrl(window.location.href);
  }, []);
  // --------------------------------------------------

  // ----------------- 教程弹窗 -----------------

  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const handleGuideOpen = useCallback(() => {
    setIsGuideOpen(true);
  }, []);

  const handleGuideClose = useCallback(() => {
    setIsGuideOpen(false);
  }, []);

  // --------------------------------------------------

  // const { positions, updatePositions } = usePositions()


  useEffect(() => {
    if ((window as any)?.Telegram?.WebApp?.initDataUnsafe) {
      console.log((window as any).Telegram?.WebApp?.initDataUnsafe);
      setInitDataUnsafe((window as any)?.Telegram?.WebApp?.initDataUnsafe);
    }
  }, []);
  const { gameStatus, updateGameStatus } = useGameStatus();
  const { totalGrass, grasses, updateGrasses } = useGrassInfo();
  const { totalSheep, sheeps, updateSheep } = useSheepInfo();
  const { totalWolves, wolves, updateWolves } = useWolfInfo();

  const userId = initDataUnsafe?.user?.id
    ? Number(initDataUnsafe?.user?.id)
    : 0;
  const { asset, updateAsset } = useAsset(userId);
  const { updateUserLog, userLogs } = useUserLogs(userId);

  const buy = async (type: string) => {
    const res = await fetch(`/api/game/${type}/buy`, {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data.code === 0) {
      toast.success(genBuySuccessLog(type, data?.data?.id));
      if (type === "grass") {
        await updateGrasses();
      }
      if (type === "sheep") {
        await updateSheep();
      }
      if (type === "wolf") {
        await updateWolves();
      }
      await updateAsset();
      await updateUserLog();
    }
  };

  return (
    <div className="max-w-[100vw] w-full">
      {initDataUnsafe?.user && (
        <div className="flex justify-between py-2">
          <p className="text-center">{`Hi, ${initDataUnsafe?.user?.username}(${initDataUnsafe?.user?.id})`}</p>
          <span onClick={handleGuideOpen}>查看教程</span>
        </div>
      )}
      <div className="border px-4 py-4 rounded">
        {/* <Grid positions={positions} /> */}
        {gameStatus && (
          <p className="text-center">
            {`当前回合：${gameStatus.round}, 能量池：${formatNumber(
              gameStatus.init_pool_balance > 0
                ? gameStatus.init_pool_balance
                : 0
            )}，`}{" "}
            <CountdownTimer
              targetTime={gameStatus.liquidation_time}
              onTimeout={async () => {
                await updateGameStatus();
                await updateGrasses();
                await updateSheep();
                await updateWolves();
              }}
            />
          </p>
        )}
        <RoleDisplay
          type="grass"
          total={totalGrass}
          onDetail={() => setIsDetailOpen("grass")}
          onBuy={() => buy("grass")}
        />
        <RoleDisplay
          type="sheep"
          total={totalSheep}
          onDetail={() => setIsDetailOpen("sheep")}
          onBuy={() => buy("sheep")}
        />
        <RoleDisplay
          type="wolf"
          total={totalWolves}
          onDetail={() => setIsDetailOpen("wolf")}
          onBuy={() => buy("wolf")}
        />
      </div>
      <AssetDisplay
        asset={asset}
        userId={userId}
        onSelled={updateAsset}
        logs={userLogs}
      />
      <RoleDetailModal
        isOpen={Boolean(isDetailOpen)}
        type={isDetailOpen}
        grasses={grasses}
        sheeps={sheeps}
        wolves={wolves}
        onClose={() => setIsDetailOpen("")}
      />

      <BuyModal
        userId={userId}
        isOpen={isBuyOpen}
        onClose={() => setIsBuyOpen(false)}
        type="grass"
        onSuccess={() => console.log("success")}
      />
      <GuideModal isOpen={isGuideOpen} onClose={handleGuideClose} />
      <Toaster />
    </div>
  );
}
