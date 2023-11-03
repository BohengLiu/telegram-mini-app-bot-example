import { useEffect, useState } from 'react'
import {Asset} from './type'


export default function useAsset(userId: number) {
  const [asset, setAsset] = useState<Asset | null>(null)

  const updateAsset = async () => {
    const response = await fetch(`http://1.116.37.183:8080/user/asset/get?userId=${userId}`)
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