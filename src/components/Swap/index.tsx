import React from "react";
import { SwapWidget, darkTheme } from "@uniswap/widgets";

const Swap = () => {
  return (
    <>
      <SwapWidget theme={darkTheme} width="calc(100vw - 32px)" />
    </>
  );
};

export default Swap;
