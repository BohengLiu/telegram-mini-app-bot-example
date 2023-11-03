import {Sheep} from './type'
import { useEffect, useState} from 'react'

export default function useSheepInfo() {
  const [grassInfo, setGrassInfo] = useState<Sheep[]>([])

  const updateGameStatus = async () => {
    const response = await fetch('/api/game/sheep/active/get')
    const data = await response.json()
    setGrassInfo(data.data || [])
  }
  useEffect(() => {
    updateGameStatus()
  }, [])
  return {
    totalSheep: grassInfo?.length,
    sheeps: grassInfo,
    updateSheep: updateGameStatus
  }
}