"use client"

import { useState, useEffect } from "react"
import {
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
  Coffee,
  Code,
  Users,
  Star,
  Download,
  ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import styles from './About.module.css'

export default function About() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "AIT technologies",
      period: "2024 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies.",
      achievements: ["Developed LMS projectes", "Increased app performance by 40%", "Implemented CI/CD pipeline"],
    },
    {
      title: "Frontend Developer",
      company: "AIT tecnology",
      period: "2024 - present",
      description: "Developed responsive web applications and improved user experience across multiple platforms.",
      achievements: ["Built 3+ React applications", "Arif School fee with improved user experience", "Mentored junior developers"],
    },
    {
      title: "Junior Developer",
      company: "WebSolutions",
      period: "2019 - 2020",
      description: "Started my professional journey building websites and learning modern development practices.",
      achievements: ["Completed 25+ projects", "Learned 5 new technologies", "Achieved 98% client satisfaction"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Software Enginnering",
      school: "Dire Dawa University",
      period: "2021 - 2026",
      description: "Focused on software engineering, algorithms, and data structures.",
    },
    {
      degree: "Bachelor of Management",
      school: "Dire Dawa University",
      period: "2022 - 2026",
      description: "Intensive program covering modern leading and organization",
    },
      {
      degree: "Full-Stack Web Development",
      school: "Coding Bootcamp",
      period: "2018",
      description: "Intensive program covering modern web development technologies.",
    },
  ]

  const certifications = [
    "AWS Certified Developer",
    "Google Cloud Professional",
    "React Developer Certification",
    "Node.js Certified Developer",
  ]

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
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              About <span className={styles.highlight}>Me</span>
            </h1>
            <p className={styles.heroDescription}>
              I'm a passionate software engineer who loves creating digital experiences that make a difference. Here's
              my journey so far.
            </p>
          </div>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <div className={styles.prose}>
                <p className={styles.paragraph}>
                  With over 2 years of experience in software development, I've had the privilege of working with
                  amazing teams and building products that impact thousands of users. My journey started with a simple
                  "Hello World" and has evolved into creating complex, scalable applications.
                </p>
                <p className={styles.paragraph}>
                  I believe in writing clean, maintainable code and staying up-to-date with the latest technologies.
                  When I'm not coding, you'll find me contributing to open-source projects, writing technical blogs, or
                  mentoring aspiring developers.
                </p>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <MapPin className={styles.statIcon} />
                  <div>
                    <p className={styles.statLabel}>Location</p>
                    <p className={styles.statValue}>Ethiopia, Addis Abeba</p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <Calendar className={styles.statIcon} />
                  <div>
                    <p className={styles.statLabel}>Experience</p>
                    <p className={styles.statValue}>2+ Years</p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <Briefcase className={styles.statIcon} />
                  <div>
                    <p className={styles.statLabel}>Projects</p>
                    <p className={styles.statValue}>20+ Completed</p>
                  </div>
                </div>
                <div className={styles.statCard}>
                  <Coffee className={styles.statIcon} />
                  <div>
                    <p className={styles.statLabel}>Coffee Cups</p>
                    <p className={styles.statValue}>∞ Daily</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.quickStatsCard}>
              <Card className={styles.card}>
                <CardHeader>
                  <CardTitle className={styles.cardTitle}>
                    <Award className={styles.cardTitleIcon} />
                    Quick Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className={styles.cardContent}>
                  <div className={styles.statRow}>
                    <span className={styles.statName}>
                      <Code className={styles.statIconSmall} />
                      Projects Completed
                    </span>
                    <span className={styles.statNumber}>20+</span>
                  </div>
                  <div className={styles.statRow}>
                    <span className={styles.statName}>
                      <Star className={styles.statIconSmall} />
                      GitHub Stars
                    </span>
                    <span className={styles.statNumber}>20+</span>
                  </div>
                  <div className={styles.statRow}>
                    <span className={styles.statName}>
                      <Users className={styles.statIconSmall} />
                      Happy Clients
                    </span>
                    <span className={styles.statNumber}>25+</span>
                  </div>
                  <div className={styles.statRow}>
                    <span className={styles.statName}>
                      <ExternalLink className={styles.statIconSmall} />
                      Open Source Contributions
                    </span>
                    <span className={styles.statNumber}>200+</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.experienceSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Work <span className={styles.highlight}>Experience</span>
          </h2>

          <div className={styles.experienceList}>
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className={`${styles.experienceCard} ${styles.animateFadeInUp}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className={styles.experienceContent}>
                  <div className={styles.experienceHeader}>
                    <div>
                      <h3 className={styles.experienceTitle}>{exp.title}</h3>
                      <p className={styles.experienceCompany}>{exp.company}</p>
                    </div>
                    <Badge className={styles.experiencePeriod}>
                      {exp.period}
                    </Badge>
                  </div>
                  <p className={styles.experienceDescription}>{exp.description}</p>
                  <div className={styles.achievements}>
                    {exp.achievements.map((achievement, i) => (
                      <Badge key={i} className={styles.achievementBadge}>
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className={styles.educationSection}>
        <div className={styles.container}>
          <div className={styles.educationGrid}>
            {/* Education */}
            <div className={styles.educationColumn}>
              <h2 className={styles.sectionTitle}>
                <GraduationCap className={styles.sectionTitleIcon} />
                Education
              </h2>
              <div className={styles.educationList}>
                {education.map((edu, index) => (
                  <Card key={index} className={styles.educationCard}>
                    <CardContent className={styles.educationContent}>
                      <div className={styles.educationHeader}>
                        <h3 className={styles.educationDegree}>{edu.degree}</h3>
                        <Badge className={styles.educationPeriod}>
                          {edu.period}
                        </Badge>
                      </div>
                      <p className={styles.educationSchool}>{edu.school}</p>
                      <p className={styles.educationDescription}>{edu.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className={styles.certificationsColumn}>
              <h2 className={styles.sectionTitle}>
                <Award className={styles.sectionTitleIcon} />
                Certifications
              </h2>
              <div className={styles.certificationsList}>
                {certifications.map((cert, index) => (
                  <Card key={index} className={styles.certificationCard}>
                    <CardContent className={styles.certificationContent}>
                      <span className={styles.certificationName}>{cert}</span>
                      <ExternalLink className={styles.certificationIcon} />
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className={styles.resumeButtonContainer}>
                <Button className={styles.resumeButton}>
                  <Download className={styles.buttonIcon} />
                  Download Full Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}