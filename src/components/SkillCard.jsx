import { motion } from 'framer-motion'

export default function SkillCard({ skill, index }) {
  const percentage = skill.percentage || 85

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="card p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        {skill.icon && <span className="text-3xl">{skill.icon}</span>}
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white">{skill.name}</h3>
          {skill.category && <p className="text-xs text-gray-600 dark:text-gray-400">{skill.category}</p>}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
          className="h-full bg-gradient-to-r from-primary-500 to-blue-500"
        ></motion.div>
      </div>

      {/* Percentage */}
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{percentage}%</p>

      {/* Description */}
      {skill.description && <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">{skill.description}</p>}
    </motion.div>
  )
}
