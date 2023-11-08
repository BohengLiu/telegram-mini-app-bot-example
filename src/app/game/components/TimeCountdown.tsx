"use client";

import React, { useState, useEffect } from "react";

function CountdownTimer({ targetTime, onTimeout }: { targetTime: string; onTimeout: () => void }) {
  const ts = new Date(targetTime).valueOf() / 1000;
  const seconds = Math.floor( ts - Date.now().valueOf() / 1000);
  const [, update] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined = undefined;

    timer = setInterval(() => {
      const seconds = Math.floor( ts - Date.now().valueOf() / 1000);
      if (seconds <= 0) {
        onTimeout()
      }
      update((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetTime]);

  return <p>下回合还有{seconds > 0 ? seconds : 0}区块</p>;
}

export default CountdownTimer;
