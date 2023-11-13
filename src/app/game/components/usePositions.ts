import {Position} from './type'
import { useEffect, useState, useCallback} from 'react'

export default function usePositions() {
  const [positions, setPositions] = useState<Position[]>([])

  const updatePositions = useCallback(async () => {
    const response = await fetch('/api/game/map/get')
    const data = await response.json()
    setPositions(data.data || [])
  }, [])
  
  useEffect(() => {
    updatePositions()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return {
    positions,
    updatePositions,
  }
}