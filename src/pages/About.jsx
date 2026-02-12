import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Hero from '@components/Hero'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function About() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ]

  return (
    <>
      <Helmet>
        <title>About | Hansanie Neththasinghe</title>
        <meta name="description" content="Learn more about me" />
      </Helmet>

      <Hero
        title="About Me"
        subtitle="Full Stack Developer passionate about creating beautiful and functional web experiences"
        backgroundGradient
      />

      <section className="py-20 container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Who I Am</h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              I am Hansanie Neththasinghe, a Full Stack Developer with a passion for creating elegant, performant, and user-friendly
              web applications. With a background in computer science and several years of professional experience, I specialize in
              building modern web solutions using React, Node.js, and other cutting-edge technologies.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              I believe in writing clean, maintainable code and creating interfaces that are both beautiful and intuitive. Every
              project I work on is an opportunity to learn something new and push my skills further.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Beyond coding, I enjoy contributing to open-source projects, writing technical articles, and mentoring junior
              developers. I am always excited to collaborate on interesting projects and explore new technologies.
            </p>

            {/* Call to Action */}
            <div className="flex gap-4">
              <a href="/contact" className="btn-primary">
                Get In Touch
              </a>
              <a href="/resume.pdf" download className="btn-secondary">
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-72 h-72 bg-gradient-to-br from-primary-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-lg font-semibold">Hansanie Neththasinghe</p>
                <p className="text-sm">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values/Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: 'Quality First',
              description: 'I prioritize code quality, performance, and maintainability in everything I build.',
            },
            {
              title: 'User Focused',
              description: 'Every design decision is made with the end user in mind to create excellent experiences.',
            },
            {
              title: 'Always Learning',
              description: 'Technology evolves constantly and I stay updated with the latest trends and best practices.',
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 text-center"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-12 bg-gray-50 dark:bg-dark-800 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Connect With Me</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-dark-700 rounded-lg hover:bg-primary-500 dark:hover:bg-primary-500 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-200"
                  aria-label={link.label}
                >
                  <Icon size={24} />
                </a>
              )
            })}
          </div>
        </motion.div>
      </section>
    </>
  )
}
