"use client"

import { useState, useEffect } from "react"
import { Eye, Download, ExternalLink, Filter, Grid, List, Search } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import styles from './Gallery.module.css'

export default function Gallery() {
  const [scrollY, setScrollY] = useState(0)
  const [activeFilter, setActiveFilter] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState<any>(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const categories = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Design" },
    { id: "mobile", name: "Mobile UI" },
    { id: "dashboard", name: "Dashboards" },
    { id: "branding", name: "Branding" },
    { id: "illustrations", name: "Illustrations" },
  ]

  const galleryItems = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "dashboard",
      description: "Modern admin dashboard for e-commerce platform with analytics and user management.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      tags: ["React", "Dashboard", "Analytics"],
      date: "2023-12-15",
      featured: true,
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      description: "Clean and intuitive mobile banking application with modern UI/UX design.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      tags: ["Mobile", "Banking", "UI/UX"],
      date: "2023-11-20",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "web",
      description: "Personal portfolio website with dark theme and smooth animations.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      tags: ["Portfolio", "Dark Theme", "Animation"],
      date: "2023-10-10",
      featured: false,
    },
    {
      id: 4,
      title: "Brand Identity Design",
      category: "branding",
      description: "Complete brand identity package including logo, colors, and typography.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      tags: ["Branding", "Logo", "Identity"],
      date: "2023-09-05",
      featured: true,
    },
    {
      id: 5,
      title: "Task Management Interface",
      category: "web",
      description: "Collaborative task management tool with drag-and-drop functionality.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      tags: ["Web App", "Collaboration", "Productivity"],
      date: "2023-08-15",
      featured: false,
    },
    {
      id: 6,
      title: "Data Visualization",
      category: "dashboard",
      description: "Interactive charts and graphs for business intelligence dashboard.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      tags: ["Data Viz", "Charts", "BI"],
      date: "2023-07-20",
      featured: false,
    },
    {
      id: 7,
      title: "Fitness App UI",
      category: "mobile",
      description: "Modern fitness tracking app with workout plans and progress monitoring.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      tags: ["Fitness", "Mobile", "Health"],
      date: "2023-06-25",
      featured: false,
    },
    {
      id: 8,
      title: "Abstract Illustrations",
      category: "illustrations",
      description: "Collection of abstract illustrations for web and mobile applications.",
      image: "https://goxwide.com/wp-content/uploads/2023/10/Ecommece-development.png",
      tags: ["Illustration", "Abstract", "Art"],
      date: "2023-05-30",
      featured: true,
    },
  ]

  const filteredItems = galleryItems.filter((item) => {
    const matchesFilter = activeFilter === "all" || item.category === activeFilter
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

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
              Project <span className={styles.highlight}>Gallery</span>
            </h1>
            <p className={styles.heroDescription}>
              A visual showcase of my design work, user interfaces, and creative projects. Each piece represents
              attention to detail and user-centered design.
            </p>
          </div>

          {/* Controls */}
          <div className={`${styles.controls} ${styles.animateFadeInUp}`}>
            <div className={styles.searchContainer}>
              <Search className={styles.searchIcon} />
              <Input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>

            <div className={styles.filterButtons}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`${styles.filterButton} ${
                    activeFilter === category.id ? styles.filterButtonActive : ""
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className={styles.viewToggle}>
              <button
                onClick={() => setViewMode("grid")}
                className={`${styles.viewButton} ${
                  viewMode === "grid" ? styles.viewButtonActive : ""
                }`}
              >
                <Grid className={styles.viewIcon} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`${styles.viewButton} ${
                  viewMode === "list" ? styles.viewButtonActive : ""
                }`}
              >
                <List className={styles.viewIcon} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.galleryHeader}>
            <h2 className={styles.galleryTitle}>
              {activeFilter === "all" ? "All Items" : categories.find((c) => c.id === activeFilter)?.name}
            </h2>
            <div className={styles.galleryCount}>
              {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""} found
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className={styles.gridView}>
              {filteredItems.map((item, index) => (
                <Card
                  key={item.id}
                  className={`${styles.galleryCard} ${styles.animateFadeInUp}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedImage(item)}
                >
                  <div className={styles.cardImageContainer}>
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className={styles.cardImage}
                    />
                    <div className={styles.cardOverlay}>
                      <div className={styles.cardActions}>
                        <button className={styles.actionButton}>
                          <Eye className={styles.actionIcon} />
                        </button>
                        <button className={styles.actionButton}>
                          <Download className={styles.actionIcon} />
                        </button>
                        <button className={styles.actionButton}>
                          <ExternalLink className={styles.actionIcon} />
                        </button>
                      </div>
                    </div>
                    {item.featured && (
                      <div className={styles.featuredBadge}>
                        <Badge className={styles.featuredBadgeContent}>Featured</Badge>
                      </div>
                    )}
                  </div>

                  <CardContent className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDescription}>{item.description}</p>
                    <div className={styles.cardTags}>
                      {item.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} className={styles.tagBadge}>
                          {tag}
                        </Badge>
                      ))}
                      {item.tags.length > 2 && (
                        <Badge className={styles.moreTagsBadge}>
                          +{item.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className={styles.listView}>
              {filteredItems.map((item, index) => (
                <Card
                  key={item.id}
                  className={`${styles.listCard} ${styles.animateFadeInUp}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedImage(item)}
                >
                  <CardContent className={styles.listCardContent}>
                    <div className={styles.listCardInner}>
                      <div className={styles.listImageContainer}>
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className={styles.listImage}
                        />
                        {item.featured && (
                          <div className={styles.listFeaturedBadge}>
                            <Badge className={styles.featuredBadgeContent}>Featured</Badge>
                          </div>
                        )}
                      </div>

                      <div className={styles.listCardDetails}>
                        <div className={styles.listCardHeader}>
                          <h3 className={styles.listCardTitle}>{item.title}</h3>
                          <div className={styles.listCardDate}>
                            {new Date(item.date).toLocaleDateString()}
                          </div>
                        </div>
                        <p className={styles.listCardDescription}>{item.description}</p>
                        <div className={styles.listCardTags}>
                          {item.tags.map((tag) => (
                            <Badge key={tag} className={styles.tagBadge}>
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className={styles.emptyState}>
              <Filter className={styles.emptyStateIcon} />
              <h3 className={styles.emptyStateTitle}>No items found</h3>
              <p className={styles.emptyStateText}>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalImageContainer}>
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className={styles.modalImage}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className={styles.modalCloseButton}
              >
                ×
              </button>
            </div>
            <div className={styles.modalBody}>
              <h3 className={styles.modalTitle}>{selectedImage.title}</h3>
              <p className={styles.modalDescription}>{selectedImage.description}</p>
              <div className={styles.modalTags}>
                {selectedImage.tags.map((tag: string) => (
                  <Badge key={tag} className={styles.modalTag}>
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className={styles.modalActions}>
                <Button className={styles.downloadButton}>
                  <Download className={styles.buttonIcon} />
                  Download
                </Button>
                <Button className={styles.viewProjectButton}>
                  <ExternalLink className={styles.buttonIcon} />
                  View Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}