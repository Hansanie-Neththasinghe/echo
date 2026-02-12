import { motion } from 'framer-motion'

export default function Hero({ title, subtitle, actions, backgroundGradient = true }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] },
    },
  }

  return (
    <section
      className={`relative py-20 md:py-32 overflow-hidden ${
        backgroundGradient ? 'bg-gradient-to-b from-primary-50 to-transparent dark:from-dark-800 dark:to-dark-900' : ''
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight pb-4">
            {title}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </motion.p>

          {actions && (
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {actions.map((action, index) => (
                <a
                  key={index}
                  href={action.href}
                  className={action.variant === 'secondary' ? 'btn-secondary' : 'btn-primary'}
                >
                  {action.label}
                </a>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
