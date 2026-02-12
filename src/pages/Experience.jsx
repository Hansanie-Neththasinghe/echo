import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import Hero from '@components/Hero'
import TimelineItem from '@components/TimelineItem'
import { experience } from '@data/portfolio'

export default function Experience() {
  return (
    <>
      <Helmet>
        <title>Experience | Hansanie Neththasinghe</title>
        <meta name="description" content="Professional experience and career history" />
      </Helmet>

      <Hero
        title="Professional Journey"
        subtitle="My career path and professional experience"
        backgroundGradient
      />

      <section className="py-20 container-custom">
        <div className="max-w-4xl mx-auto">
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} total={experience.length} />
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 max-w-4xl mx-auto bg-gray-50 dark:bg-dark-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
          <div className="space-y-6">
            <div className="card p-6">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Bachelor of Science in Computer Science</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-2">University of Technology</p>
              <p className="text-sm text-primary-500">Graduated: 2019</p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
