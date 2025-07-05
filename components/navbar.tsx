"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Code, Menu, X, Home, User, Zap, Briefcase, ImageIcon, Mail } from "lucide-react"
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", icon: <Home className={styles.navIcon} /> },
    { name: "About", href: "/about", icon: <User className={styles.navIcon} /> },
    { name: "Skills", href: "/skills", icon: <Zap className={styles.navIcon} /> },
    { name: "Projects", href: "/projects", icon: <Briefcase className={styles.navIcon} /> },
    { name: "Gallery", href: "/gallery", icon: <ImageIcon className={styles.navIcon} /> },
    { name: "Contact", href: "/contact", icon: <Mail className={styles.navIcon} /> },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Brand Logo */}
          <Link 
            href="/" 
            className={styles.brandLink}
            onClick={() => setIsMenuOpen(false)}
          >
            <div className={styles.brandLogo}>
              <Code className={styles.brandIcon} />
            </div>
            <span className={styles.brandText}>Bereket Bahiru</span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navItem} ${
                  pathname === item.href ? styles.activeNavItem : ''
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <X className={styles.menuIcon} />
            ) : (
              <Menu className={styles.menuIcon} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`${styles.mobileItem} ${
                  pathname === item.href ? styles.activeMobileItem : ''
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}