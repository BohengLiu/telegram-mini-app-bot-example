'use client';

interface Props {
  type: string;
  total: number
  onDetail: () => void
  onBuy: () => void
}

export default function RoleDisplay({type, total, onDetail, onBuy}: Props) {
  const label = type === 'wolf' ? '狼' : type === 'sheep' ? '羊' : '草'
  return (
    <div className="mt-4 w-full px-6 py-1 flex items-center justify-between">
      <p className="flex-1">{`总${label}数：${total}`}</p>
      <div className="space-x-2">
        <span
          className="border px-3 py-1 border-black text-sm"
          onClick={() => onDetail()}
        >
          详情
        </span>
        <span
          className="border px-3 py-1 border-black text-sm"
          onClick={() => onBuy()}
        >
          购买
        </span>
      </div>
    </div>
  );
}
