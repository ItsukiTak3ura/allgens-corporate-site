'use client'

import { useEffect, useState } from 'react'

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // 1秒に短縮

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-dark-950 transition-opacity duration-500">
      <div className="text-center">
        <div className="mb-8 animate-scale-in">
          <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 font-en tracking-tight">
            ALLGENS
          </div>
        </div>
        
        <div className="w-16 h-16 mx-auto mb-4 animate-in">
          <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full animate-spin" />
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 font-jp animate-in-up">
          読み込み中...
        </p>
      </div>
    </div>
  )
}
