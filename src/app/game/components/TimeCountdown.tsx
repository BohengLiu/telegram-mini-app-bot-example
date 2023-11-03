"use client";

import React, { useState, useEffect } from "react";

function CountdownTimer({ targetTime }: { targetTime: string }) {
  const ts = new Date(targetTime).valueOf() / 1000;
  const seconds = Math.floor( ts - Date.now().valueOf() / 1000);
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

  return <p>下回合还有{seconds}区块</p>;
}

export default CountdownTimer;
