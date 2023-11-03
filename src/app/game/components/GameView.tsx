'use client';

import { useEffect, useState } from 'react';

export default function GameView() {
  const [initDataUnsafe, setInitDataUnsafe] = useState<any | null>(null);
  useEffect(() => {
    if ((window as any).Telegram.WebApp.initDataUnsafe) {
      console.log((window as any).Telegram.WebApp.initDataUnsafe);
      setInitDataUnsafe((window as any).Telegram.WebApp.initDataUnsafe)
    }
  }, []);
  
  return <div>{JSON.stringify(initDataUnsafe)}</div>
}