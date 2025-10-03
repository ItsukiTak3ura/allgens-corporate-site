'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrendingDown, Database, Clock, AlertTriangle } from 'lucide-react'

const challenges = [
  {
    icon: TrendingDown,
    title: '非効率な業務プロセス',
    description: '手作業による非効率な業務プロセスが、生産性の向上を阻害しています',
    color: 'red',
  },
  {
    icon: Database,
    title: 'データ活用の不足',
    description: '大量のデータを保有しているにも関わらず、有効活用できていない企業が多数存在します',
    color: 'orange',
  },
  {
    icon: Clock,
    title: '技術革新への対応遅れ',
    description: '急速に進歩するテクノロジーに追いつけず、競争力を失っている企業が増加しています',
    color: 'yellow',
  },
]

const colorClasses = {
  red: {
    bg: 'bg-red-100 dark:bg-red-900/30',
    icon: 'text-red-600 dark:text-red-400',
  },
  orange: {
    bg: 'bg-orange-100 dark:bg-orange-900/30',
    icon: 'text-orange-600 dark:text-orange-400',
  },
  yellow: {
    bg: 'bg-yellow-100 dark:bg-yellow-900/30',
    icon: 'text-yellow-600 dark:text-yellow-400',
  },
}

export function ChallengeSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="section-padding bg-white dark:bg-dark-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white dark:from-dark-900/50 dark:to-dark-950" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-medium mb-6"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            ビジネスの課題
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 font-jp">
            あなたのビジネスは
            <br className="hidden md:block" />
            <span className="text-red-600 dark:text-red-400">本当に最適化</span>されていますか？
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-jp">
            多くの企業が直面している課題と、私たちが提供する解決策をご紹介します
          </p>
        </motion.div>

        {/* Challenge Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            const colors = colorClasses[challenge.color as keyof typeof colorClasses]
            
            return (
              <motion.div
                key={challenge.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white dark:bg-dark-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform border border-gray-200/50 dark:border-gray-700/50 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-jp">
                    {challenge.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-jp">
                    {challenge.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
