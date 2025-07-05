"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageSquare,
  Calendar,
  CheckCircle,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import styles from './Contact.module.css'

export default function Contact() {
  const [scrollY, setScrollY] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      projectType: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    {
      icon: <Mail className={styles.contactIcon} />,
      title: "Email",
      value: "bahibeki@email.com",
      description: "Send me an email anytime",
      color: styles.gradientBlue,
    },
    {
      icon: <Phone className={styles.contactIcon} />,
      title: "Phone",
      value: "+251 969 76 2247",
      description: "Call me during business hours",
      color: styles.gradientGreen,
    },
    {
      icon: <MapPin className={styles.contactIcon} />,
      title: "Location",
      value: "Ethiopia, Addis Abeba",
      description: "Available for remote work",
      color: styles.gradientPurple,
    },
    {
      icon: <Clock className={styles.contactIcon} />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you quickly",
      color: styles.gradientOrange,
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className={styles.socialIcon} />,
      url: "https://github.com/beki1238",
      color: styles.githubHover,
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className={styles.socialIcon} />,
      url: "https://www.linkedin.com/in/bereket-bahiru-73bb08297",
      color: styles.linkedinHover,
    },
    {
      name: "Twitter",
      icon: <Twitter className={styles.socialIcon} />,
      url: "https://twitter.com",
      color: styles.twitterHover,
    },
  ]

  const projectTypes = ["Web Development", "Mobile App", "UI/UX Design", "Consulting", "Other"]

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
              Get In <span className={styles.highlight}>Touch</span>
            </h1>
            <p className={styles.heroDescription}>
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life. I'm always
              excited to take on new challenges.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className={styles.contactCards}>
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className={`${styles.contactCard} ${styles.animateFadeInUp}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className={styles.contactCardContent}>
                  <div
                    className={`${styles.contactIconContainer} ${info.color}`}
                  >
                    <div className={styles.contactIconWrapper}>
                      {info.icon}
                    </div>
                  </div>
                  <h3 className={styles.contactCardTitle}>
                    {info.title}
                  </h3>
                  <p className={styles.contactCardValue}>{info.value}</p>
                  <p className={styles.contactCardDescription}>{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.gridLayout}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <Card className={styles.formCard}>
                <CardHeader>
                  <CardTitle className={styles.formTitle}>
                    <MessageSquare className={styles.formTitleIcon} />
                    Send a Message
                  </CardTitle>
                  <p className={styles.formSubtitle}>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className={styles.successMessage}>
                      <CheckCircle className={styles.successIcon} />
                      <h3 className={styles.successTitle}>Message Sent!</h3>
                      <p className={styles.successText}>Thank you for reaching out. I'll get back to you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className={styles.contactForm}>
                      <div className={styles.nameEmailGrid}>
                        <div className={styles.inputGroup}>
                          <label className={styles.inputLabel}>Name *</label>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className={styles.formInput}
                            placeholder="Your full name"
                          />
                        </div>
                        <div className={styles.inputGroup}>
                          <label className={styles.inputLabel}>Email *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className={styles.formInput}
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Project Type</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className={styles.formSelect}
                        >
                          <option value="">Select a project type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Subject *</label>
                        <Input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className={styles.formInput}
                          placeholder="What's this about?"
                        />
                      </div>

                      <div className={styles.inputGroup}>
                        <label className={styles.inputLabel}>Message *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className={styles.formTextarea}
                          placeholder="Tell me about your project..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className={styles.submitButton}
                      >
                        {isSubmitting ? (
                          <div className={styles.submittingContent}>
                            <div className={styles.loadingSpinner}></div>
                            Sending...
                          </div>
                        ) : (
                          <div className={styles.buttonContent}>
                            <Send className={styles.buttonIcon} />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className={styles.infoContainer}>
              {/* Availability */}
              <Card className={styles.infoCard}>
                <CardHeader>
                  <CardTitle className={styles.infoCardTitle}>
                    <Calendar className={styles.infoCardIcon} />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={styles.availabilityGrid}>
                    <div className={styles.availabilityItem}>
                      <span className={styles.availabilityLabel}>Current Status</span>
                      <Badge className={styles.availabilityBadge}>Available</Badge>
                    </div>
                    <div className={styles.availabilityItem}>
                      <span className={styles.availabilityLabel}>Response Time</span>
                      <span className={styles.availabilityValue}>Within 24 hours</span>
                    </div>
                    <div className={styles.availabilityItem}>
                      <span className={styles.availabilityLabel}>Time Zone</span>
                      <span className={styles.availabilityValue}>PST (UTC-8)</span>
                    </div>
                    <div className={styles.availabilityItem}>
                      <span className={styles.availabilityLabel}>Preferred Contact</span>
                      <span className={styles.availabilityValue}>Email</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className={styles.infoCard}>
                <CardHeader>
                  <CardTitle className={styles.infoCardTitle}>Connect With Me</CardTitle>
                  <p className={styles.infoCardSubtitle}>Follow me on social media for updates and insights.</p>
                </CardHeader>
                <CardContent>
                  <div className={styles.socialLinks}>
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        className={`${styles.socialLink} ${social.color}`}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card className={styles.infoCard}>
                <CardHeader>
                  <CardTitle className={styles.infoCardTitle}>Quick Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={styles.faqGrid}>
                    <div className={styles.faqItem}>
                      <h4 className={styles.faqQuestion}>What's your typical project timeline?</h4>
                      <p className={styles.faqAnswer}>
                        Most projects take 2-8 weeks depending on complexity and scope.
                      </p>
                    </div>
                    <div className={styles.faqItem}>
                      <h4 className={styles.faqQuestion}>Do you work with international clients?</h4>
                      <p className={styles.faqAnswer}>
                        Yes! I work with clients worldwide and am flexible with time zones.
                      </p>
                    </div>
                    <div className={styles.faqItem}>
                      <h4 className={styles.faqQuestion}>What's included in your services?</h4>
                      <p className={styles.faqAnswer}>
                        Full-stack development, UI/UX design, consulting, and ongoing support.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}