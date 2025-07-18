"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function PageTemplate({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 150)

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div 
      className={`min-h-screen transition-all duration-300 ease-in-out ${
        isLoading ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
      }`}
    >
      {children}
    </div>
  )
}
