'use client'

import React from 'react'

const DebugPage: React.FC = () => {
  const hasCpyto = typeof window !== "undefined" && (window as any).cpyto !== undefined
  return (
    <div>
      <h1>DebugPage</h1>
      <div>
        <span>Has Cpyto: {String(hasCpyto)}</span>
      </div>
    </div>
  )
}

export default DebugPage