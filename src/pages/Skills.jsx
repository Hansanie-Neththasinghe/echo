import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Hero from '@components/Hero'
import SkillCard from '@components/SkillCard'
import { skills } from '@data/portfolio'

export default function Skills() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {})

  return (
    <>
      <Helmet>
        <title>Skills | Hansanie Neththasinghe</title>
        <meta name="description" content="Technical skills and expertise" />
      </Helmet>

      <Hero
        title="Technical Skills"
        subtitle="A comprehensive overview of technologies and tools I work with"
        backgroundGradient
      />

      <section className="py-20 container-custom">
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <div key={category} className="mb-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{category}</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorySkills.map((skill, index) => (
                <SkillCard key={skill.id} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Continuous Learning</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I'm passionate about staying updated with the latest technologies and best practices. I regularly:
          </p>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>✓ Attend tech conferences and webinars</li>
            <li>✓ Complete online courses and certifications</li>
            <li>✓ Contribute to open-source projects</li>
            <li>✓ Write technical articles and tutorials</li>
            <li>✓ Participate in developer communities</li>
          </ul>
        </motion.div>
      </section>
    </>
  )
}
