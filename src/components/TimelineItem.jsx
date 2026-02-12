import { motion } from 'framer-motion'
import dayjs from 'dayjs'

export default function TimelineItem({ item, index, total }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative pb-8 md:pb-0"
    >
      {/* Timeline line */}
      {index < total - 1 && (
        <div className="hidden md:block absolute left-1/2 top-20 w-1 h-12 bg-gradient-to-b from-primary-500 to-transparent transform -translate-x-1/2"></div>
      )}

      <div className={`flex gap-6 md:gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
        {/* Timeline dot */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-primary-500 rounded-full ring-4 ring-primary-500/30 relative z-10"></div>
        </div>

        {/* Content */}
        <div className={`flex-1 card p-6 ${index % 2 === 1 ? 'md:mr-1/2' : 'md:ml-1/2'}`}>
          {item.date && (
            <div className="text-sm text-primary-500 font-semibold mb-2">
              {typeof item.date === 'string' && item.date.includes(' - ')
                ? item.date
                : `${dayjs(item.startDate).format('MMM YYYY')} - ${item.endDate ? dayjs(item.endDate).format('MMM YYYY') : 'Present'}`}
            </div>
          )}

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>

          {item.company && (
            <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">{item.company}</p>
          )}

          {item.description && <p className="text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>}

          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-600 transition-colors duration-200 text-sm font-medium">
              Learn more →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
