import { useEffect, useState } from 'react'
import {Asset} from './type'


export default function useAsset(userId: number) {
  const [asset, setAsset] = useState<Asset | null>(null)

  const updateAsset = async () => {
    const response = await fetch(`/api/user/asset/get?userId=${userId}`)
    const data = await response.json()
    if (data.code === 0) {
      setAsset(data.data)
    }
  }

  useEffect(() => {
    updateAsset()
  }, [])
  return {
    asset,
    updateAsset
  }
}