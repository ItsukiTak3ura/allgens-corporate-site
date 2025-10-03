'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Settings, TrendingUp, Code, CheckCircle } from 'lucide-react'

const solutions = [
  {
    icon: Brain,
    title: 'AI導入コンサルティング',
    description: '機械学習とAI技術を活用した業務効率化と意思決定支援',
    gradient: 'from-primary-500 to-primary-600',
    color: 'primary',
  },
  {
    icon: Settings,
    title: 'システム運用サポート',
    description: '24時間365日の監視体制による安定したシステム運用',
    gradient: 'from-accent-500 to-accent-600',
    color: 'accent',
  },
  {
    icon: TrendingUp,
    title: 'ECマーケティング支援',
    description: 'データドリブンなマーケティング戦略による売上向上',
    gradient: 'from-green-500 to-green-600',
    color: 'green',
  },
  {
    icon: Code,
    title: 'システム開発',
    description: '最新技術を活用したカスタムシステム開発',
    gradient: 'from-purple-500 to-purple-600',
    color: 'purple',
  },
]

const colorClasses = {
  primary: 'text-primary-600 dark:text-primary-400',
  accent: 'text-accent-600 dark:text-accent-400',
  green: 'text-green-600 dark:text-green-400',
  purple: 'text-purple-600 dark:text-purple-400',
}

export function SolutionSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50 dark:from-dark-900 dark:to-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSg1OSwxMzAsMjM0LDAuMSkiLz4KPC9zdmc+')] opacity-50" />
      
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
            className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-6"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            私たちの解決策
          </motion.span>
          
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8 font-jp">
            テクノロジーで
            <br className="hidden md:block" />
            <span className="gradient-text">未来を創造</span>する
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-jp">
            最先端のテクノロジーを活用し、お客様のビジネスを次のレベルへと導きます
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const colorClass = colorClasses[solution.color as keyof typeof colorClasses]
            
            return (
              <motion.div
                key={solution.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform border border-white/30 dark:border-gray-700/50 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-20 h-20 bg-gradient-to-br ${solution.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 font-jp">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-jp text-sm mb-4">
                    {solution.description}
                  </p>
                  
                  <div className={`text-xs ${colorClass} font-medium`}>
                    詳細を見る →
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
