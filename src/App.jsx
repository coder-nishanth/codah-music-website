import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Music, Headphones, BarChart3, Library, Palette, Download, Coffee, ChevronDown, Play, ArrowRight } from 'lucide-react'

function Github({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}
import './App.css'

const features = [
  { icon: <Music size={28} />, title: 'YouTube Music', desc: 'Search and stream any song from YouTube Music with built-in audio streaming.' },
  { icon: <Headphones size={28} />, title: 'Synced Lyrics', desc: 'Real-time synced lyrics with LRCLib & Lyrica providers.' },
  { icon: <BarChart3 size={28} />, title: 'Charts', desc: 'Browse Billboard Hot 100, Billboard 200, and Spotify trending charts.' },
  { icon: <Library size={28} />, title: 'Local Library', desc: 'Play and manage your local audio files with queue and playback controls.' },
  { icon: <Palette size={28} />, title: 'Dynamic Theming', desc: 'Material 3 dynamic colors extracted from album art with blur effects.' },
  { icon: <Play size={28} />, title: 'Auto Updates', desc: 'Stay up to date with built-in update notifications.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const wordReveal = {
  hidden: { opacity: 0, y: 30, rotateX: -40 },
  visible: (i) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { duration: 0.7, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

function FloatingOrbs() {
  return (
    <div className="floating-orbs">
      <motion.div
        className="orb orb-1"
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-2"
        animate={{ x: [0, -25, 35, 0], y: [0, 30, -25, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="orb orb-3"
        animate={{ x: [0, 20, -30, 0], y: [0, -20, 35, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <a href="#" className="nav-brand">
          <span>CODAH <b>MUSIC</b></span>
        </a>
        <div className="nav-links">
          <motion.a href="#features" whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>Features</motion.a>
          <motion.a href="#download" whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>Download</motion.a>
          <motion.a
            href="https://github.com/coder-nishanth/codah-music"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.15 }}
          >
            <Github size={18} />
          </motion.a>
          <motion.a
            href="https://buymeacoffee.com/coder.nishanth"
            target="_blank"
            rel="noreferrer"
            className="nav-coffee"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <Coffee size={16} />
            Support
          </motion.a>
        </div>
      </div>
    </motion.nav>
  )
}

function Hero() {
  const lines = [
    ['Your', 'All-in-One'],
    ['Desktop', 'Music'],
    ['Experience'],
  ]

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-glow" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid" />
        <FloatingOrbs />
      </div>
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Free &amp; Open Source
        </motion.div>

        <h1 className="hero-title">
          {lines.map((line, li) => (
            <span key={li} className="hero-line">
              {line.map((word, wi) => (
                <motion.span
                  key={wi}
                  className={word === 'Desktop' || word === 'Music' ? 'gradient-text' : ''}
                  variants={wordReveal}
                  initial="hidden"
                  animate="visible"
                  custom={li * 2 + wi}
                  style={{ display: 'inline-block', marginRight: '0.3em' }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          Stream from YouTube Music, browse charts, view synced lyrics,<br />
          and manage your library — all in one beautiful app.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.a
            href="#download"
            className="btn-primary"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 40px rgba(108, 99, 255, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <Download size={18} />
            Download for Windows
          </motion.a>
          <motion.a
            href="https://github.com/coder-nishanth/codah-music"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <Github size={18} />
            View Source
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-platforms"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span>Windows 10/11</span>
          <span className="dot" />
          <span>Built with Flutter</span>
          <span className="dot" />
          <span>MIT License</span>
        </motion.div>
      </div>
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}

function Features() {
  return (
    <section className="features" id="features">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Features</span>
        <h2>Everything you need in a <span className="gradient-text">music player</span></h2>
      </motion.div>
      <motion.div
        className="features-grid"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="feature-card"
            variants={cardVariant}
            whileHover={{ y: -6, scale: 1.02, boxShadow: '0 12px 40px rgba(108, 99, 255, 0.12)' }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="feature-icon"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              {f.icon}
            </motion.div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function DownloadSection() {
  return (
    <section className="download-section" id="download">
      <div className="download-bg">
        <motion.div
          className="download-glow"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <motion.div
        className="download-content"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Download</span>
        <h2>Get <span className="gradient-text">CODAH MUSIC</span></h2>
        <p>Free and open source. No ads, no tracking.</p>
        <motion.div
          className="download-cards"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a
            href="/Codah-Music-Setup-1.0.0.exe"
            download="Codah-Music-Setup-1.0.0.exe"
            className="download-card"
            variants={cardVariant}
            whileHover={{ y: -6, scale: 1.02, boxShadow: '0 8px 30px rgba(108, 99, 255, 0.15)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="download-card-icon">
              <ArrowRight size={24} />
            </div>
            <div>
              <h3>Installer</h3>
              <p>Codah-Music-Setup-1.0.0.exe</p>
            </div>
          </motion.a>
          <motion.a
            href="/codah-music-v1.0.0-windows.zip"
            download="codah-music-v1.0.0-windows.zip"
            className="download-card"
            variants={cardVariant}
            whileHover={{ y: -6, scale: 1.02, boxShadow: '0 8px 30px rgba(108, 99, 255, 0.15)' }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="download-card-icon">
              <Download size={24} />
            </div>
            <div>
              <h3>Portable</h3>
              <p>codah-music-v1.0.0-windows.zip</p>
            </div>
          </motion.a>
        </motion.div>
        <motion.p
          className="download-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Windows SmartScreen warning is expected — click "More info" → "Run anyway"
        </motion.p>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-inner">
        <div className="footer-brand">
          <span>CODAH <b>MUSIC</b></span>
        </div>
        <motion.div
          className="footer-links"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { href: 'https://github.com/coder-nishanth', label: 'Developer' },
            { href: 'https://github.com/coder-nishanth/codah-music', label: 'GitHub', icon: <Github size={16} /> },
            { href: 'https://buymeacoffee.com/coder.nishanth', label: 'Support', icon: <Coffee size={16} /> },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              variants={cardVariant}
              whileHover={{ y: -2, color: '#6c63ff' }}
            >
              {link.icon} {link.label}
            </motion.a>
          ))}
        </motion.div>
        <div className="footer-bottom">
          <p>Made with Flutter & React</p>
          <p>MIT License</p>
        </div>
      </div>
    </motion.footer>
  )
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <DownloadSection />
      <Footer />
    </div>
  )
}

export default App
