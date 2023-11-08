import { GameLog } from "./type";
import { useCallback, useEffect, useState } from "react";

export default function useUserLogs(userId: number) {
  const [userLogs, setUserLogs] = useState<GameLog[]>([]);

  const updateUserLog = useCallback(async () => {
    const res = await fetch(`/api/user/log/get?userId=${userId}`, {
      method: "GET",
    });
    const data = await res.json();
    if (data.code === 0) {
      setUserLogs(data.data);
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      updateUserLog();
    }
  }, [userId, updateUserLog]);

  return {
    userLogs,
    updateUserLog,
  };
}
