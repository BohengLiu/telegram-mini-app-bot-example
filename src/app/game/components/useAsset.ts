import { useCallback, useEffect, useState } from 'react'
import {Asset} from './type'


export default function useAsset(userId: number) {
  const [asset, setAsset] = useState<Asset | null>(null)

  const updateAsset = useCallback(async () => {
    const response = await fetch(`/api/user/asset/get?userId=${userId}`)
    const data = await response.json()
    if (data.code === 0) {
      setAsset(data.data || null)
    }
  }, [userId])

  useEffect(() => {
    if (userId) {
      updateAsset()
    }

  }, [updateAsset, userId])
  return {
    asset,
    updateAsset
  }
}