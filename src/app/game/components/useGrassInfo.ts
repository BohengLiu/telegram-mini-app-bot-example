import {Grass} from './type'
import { useEffect, useState, useCallback} from 'react'

export default function useGrassInfo() {
  const [grassInfo, setGrassInfo] = useState<Grass[]>([])

  const updateGameStatus = useCallback(async () => {
    const response = await fetch('/api/game/grass/active/get')
    const data = await response.json()
    setGrassInfo(data.data || [])
  }, [])
  
  useEffect(() => {
    updateGameStatus()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    totalGrass: grassInfo?.length,
    grasses: grassInfo,
    updateGrasses: updateGameStatus
  }
}