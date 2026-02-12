import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import dayjs from 'dayjs'

export default function ArticleCard({ article, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col"
    >
      {/* Category Badge */}
      {article.category && (
        <div className="mb-3">
          <span className="badge text-xs">{article.category}</span>
        </div>
      )}

      {/* Title */}
      <Link to={`/articles/${article.slug}`} className="mb-2">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-200 line-clamp-2">
          {article.title}
        </h3>
      </Link>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
        {article.description}
      </p>

      {/* Metadata */}
      <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-500 mb-4 pb-4 border-b border-gray-200 dark:border-dark-700">
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <time>{dayjs(article.date).format('MMM DD, YYYY')}</time>
        </div>
        <div className="flex items-center gap-1">
          <Clock size={14} />
          {article.readingTime || '5'} min read
        </div>
      </div>

      {/* Tags */}
      {article.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="badge-secondary text-xs">
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Read More Link */}
      <Link
        to={`/articles/${article.slug}`}
        className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium text-sm group/link"
      >
        Read More
        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
      </Link>
    </motion.div>
  )
}
