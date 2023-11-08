
const typeMap: Record<string, string> = {
  grass: '草',
  sheep: '羊',
  wolf: '狼',
}

export const genBuySuccessLog = (type: string, id: number) => {
  return `购买成功，获得「${typeMap[type] || ''}#${id}」,\n 请在「我的资产」中查看`
}