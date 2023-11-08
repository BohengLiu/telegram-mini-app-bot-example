import {Wolf} from './type'
import { useEffect, useState, useCallback} from 'react'

export default function useWolfInfo() {
  const [grassInfo, setGrassInfo] = useState<Wolf[]>([])

  const updateGameStatus = useCallback(async () => {
    const response = await fetch('/api/game/wolf/active/get')
    const data = await response.json()
    setGrassInfo(data.data || [])
  }, [])
  useEffect(() => {
    updateGameStatus()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    totalWolves: grassInfo?.length,
    wolves: grassInfo,
    updateWolves: updateGameStatus
  }
}