import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Music, Headphones, BarChart3, Library, Palette, Download, Coffee, ChevronDown, Play, ArrowRight, Sliders, ListMusic, Keyboard, Link } from 'lucide-react'
import './App.css'

function Github({ size = 24, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  )
}

const features = [
  { icon: <Music size={28} />, title: 'YouTube Music', desc: 'Search and stream any song from YouTube Music with built-in audio streaming.' },
  { icon: <Headphones size={28} />, title: 'Synced Lyrics', desc: 'Real-time synced lyrics powered by LRCLib & Lyrica providers.' },
  { icon: <BarChart3 size={28} />, title: 'Charts', desc: 'Browse Billboard Hot 100, Billboard 200, and Spotify trending charts.' },
  { icon: <Sliders size={28} />, title: 'Built-in Equalizer', desc: '10-band equalizer with presets and real-time audio adjustments.' },
  { icon: <ListMusic size={28} />, title: 'Spotify Import', desc: 'Import any Spotify or YouTube Music playlist instantly with our embed scraper.' },
  { icon: <Palette size={28} />, title: 'Dynamic Theming', desc: 'Material 3 dynamic colors extracted from album art with blur effects.' },
  { icon: <Library size={28} />, title: 'Local Library', desc: 'Play and manage your local audio files with queue and playback controls.' },
  { icon: <Keyboard size={28} />, title: 'Keyboard Shortcuts', desc: 'Global shortcuts for play/pause, skip, volume, shuffle, and repeat.' },
  { icon: <Link size={28} />, title: 'Copy & Share', desc: 'Copy shareable links to any song and share them instantly.' },
]

function FloatingOrbs() {
  return (
    <div className="floating-orbs">
      <motion.div className="orb orb-1" animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="orb orb-2" animate={{ x: [0, -25, 35, 0], y: [0, 30, -25, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="orb orb-3" animate={{ x: [0, 20, -30, 0], y: [0, -20, 35, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
    </div>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={'site-header' + (scrolled ? ' scrolled' : '')}>
      <div className="header-inner">
        <a href="#" className="header-brand">CODAH <b>MUSIC</b></a>

        <nav className="header-nav">
          <a href="#features">Features</a>
          <a href="#screenshots">Screenshots</a>
          <a href="#download">Download</a>
          <a href="https://github.com/coder-nishanth/codah-music" target="_blank" rel="noreferrer">
            <Github size={16} />
          </a>
          <a href="https://buymeacoffee.com/coder.nishanth" target="_blank" rel="noreferrer" className="header-cta">
            <Coffee size={14} />
            Support
          </a>
        </nav>

        <a href="https://buymeacoffee.com/coder.nishanth" target="_blank" rel="noreferrer" className="header-cta-mobile">
          Support
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-glow" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid" />
        <FloatingOrbs />
      </div>
      <div className="hero-content">
        <div className="hero-badge">Free &amp; Open Source</div>

        <h1 className="hero-title">
          <span className="hero-line">Your All-in-One</span>
          <span className="hero-line"><span className="gradient-text">Desktop</span> <span className="gradient-text">Music</span></span>
          <span className="hero-line">Experience</span>
        </h1>



        <div className="hero-actions">
          <a href="#download" className="btn-primary">
            <Download size={18} /> Download for Windows
          </a>
          <a href="https://github.com/coder-nishanth/codah-music" target="_blank" rel="noreferrer" className="btn-secondary">
            <Github size={18} /> View Source
          </a>
        </div>

        <div className="hero-platforms">
          <span>Windows 10/11</span>
          <span className="dot" />
          <span>Built with Flutter</span>
          <span className="dot" />
          <span>MIT License</span>
        </div>
      </div>
      <div className="scroll-indicator">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <span className="section-label">Features</span>
        <h2>Everything you need in a <span className="gradient-text">music player</span></h2>
      </div>
      <div className="features-grid">
        {features.map((f) => (
          <div key={f.title} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const screenshots = [
  { src: '/1.png', alt: 'Player' },
  { src: '/2.png', alt: 'Lyrics' },
  { src: '/3.png', alt: 'Charts' },
  { src: '/4.png', alt: 'Library' },
  { src: '/5.png', alt: 'Settings' },
]

function Screenshots() {
  return (
    <section className="screenshots" id="screenshots">
      <div className="section-header">
        <span className="section-label">Screenshots</span>
        <h2>See it in <span className="gradient-text">action</span></h2>
      </div>
      <div className="screenshots-banner">
        <div className="screenshots-track">
          {[...screenshots, ...screenshots, ...screenshots].map((s, i) => (
            <div key={i} className="screenshot-card">
              <img src={s.src} alt={s.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DownloadSection() {
  return (
    <section className="download-section" id="download">
      <div className="download-bg">
        <div className="download-glow" />
      </div>
      <div className="download-content">
        <span className="section-label">Download</span>
        <h2>Get <span className="gradient-text">CODAH MUSIC</span></h2>
        <p>Free and open source. No ads, no tracking.</p>
        <div className="download-cards">
          <a href="./Codah Music v2.1.0 Setup.exe" className="download-card">
            <div className="download-card-icon"><ArrowRight size={24} /></div>
            <div><h3>Installer</h3><p>Codah Music v2.1.0 Setup.exe</p></div>
          </a>
          <a href="./Codah Music Portable v2.1.0.zip" className="download-card">
            <div className="download-card-icon"><Download size={24} /></div>
            <div><h3>Portable</h3><p>Codah Music Portable v2.1.0.zip</p></div>
          </a>
        </div>
        <div className="smartscreen-notice">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <div>
            <strong>Blocked?</strong> Click <b>"More info"</b> → <b>"Run anyway"</b>.
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">CODAH <b>MUSIC</b></div>
        <div className="footer-links">
          <a href="https://github.com/coder-nishanth" target="_blank" rel="noreferrer">Developer</a>
          <a href="https://github.com/coder-nishanth/codah-music" target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
          <a href="https://buymeacoffee.com/coder.nishanth" target="_blank" rel="noreferrer"><Coffee size={14} /> Support</a>
        </div>
        <div className="footer-bottom">
          <span>Made with Flutter & React</span>
          <span>MIT License</span>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <DownloadSection />
      <Footer />
    </div>
  )
}

export default App
