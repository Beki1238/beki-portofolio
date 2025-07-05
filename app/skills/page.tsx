"use client"

import { useState, useEffect } from "react"
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Shield,
  Cloud,
  Zap,
  Star,
  TrendingUp,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import styles from './Skills.module.css'

export default function Skills() {
  const [scrollY, setScrollY] = useState(0)
  const [activeCategory, setActiveCategory] = useState("all")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skillCategories = [
    { id: "all", name: "All Skills", icon: <Star className={styles.categoryIcon} /> },
    { id: "frontend", name: "Frontend", icon: <Globe className={styles.categoryIcon} /> },
    { id: "backend", name: "Backend", icon: <Server className={styles.categoryIcon} /> },
    { id: "database", name: "Database", icon: <Database className={styles.categoryIcon} /> },
    { id: "mobile", name: "Mobile", icon: <Smartphone className={styles.categoryIcon} /> },
    { id: "devops", name: "DevOps", icon: <Cloud className={styles.categoryIcon} /> },
  ]

  const skills = [
    {
      name: "JavaScript",
      level: 95,
      category: "frontend",
      icon: <Code className={styles.skillIcon} />,
      color: styles.yellowGradient,
      experience: "5+ years",
    },
        {
      name: "React/Next.js",
      level: 92,
      category: "frontend",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-400 to-blue-600",
      experience: "4+ years",
    },
    {
      name: "Node.js",
      level: 88,
      category: "backend",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-400 to-green-600",
      experience: "4+ years",
    },
    {
      name: "Python",
      level: 85,
      category: "backend",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-blue-700",
      experience: "3+ years",
    },
    {
      name: "TypeScript",
      level: 90,
      category: "frontend",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-600 to-blue-800",
      experience: "3+ years",
    },
    {
      name: "MongoDB",
      level: 82,
      category: "database",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-green-700",
      experience: "3+ years",
    },
    {
      name: "PostgreSQL",
      level: 80,
      category: "database",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-700 to-blue-900",
      experience: "2+ years",
    },
    {
      name: "React Native",
      level: 75,
      category: "mobile",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-400 to-purple-600",
      experience: "2+ years",
    },
    {
      name: "Docker",
      level: 78,
      category: "devops",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      experience: "2+ years",
    },
    {
      name: "AWS",
      level: 73,
      category: "devops",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-400 to-orange-600",
      experience: "2+ years",
    },
    {
      name: "Git/GitHub",
      level: 90,
      category: "devops",
      icon: <GitBranch className="w-6 h-6" />,
      color: "from-gray-600 to-gray-800",
      experience: "5+ years",
    },
    {
      name: "UI/UX Design",
      level: 70,
      category: "frontend",
      icon: <Palette className="w-6 h-6" />,
      color: "from-pink-400 to-pink-600",
      experience: "3+ years",
    },
    // ... (other skill objects remain the same)
  ]

  const tools = [
    "VS Code",
    "Figma",
    "Postman",
    "Jira",
    "Slack",
    "Notion",
    "Chrome DevTools",
    "Terminal",
    "Photoshop",
    "Webpack",
    "Vite",
    "ESLint",
  ]

  const filteredSkills = activeCategory === "all" ? skills : skills.filter((skill) => skill.category === activeCategory)

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div
          className={styles.heroBackground}
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className={styles.container}>
          <div className={`${styles.heroContent} ${styles.animateFadeInUp}`}>
            <h1 className={styles.heroTitle}>
              My <span className={styles.highlight}>Skills</span>
            </h1>
            <p className={styles.heroDescription}>
              A comprehensive overview of the technologies, tools, and frameworks I use to build amazing digital
              experiences.
            </p>
          </div>

          {/* Skill Categories Filter */}
          <div className={`${styles.categoryFilters} ${styles.animateFadeInUp}`}>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`${styles.categoryButton} ${
                  activeCategory === category.id ? styles.activeCategory : ""
                }`}
              >
                {category.icon}
                <span className={styles.categoryName}>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className={styles.skillsSection}>
        <div className={styles.container}>
          <div className={styles.skillsGrid}>
            {filteredSkills.map((skill, index) => (
              <Card
                key={skill.name}
                className={`${styles.skillCard} ${styles.animateFadeInUp}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className={styles.skillCardContent}>
                  <div className={styles.skillHeader}>
                    <div className={styles.skillInfo}>
                      <div className={`${styles.skillIconContainer} ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className={styles.skillName}>{skill.name}</h3>
                        <p className={styles.skillExperience}>{skill.experience}</p>
                      </div>
                    </div>
                    <div className={styles.skillLevelInfo}>
                      <div className={styles.skillLevelPercentage}>{skill.level}%</div>
                      <div className={styles.skillLevelLabel}>
                        <TrendingUp className={styles.trendingIcon} />
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.progressContainer}>
                    <div className={styles.progressLabels}>
                      <span className={styles.progressLabel}>Proficiency</span>
                      <span className={styles.progressValue}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBarBackground}>
                      <div
                        className={`${styles.progressBar} ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className={styles.toolsSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animateFadeInUp}`}>
            <h2 className={styles.sectionTitle}>
              Tools & <span className={styles.highlight}>Technologies</span>
            </h2>
            <p className={styles.sectionDescription}>
              The essential tools that help me stay productive and deliver high-quality results.
            </p>
          </div>

          <div className={styles.toolsGrid}>
            {tools.map((tool, index) => (
              <div
                key={tool}
                className={`${styles.toolCard} ${styles.animateFadeInUp}`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={styles.toolIconContainer}>
                  <Zap className={styles.toolIcon} />
                </div>
                <h3 className={styles.toolName}>{tool}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning & Growth */}
      <section className={styles.learningSection}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.animateFadeInUp}`}>
            <h2 className={styles.sectionTitle}>
              Continuous <span className={styles.highlight}>Learning</span>
            </h2>
            <p className={styles.sectionDescription}>
              I believe in staying current with technology trends and continuously improving my skills.
            </p>
          </div>

          <div className={styles.learningGrid}>
            <Card className={`${styles.learningCard} ${styles.animateFadeInUp}`}>
              <CardHeader>
                <CardTitle className={styles.learningCardTitle}>
                  <TrendingUp className={styles.learningCardIcon} />
                  Currently Learning
                </CardTitle>
              </CardHeader>
              <CardContent className={styles.learningCardContent}>
                <Badge className={styles.learningBadge}>Rust Programming</Badge>
                <Badge className={styles.learningBadge}>Machine Learning</Badge>
                <Badge className={styles.learningBadge}>Web3 Development</Badge>
              </CardContent>
            </Card>

            <Card className={`${styles.learningCard} ${styles.animateFadeInUp}`} style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className={styles.learningCardTitle}>
                  <Star className={styles.learningCardIcon} />
                  Expertise Areas
                </CardTitle>
              </CardHeader>
              <CardContent className={styles.learningCardContent}>
                <Badge className={styles.learningBadge}>Full-Stack Development</Badge>
                <Badge className={styles.learningBadge}>API Design</Badge>
                <Badge className={styles.learningBadge}>Performance Optimization</Badge>
              </CardContent>
            </Card>

            <Card className={`${styles.learningCard} ${styles.animateFadeInUp}`} style={{ animationDelay: '400ms' }}>
              <CardHeader>
                <CardTitle className={styles.learningCardTitle}>
                  <Shield className={styles.learningCardIcon} />
                  Best Practices
                </CardTitle>
              </CardHeader>
              <CardContent className={styles.learningCardContent}>
                <Badge className={styles.learningBadge}>Clean Code</Badge>
                <Badge className={styles.learningBadge}>Test-Driven Development</Badge>
                <Badge className={styles.learningBadge}>Agile Methodology</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}