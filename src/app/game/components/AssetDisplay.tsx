import { useState } from "react";
import { Asset, Grass } from "./type";
import toast from "react-hot-toast";
import { formatNumber } from "@/utils/formatter";

interface Props {
  asset?: Asset | null;
  userId?: number;
}

export default function AssetDisplay({ asset, userId }: Props) {
  const [tab, setTab] = useState("grass");
  const nft = asset ? (asset[tab as keyof Asset] as any as Grass[]) : null;

  const sell = async (id: number) => {
    const res = await fetch(`/api/game/${tab}/sell`, {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        [`${tab}Id`]: id,
      }),
    });
    const data = await res.json();
    if (data.code === 0) {
      toast.success("出售成功");
    }
  };

  return (
    <div className="w-full mt-8 border rounded px-4 py-4">
      <div className="flex justify-between px-2">
        我的资产
        <p>{`余额: ${asset?.balance || 0}`}</p>
      </div>
      <div className="flex items-center justify-around mt-2">
        <span
          className={`${
            tab === "grass" ? "border  border-black" : ""
          } px-2 py-1`}
          onClick={() => setTab("grass")}
        >
          草
        </span>
        <span
          className={`${
            tab === "sheep" ? "border border-black" : ""
          } px-2 py-1`}
          onClick={() => setTab("sheep")}
        >
          羊
        </span>
        <span
          className={`${tab === "wolf" ? "border border-black" : ""} px-2 py-1`}
          onClick={() => setTab("wolf")}
        >
          狼
        </span>
      </div>
      <div className="flex flex-col relative w-full mt-4 max-h-[300px] overflow-y-auto">
        <table className=" w-full ">
          <thead>
            <tr className="sticky top-0 bg-white">
              <th className="w-1/3">ID</th>
              <th className="w-1/3">能量</th>
              <th className="w-1/3">操作</th>
            </tr>
          </thead>
          <tbody className="">
            {nft?.map((item) => (
              <tr key={item.id} className="text-center py-2 text-sm">
                <td className="py-2">#{item.id}</td>
                <td className="py-2">{formatNumber(item.energy)}</td>
                <td className="py-2">
                  <span
                    className="py-1 px-2 border border-black text-xs"
                    onClick={() => {
                      sell(item.id);
                    }}
                  >
                    卖出
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
