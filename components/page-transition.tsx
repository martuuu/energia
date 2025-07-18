"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentPath, setCurrentPath] = useState(pathname)

  useEffect(() => {
    if (pathname !== currentPath) {
      // Start transition
      setIsTransitioning(true)
      
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
      
      // Update path and end transition
      const timer = setTimeout(() => {
        setCurrentPath(pathname)
        setIsTransitioning(false)
      }, 150)

      return () => clearTimeout(timer)
    }
  }, [pathname, currentPath])

  return (
    <div 
      className={`min-h-screen transition-all duration-300 ease-out ${
        isTransitioning 
          ? 'opacity-95 transform scale-[0.99] filter blur-[1px]' 
          : 'opacity-100 transform scale-100 filter blur-none'
      }`}
    >
      {children}
    </div>
  )
}
