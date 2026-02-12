import { Helmet } from 'react-helmet-async'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Hero from '@components/Hero'
import ArticleCard from '@components/ArticleCard'
import { articles } from '@data/portfolio'
import { Search } from 'lucide-react'

export default function Articles() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState(null)

  // Get unique tags
  const allTags = useMemo(() => {
    const tags = new Set()
    articles.forEach((article) => {
      article.tags?.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags)
  }, [])

  // Filter articles
  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const matchesSearch =
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesTag = !selectedTag || article.tags?.includes(selectedTag)

      return matchesSearch && matchesTag
    })
  }, [searchTerm, selectedTag])

  return (
    <>
      <Helmet>
        <title>Articles | Hansanie Neththasinghe</title>
        <meta name="description" content="Blog posts and technical articles" />
      </Helmet>

      <Hero
        title="Articles & Tutorials"
        subtitle="Thoughts on web development, learning, and technology"
        backgroundGradient
      />

      <section className="py-20 container-custom">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-12"
            />
          </div>
        </div>

        {/* Tags Filter */}
        <div className="mb-12">
          <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Filter by tag</h3>
          <div className="flex flex-wrap gap-2">
            <motion.button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                !selectedTag
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-dark-700 text-gray-900 dark:text-white hover:bg-gray-300'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              All
            </motion.button>
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedTag === tag
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 dark:bg-dark-700 text-gray-900 dark:text-white hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                #{tag}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No articles found matching your search.
            </p>
          </div>
        )}
      </section>
    </>
  )
}
