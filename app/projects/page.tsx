"use client"

import { useState, useEffect } from "react"
import { Github, ExternalLink, Star, GitBranch, Eye, Calendar, Code, Search, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import styles from './Projects.module.css'

export default function Projects() {
  const [scrollY, setScrollY] = useState(0)
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const projectFilters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile" },
    { id: "api", name: "APIs" },
    { id: "opensource", name: "Open Source" },
  ]

  const projects = [
    {
      id: 1,
      title: "Arif School Fee",
      description:
        "A full-stack school-fee system with Laravel. Features include user authentication, payment integration, admin dashboard, and real-time inventory management.",
      longDescription:
        "This comprehensive school-fee system  was built to handle high-traffic scenarios with a focus on performance and user experience. The application includes advanced features like recommendation algorithms, multi-vendor support, and detailed analytics.",
      image: "/images/arif_fee.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Redis", "AWS"],
      category: "web",
      github: "https://github.com/Beki1238",
      live: "https://lms.arifeducation.com/",
      stars: 124,
      forks: 32,
      watchers: 18,
      status: "Completed",
      date: "2023-12-15",
      featured: true,
    },
    
    { 
      id: 2,
      title: "Arif LMS",
      description:
        "Collaborative Arif LMS aplication with real-time updates, drag-and-drop functionality, team collaboration features, and advanced project tracking.",
      longDescription:
        "A comprehensive project management solution designed for modern teams. Built with real-time collaboration in mind, featuring WebSocket connections for instant updates and a intuitive drag-and-drop interface.",
      image: "/images/arif_lms.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "Socket.io", "Tailwind", "PostgreSQL"],
      category: "web",
      github: "https://github.com/Beki1238",
      live: "https://lms.arifeducation.com/",
      stars: 89,
      forks: 21,
      watchers: 12,
      status: "Active",
      date: "2023-11-20",
      featured: true,
    },
    {
      id: 3,
      title: "AI Chat Application Arif LMS",
      description:
        "Intelligent chatbot application using OpenAI API with conversation history, context awareness, custom training capabilities, and multi-language support.",
      longDescription:
        "An advanced AI-powered chat application that leverages the latest in natural language processing. Features include conversation memory, custom model training, and integration with multiple AI providers.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      technologies: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Docker", "React"],
      category: "api",
      github: "https://github.com/Beki1238",
      live: "https://lms.arifeducation.com/",
      stars: 156,
      forks: 45,
      watchers: 28,
      status: "Active",
      date: "2023-10-10",
      featured: true,
    },
    {
      id: 4,
      title: "Cinema Seat Reservation",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, social features, and wearable device integration.",
      longDescription:
        "A comprehensive fitness tracking application that helps users achieve their health goals. Features include custom workout plans, nutrition tracking, social challenges, and integration with popular wearable devices.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "Chart.js", "HealthKit"],
      category: "mobile",
      github: "https://github.com/Beki1238/CINEMA-SEAT-RESERVATION-SYSTEM-FLUTTER-PROJECT",
      live: "https://lms.arifeducation.com/",
      stars: 78,
      forks: 19,
      watchers: 15,
      status: "Completed",
      date: "2023-09-05",
      featured: false,
    },
    {
      id: 5,
      title: "Cinema Seat Reservation",
      description:
        "Interactive dashboard for data visualization with real-time charts, filters, export capabilities, and advanced analytics for business intelligence.",
      longDescription:
        "A powerful business intelligence dashboard that transforms complex data into actionable insights. Built with performance in mind, capable of handling large datasets with smooth interactions.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      technologies: ["Vue.js", "D3.js", "Python", "Flask", "PostgreSQL", "Docker"],
      category: "web",
      github: "https://github.com/Beki1238/Cinema_seat_reservation-php-project",
      live: "https://lms.arifeducation.com/",
      stars: 92,
      forks: 28,
      watchers: 20,
      status: "Active",
      date: "2023-08-15",
      featured: false,
    },
    {
      id: 6,
      title: "Moodle Learning Mnagement System",
      description:
        "Secure voting system built on blockchain technology ensuring transparency, immutability, voter privacy, and decentralized governance.",
      longDescription:
        "A revolutionary voting system that leverages blockchain technology to ensure election integrity. Features include zero-knowledge proofs for privacy, smart contract automation, and transparent vote counting.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "Hardhat"],
      category: "opensource",
      github: "https://github.com/Beki1238",
      live: "https://lms.arifeducation.com/",
      stars: 203,
      forks: 67,
      watchers: 45,
      status: "Active",
      date: "2023-07-20",
      featured: true,
    },
       {
      id: 7,
      title: "Beki Magic Mobile App",
      description:
        "Cross-platform mobile app that answers any types of your questions, progress monitoring, social features, and wearable device integration.",
      longDescription:
        "A comprehensive an ai integrated amzing magic app that answers any types of your question. Features include custom workout plans, nutrition tracking, social challenges, and integration with popular wearable devices.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      technologies: ["React Native", "Firebase", "Redux", "Expo", "Chart.js", "HealthKit"],
      category: "mobile",
      github: "https://github.com/Beki1238",
      live: "https://lms.arifeducation.com/",
      stars: 78,
      forks: 19,
      watchers: 15,
      status: "Completed",
      date: "2023-09-05",
      featured: false,
    },
    // ... (other project objects remain the same)
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const featuredProjects = projects.filter((project) => project.featured)

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
              My <span className={styles.highlight}>Projects</span>
            </h1>
            <p className={styles.heroDescription}>
              A showcase of my work, from web applications to mobile apps and open-source contributions. Each project
              represents a unique challenge and learning experience.
            </p>
          </div>

          {/* Search and Filter */}
          <div className={`${styles.controls} ${styles.animateFadeInUp}`}>
            <div className={styles.searchContainer}>
              <Search className={styles.searchIcon} />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            <div className={styles.filterButtons}>
              {projectFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`${styles.filterButton} ${
                    activeFilter === filter.id ? styles.filterButtonActive : ""
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {activeFilter === "all" && (
        <section className={styles.featuredSection}>
          <div className={styles.container}>
            <h2 className={`${styles.sectionTitle} ${styles.animateFadeInUp}`}>
              Featured <span className={styles.highlight}>Projects</span>
            </h2>

            <div className={styles.featuredGrid}>
              {featuredProjects.slice(0, 2).map((project, index) => (
                <Card
                  key={project.id}
                  className={`${styles.featuredCard} ${styles.animateFadeInUp}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={styles.cardImageContainer}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className={styles.cardImage}
                    />
                    <div className={styles.cardOverlay} />
                    <div className={styles.statusBadge}>
                      <Badge className={project.status === "Active" ? styles.activeBadge : styles.completedBadge}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className={styles.cardHeader}>
                    <div className={styles.cardTitleRow}>
                      <CardTitle className={styles.cardTitle}>{project.title}</CardTitle>
                      <div className={styles.stats}>
                        <div className={styles.statItem}>
                          <Star className={styles.statIcon} />
                          <span>{project.stars}</span>
                        </div>
                        <div className={styles.statItem}>
                          <GitBranch className={styles.statIcon} />
                          <span>{project.forks}</span>
                        </div>
                      </div>
                    </div>
                    <CardDescription className={styles.cardDescription}>
                      {project.longDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className={styles.cardContent}>
                    <div className={styles.techStack}>
                      {project.technologies.map((tech) => (
                        <Badge key={tech} className={styles.techBadge}>
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className={styles.cardFooter}>
                      <div className={styles.dateInfo}>
                        <Calendar className={styles.dateIcon} />
                        <span>{new Date(project.date).toLocaleDateString()}</span>
                      </div>

                      <div className={styles.actionButtons}>
                        <Button className={styles.codeButton}>
                          <Github className={styles.buttonIcon} />
                          Code
                        </Button>
                        <Button className={styles.demoButton}>
                          <Eye className={styles.buttonIcon} />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {activeFilter === "all" ? "All Projects" : `${projectFilters.find((f) => f.id === activeFilter)?.name}`}
            </h2>
            <div className={styles.projectCount}>
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
            </div>
          </div>

          <div className={styles.projectsGrid}>
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`${styles.projectCard} ${styles.animateFadeInUp}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={styles.cardImageContainer}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardHoverOverlay}>
                    <a href={project.github} className={styles.hoverActionButton}>
                      <Github className={styles.actionIcon} />
                    </a>
                    <a href={project.live} className={styles.hoverActionButton}>
                      <ExternalLink className={styles.actionIcon} />
                    </a>
                  </div>
                  <div className={styles.statusBadge}>
                    <Badge className={project.status === "Active" ? styles.activeBadge : styles.completedBadge}>
                      {project.status}
                    </Badge>
                  </div>
                  {project.featured && <Star className={styles.featuredIcon} />}
                </div>

                <CardHeader className={styles.cardHeader}>
                  <div className={styles.cardTitleRow}>
                    <CardTitle className={styles.cardTitle}>{project.title}</CardTitle>
                  </div>
                  <CardDescription className={styles.cardDescription}>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className={styles.cardContent}>
                  <div className={styles.techStack}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} className={styles.techBadge}>
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge className={styles.moreTechBadge}>
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className={styles.projectStats}>
                    <div className={styles.stats}>
                      <div className={styles.statItem}>
                        <Star className={styles.statIcon} />
                        <span>{project.stars}</span>
                      </div>
                      <div className={styles.statItem}>
                        <GitBranch className={styles.statIcon} />
                        <span>{project.forks}</span>
                      </div>
                      <div className={styles.statItem}>
                        <Eye className={styles.statIcon} />
                        <span>{project.watchers}</span>
                      </div>
                    </div>

                    <div className={styles.dateInfo}>
                      <Calendar className={styles.dateIcon} />
                      <span>{new Date(project.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className={styles.emptyState}>
              <Code className={styles.emptyStateIcon} />
              <h3 className={styles.emptyStateTitle}>No projects found</h3>
              <p className={styles.emptyStateText}>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={`${styles.ctaContent} ${styles.animateFadeInUp}`}>
            <h2 className={styles.ctaTitle}>
              Interested in <span className={styles.highlight}>Collaborating?</span>
            </h2>
            <p className={styles.ctaText}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className={styles.ctaButtons}>
              <Button className={styles.primaryCtaButton}>
                Start a Project
                <ArrowUpRight className={styles.ctaButtonIcon} />
              </Button>
              <a href="https://github.com/Beki1238">
              <Button className={styles.secondaryCtaButton}>
                View GitHub Profile
              </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}