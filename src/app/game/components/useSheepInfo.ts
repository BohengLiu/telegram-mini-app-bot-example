import {Sheep} from './type'
import { useEffect, useState, useCallback} from 'react'

export default function useSheepInfo() {
  const [grassInfo, setGrassInfo] = useState<Sheep[]>([])

  const updateGameStatus = useCallback(async () => {
    const response = await fetch('/api/game/sheep/active/get')
    const data = await response.json()
    setGrassInfo(data.data || [])
  }, [])
  
  useEffect(() => {
    updateGameStatus()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    totalSheep: grassInfo?.length,
    sheeps: grassInfo,
    updateSheep: updateGameStatus
  }
}