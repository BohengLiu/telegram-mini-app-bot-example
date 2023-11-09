import {GameStatus} from './type'
import { useEffect, useState, useCallback} from 'react'

export default function useGameStatus() {
  const [gameStatus, setGameStatus] = useState<GameStatus | null>(null)

  const updateGameStatus = useCallback(async () => {
    const response = await fetch('/api/game/status/get')
    const data = await response.json()
    setGameStatus(data.data)
  }, [])
  useEffect(() => {
    updateGameStatus()
    const interval = setInterval(updateGameStatus, 20000)
    return () => clearInterval(interval)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    gameStatus,
    updateGameStatus,
  }
}