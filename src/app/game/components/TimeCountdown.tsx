"use client";

import React, { useState, useEffect } from "react";

function CountdownTimer({ targetTime }: { targetTime: string }) {
  const ts = new Date(targetTime).valueOf() / 1000;
  const seconds = Math.floor(600 + ts - Date.now().valueOf() / 1000);
  const [, setSeconds] = useState(seconds);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined = undefined;

    timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetTime]);

  return <p>下回合倒计时: {seconds} 秒</p>;
}

export default CountdownTimer;
