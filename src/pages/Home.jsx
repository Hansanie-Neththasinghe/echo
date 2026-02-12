import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Hero from '@components/Hero'
import ProjectCard from '@components/ProjectCard'
import SkillCard from '@components/SkillCard'
import ArticleCard from '@components/ArticleCard'
import { ArrowRight, Code2, Zap, Target } from 'lucide-react'
import { projects, skills, articles } from '@data/portfolio'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)
  const topSkills = skills.slice(0, 6)
  const recentArticles = articles.slice(0, 3)

  const features = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building scalable, modern web applications with cutting-edge technologies',
    },
    {
      icon: Zap,
      title: 'Performance Optimized',
      description: 'Creating lightning-fast experiences with optimal user engagement',
    },
    {
      icon: Target,
      title: 'Pixel Perfect',
      description: 'Delivering pixel-perfect implementations that match design specifications',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Hansanie Neththasinghe | Full Stack Developer</title>
        <meta name="description" content="Full Stack Developer creating modern web applications" />
        <meta property="og:title" content="Hansanie Neththasinghe | Full Stack Developer" />
        <meta property="og:description" content="Full Stack Developer creating modern web applications" />
      </Helmet>

      {/* Hero Section */}
      <Hero
        title="Crafting Digital Experiences"
        subtitle="Full Stack Developer | Web Artisan | Problem Solver. I build modern, performant web applications that users love."
        actions={[
          { label: 'View My Work', href: '#projects' },
          { label: 'Get In Touch', href: '/contact', variant: 'secondary' },
        ]}
      />

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800 container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg mb-4">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 container-custom">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>A selection of my latest work and side projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center">
          <a href="/projects" className="btn-primary inline-flex items-center gap-2">
            View All Projects
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="section-header">
            <h2>Core Skills</h2>
            <p>Technologies and tools I work with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {topSkills.map((skill, index) => (
              <SkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </div>

          <div className="text-center">
            <a href="/skills" className="btn-primary inline-flex items-center gap-2">
              View All Skills
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 container-custom">
        <div className="section-header">
          <h2>Latest Articles</h2>
          <p>Thoughts on web development, learning, and technology</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {recentArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        <div className="text-center">
          <a href="/articles" className="btn-primary inline-flex items-center gap-2">
            Read All Articles
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-blue-600 dark:from-primary-600 dark:to-blue-700">
        <div className="container-custom text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <a href="/contact" className="inline-flex px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Start a Conversation
          </a>
        </div>
      </section>
    </>
  )
}
