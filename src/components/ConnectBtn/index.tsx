"use client";

import React from "react";

export default function ConnectBtn() {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.open(
        "metamask://wc?uri=wc%3Af5f379dc4ab4926ec799bf5fd5a4a9a9ed1dd252dd12626155ecf0373c6c1231%402%3Frelay-protocol%3Dirn%26symKey%3D94484d3c810fe7d7464d0d156f8fc8a3eefdf2f973766e6b069e51ead898a8e7",
        "_blank",
        "noopener noreferrer"
      );
    }
  };
  return (
    <div
      className="rounded-lg mt-4 w-full bg-blue-600 text-white flex justify-center items-center py-1 px-4"
      onClick={handleClick}
    >
      Test Connect
    </div>
  );
}
