'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Rocket, MessageCircle, Download, ArrowRight } from 'lucide-react'

const ctaActions = [
  {
    icon: MessageCircle,
    title: '無料相談',
    description: 'お気軽にご相談ください',
    href: '/contact',
    color: 'primary',
  },
  {
    icon: Download,
    title: '資料請求',
    description: 'サービス資料をダウンロード',
    href: '/contact',
    color: 'accent',
  },
  {
    icon: Rocket,
    title: 'プロジェクト開始',
    description: '今すぐプロジェクトを始める',
    href: '/contact',
    color: 'green',
  },
]

const colorClasses = {
  primary: {
    bg: 'bg-primary-600 hover:bg-primary-700',
    text: 'text-white',
    icon: 'text-primary-600',
  },
  accent: {
    bg: 'bg-accent-600 hover:bg-accent-700',
    text: 'text-white',
    icon: 'text-accent-600',
  },
  green: {
    bg: 'bg-green-600 hover:bg-green-700',
    text: 'text-white',
    icon: 'text-green-600',
  },
}

export function CTASection() {
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
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-6 font-jp">
            お気軽にご相談ください
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-jp">
            お客様のビジネス課題について、無料でご相談を承ります
          </p>
        </motion.div>

        {/* CTA Actions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ctaActions.map((action, index) => {
            const Icon = action.icon
            const colors = colorClasses[action.color as keyof typeof colorClasses]
            
            return (
              <motion.a
                key={action.title}
                href={action.href}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group block"
              >
                <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-jp">
                    {action.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 font-jp">
                    {action.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 group-hover:underline">
                    詳細を見る
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Main CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:from-primary-700 hover:to-primary-900 transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl"
          >
            <Rocket className="w-6 h-6 mr-3" />
            資料請求・お問い合わせはこちら
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
