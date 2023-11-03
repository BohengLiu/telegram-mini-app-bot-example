import {GameStatus} from './type'
import { useEffect, useState} from 'react'

export default function useGameStatus() {
  const [gamestatus, setGameStatus] = useState<GameStatus | null>(null)

  const updateGameStatus = async () => {
    const response = await fetch('http://1.116.37.183:8080/game/status/get')
    const data = await response.json()
    setGameStatus(data.data)
  }
  useEffect(() => {
    updateGameStatus()
    const interval = setInterval(updateGameStatus, 20000)
    return () => clearInterval(interval)
  }, [])
  return gamestatus
}