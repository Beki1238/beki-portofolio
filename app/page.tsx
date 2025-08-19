"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Download, ArrowRight, Code, Sparkles, Rocket, Star, Users, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import styles from './Home.module.css'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const stats = [
    { icon: <Code className={styles.iconMedium} />, value: "50+", label: "Projects Completed" },
    { icon: <Star className={styles.iconMedium} />, value: "30+", label: "GitHub Stars" },
    { icon: <Users className={styles.iconMedium} />, value: "100+", label: "Happy Clients" },
    { icon: <Coffee className={styles.iconMedium} />, value: "∞", label: "Cups of Coffee" },
  ]

  const quickLinks = [
    {
      title: "About Me",
      description: "Learn about my background, experience, and what drives me as a developer.",
      href: "/about",
      icon: <Users className={styles.iconLarge} />,
      color: styles.gradientBlue,
    },
    {
      title: "Skills & Tech",
      description: "Explore the technologies and tools I use to bring ideas to life.",
      href: "/skills",
      icon: <Code className={styles.iconLarge} />,
      color: styles.gradientGreen,
    },
    {
      title: "Projects",
      description: "Check out my latest work and the solutions I've built for various challenges.",
      href: "/projects",
      icon: <Rocket className={styles.iconLarge} />,
      color: styles.gradientPurple,
    },
  ]

  return (
    <div className={styles.mainContainer}>
      <Navbar />

      {/* Animated Background */}
      <div className={styles.animatedBackground}>
        <div
          className={styles.animatedBgCircleBlue}
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className={styles.animatedBgCircleGreen}
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            {/* Left Content */}
            <div className={styles.heroLeft}>
              <div className={styles.heroTextContent}>
                <div className={`${styles.welcomeTag} ${styles.animateFadeInUp} ${styles.delay200}`}>
                  <Sparkles className={styles.iconSmall} />
                  <span>Welcome to my portfolio</span>
                </div>

                <h1 className={`${styles.heroTitle} ${styles.animateFadeInUp} ${styles.delay400}`}>
                  Hi, I'm <span className={styles.gradientText}>Beki</span>
                </h1>

                <h2 className={`${styles.heroSubtitle} ${styles.animateFadeInUp} ${styles.delay600}`}>
                  Full-Stack Developer
                </h2>

                <p className={`${styles.heroDescription} ${styles.animateFadeInUp} ${styles.delay800}`}>
                  I craft exceptional digital experiences through clean code, innovative solutions, and user-centered design. Let's build something amazing together.
                </p>
              </div>

              <div className={`${styles.heroActions} ${styles.animateFadeInUp} ${styles.delay1000}`}>
                <Button asChild className={styles.primaryButton}>
                  <Link href="/projects">
                    View My Work
                    <ArrowRight className={`${styles.iconSmall} ${styles.buttonIcon}`} />
                  </Link>
                </Button>
                <Button variant="outline" className={styles.outlineButton}>
                  <Download className={`${styles.iconSmall} ${styles.buttonIcon}`} />
                  Download CV
                </Button>
              </div>

              <div className={`${styles.socialIcons} ${styles.animateFadeInUp} ${styles.delay1200}`}>
                <a href="https://github.com/beki1238" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <Github className={styles.iconMedium} />
                </a>
                <a href="https://www.linkedin.com/in/bereket-bahiru-73bb08297/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                  <Linkedin className={styles.iconMedium} />
                </a>
                <a href="mailto:bahibeki@gmail.com" className={styles.socialIcon}>
                  <Mail className={styles.iconMedium} />
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className={`${styles.heroRight} ${styles.animateFadeInUp} ${styles.delay600}`}>
              <div className={styles.profileImageContainer}>
                {/* Animated rings */}
                <div className={styles.ringOuter}></div>
                <div className={styles.ringInner}></div>

                {/* Profile Image */}
                <div className={styles.profileImageWrapper}>
                  <img
                    src="/images/beki.jpg"
                    alt="Beki Developer"
                    className={styles.profileImage}
                  />
                </div>

                {/* Floating elements */}
                <div className={styles.floatingRocket}>
                  <Rocket className={styles.iconLarge} />
                </div>

                <div className={styles.floatingCode}>
                  <Code className={styles.iconMedium} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <Card
                key={index}
                className={`${styles.statsCard} ${styles.animateFadeInUp}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className={styles.statsCardContent}>
                  <div className={styles.statsIcon}>{stat.icon}</div>
                  <div className={styles.statsValue}>{stat.value}</div>
                  <div className={styles.statsLabel}>{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className={styles.quickLinksSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Explore My Work</h2>
            <p className={styles.sectionDescription}>
              Discover my journey, skills, and projects. Each section tells a part of my story as a developer.
            </p>
          </div>

          <div className={styles.quickLinksContainer}>
            <div className={styles.quickLinksGrid}>
              {quickLinks.map((item, index) => (
                <Card key={index} className={styles.quickLinkCard}>
                  <Link href={item.href} className={styles.quickLinkWrapper}>
                    <CardContent className={styles.quickLinkContent}>
                      <div className={`${styles.quickLinkIcon} ${item.color}`}>
                        {item.icon}
                      </div>
                      <h3 className={styles.quickLinkTitle}>{item.title}</h3>
                      <p className={styles.quickLinkDescription}>{item.description}</p>
                      <div className={styles.quickLinkCta}>
                        <span>Learn more</span>
                        <ArrowRight className={styles.iconSmall} />
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}