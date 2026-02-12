import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Download, Moon, Sun } from 'lucide-react'
import { useTheme } from '@hooks/useTheme'
import { motion } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const links = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Skills', path: '/skills' },
    { title: 'Experience', path: '/experience' },
    { title: 'Projects', path: '/projects' },
    { title: 'Articles', path: '/articles' },
    { title: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-700 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl gradient-text">
            HN
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 font-medium text-sm"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-gray-600" />}
            </button>

            {/* Resume Download */}
            <a
              href="/resume.pdf"
              download
              className="hidden sm:flex items-center gap-2 btn-primary"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-gray-200 dark:border-dark-700"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 text-primary-500 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-200"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
