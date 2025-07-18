"use client"

import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { cn } from "@/lib/utils"

interface NavbarProps {
  onGameSelect?: (gameName: string) => void
  currentGameTitle?: string
  isMobile?: boolean
  onShowGameList?: () => void
  onNavigateHome?: () => void
  onToggleTheme?: () => void
  isDarkMode?: boolean
  featuresId?: string // 新增
}

export default function Navbar({ 
  onGameSelect, 
  currentGameTitle,
  isMobile,
  onShowGameList,
  onNavigateHome,
  featuresId // 新增
}: NavbarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [siteName, setSiteName] = useState("Grow a Garden Mutations")
  const [logo, setLogo] = useState("/images/logo.png");

  // 动态 navItems
  const navItems = [
    { name: "Home", id: "game-frame" },
    { name: "Features", id: featuresId || "key-features-of-steal-a-brainrot-script" },
    { name: "What are mutations", id: "what-are-mutations" },
    { name: "What are Grow a Garden pet mutations?", id: "why-play" },
    { name: "Here are the pet mutations", id: "pet-mutations" },
    { name: "Mutations", id: "all-mutations" },
    { name: "FAQ", id: "faq" }
  ]

  useEffect(() => {
    // Load config from API
    fetch('/api/config')
      .then(res => res.json())
      .then(data => {
        setSiteName(data.siteName || "Steal a Brainrot Script");
        setLogo(data.logo || "/images/logo.png");
      })
      .catch(error => {
        console.error('Error loading site config:', error)
      })
  }, [])

  const handleScroll = (id: string) => {
    // If on More Games page, redirect to home first
    if (pathname === '/more-games') {
      router.push('/')
      return
    }
    
    const element = document.getElementById(id)
    if (element) {
      const offset = element.offsetTop - 80 // Account for navbar height
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      })
    }
    setIsMenuOpen(false)
  }

  const handleLogoClick = () => {
    if (onNavigateHome) {
      onNavigateHome()
    } else {
      router.push('/')
    }
  }

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center space-x-2">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <img
                src={logo}
                alt="Game Logo"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide animate-gradient-x">
              {siteName}
            </span>
          </button>

          {/* Right side navigation and buttons */}
          <div className="flex items-center space-x-6">
            {/* Navigation links - desktop only */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-white hover:text-purple-400 transition-colors text-sm"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button - always visible on mobile */}
            <button
              className="block md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-0 right-0 w-64 h-screen bg-gray-900 shadow-lg z-50">
            <div className="flex justify-end p-2 border-b border-gray-800">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-400 hover:text-white p-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Menu items */}
            <div className="p-4 space-y-2">
              {/* Show navigation items */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="block w-full text-left text-white hover:text-purple-400 transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
              
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

