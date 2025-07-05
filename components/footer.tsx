import Link from "next/link"
import { Code, Github, Linkedin, Mail, Heart } from "lucide-react"
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandSection}>
            <div className={styles.brand}>
              <div className={styles.logo}>
                <Code className={styles.logoIcon} />
              </div>
              <span className={styles.brandName}>Bereket Bahiru</span>
            </div>
            <p className={styles.brandDescription}>
              Passionate software engineer crafting digital experiences with modern technologies.
            </p>
          </div>

          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <div className={styles.links}>
              <Link href="/about" className={styles.link}>
                About Me
              </Link>
              <Link href="/projects" className={styles.link}>
                Projects
              </Link>
              <Link href="/skills" className={styles.link}>
                Skills
              </Link>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </div>
          </div>

          <div className={styles.servicesSection}>
            <h4 className={styles.sectionTitle}>Services</h4>
            <div className={styles.services}>
              <p className={styles.serviceItem}>Web Development</p>
              <p className={styles.serviceItem}>Mobile Apps</p>
              <p className={styles.serviceItem}>UI/UX Design</p>
              <p className={styles.serviceItem}>Consulting</p>
            </div>
          </div>

          <div className={styles.connectSection}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              <a href="https://github.com/beki1238" className={styles.socialLink}>
                <Github className={styles.socialIcon} />
              </a>
              <a href="https://www.linkedin.com/in/bereket-bahiru-73bb08297" className={styles.socialLink}>
                <Linkedin className={styles.socialIcon} />
              </a>
              <a href="bahibeki@gmail.com" className={styles.socialLink}>
                <Mail className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            © 2025 Bereket Bahiru. 
          </p>
          <p className={styles.rightsText}>All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}