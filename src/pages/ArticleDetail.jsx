import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { articles } from '@data/portfolio'
import dayjs from 'dayjs'

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/articles" className="btn-primary">
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }

  const relatedArticles = articles.filter(
    (a) => a.id !== article.id && a.tags?.some((tag) => article.tags?.includes(tag))
  )

  return (
    <>
      <Helmet>
        <title>{article.title} | Hansanie Neththasinghe</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="article:published_time" content={article.date} />
        {article.tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Helmet>

      {/* Back Button */}
      <div className="container-custom pt-20 pb-8">
        <Link to="/articles" className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium">
          <ArrowLeft size={20} />
          Back to Articles
        </Link>
      </div>

      {/* Article Header */}
      <section className="bg-gray-50 dark:bg-dark-800 py-12">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mb-4">
              <span className="badge">{article.category}</span>
            </div>
            <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              {article.title}
            </h1>

            {/* Article Metadata */}
            <div className="flex flex-wrap gap-6 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <time>{dayjs(article.date).format('MMMM D, YYYY')}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                {article.readingTime} min read
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {article.tags?.map((tag) => (
                <span key={tag} className="badge-secondary">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container-custom max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose dark:prose-invert max-w-none"
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {article.description}
            </p>
            <div className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: article.content }} />
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-dark-800">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.slice(0, 3).map((relArticle, index) => (
                <motion.div
                  key={relArticle.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6"
                >
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{relArticle.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {relArticle.description}
                  </p>
                  <Link to={`/articles/${relArticle.slug}`} className="text-primary-500 hover:text-primary-600 font-medium text-sm">
                    Read More →
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
