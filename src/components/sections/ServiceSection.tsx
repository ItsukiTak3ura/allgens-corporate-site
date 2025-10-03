'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Settings, TrendingUp, Code, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI導入コンサルティング',
    description: 'AI技術を活用した業務効率化、データ分析、予測モデル構築など、お客様の課題に最適なAIソリューションを提供します。',
    features: [
      'AI戦略立案・企画',
      'データ分析・可視化',
      '機械学習モデル構築',
      'AIシステム導入支援',
      '運用・保守サポート',
    ],
    color: 'primary',
  },
  {
    icon: Settings,
    title: 'システム運用サポート',
    description: '24時間365日の監視体制で、お客様のシステムを安定稼働させ、業務継続性を確保します。',
    features: [
      '24時間365日監視',
      '障害対応・復旧作業',
      'パフォーマンス最適化',
      'セキュリティ対策',
      '定期メンテナンス',
    ],
    color: 'accent',
  },
  {
    icon: TrendingUp,
    title: 'ECマーケティング支援',
    description: 'ECサイトの構築から運営、マーケティング戦略立案まで、デジタルマーケティングの全領域をサポートします。',
    features: [
      'ECサイト構築・運営',
      'SEO対策・SEM運用',
      'SNSマーケティング',
      'データ分析・改善提案',
      'コンテンツマーケティング',
    ],
    color: 'green',
  },
  {
    icon: Code,
    title: 'システム開発',
    description: 'お客様のニーズに合わせたカスタムシステム開発から、既存システムの改修まで幅広く対応します。',
    features: [
      'Webアプリケーション開発',
      'モバイルアプリ開発',
      'API開発・連携',
      'データベース設計',
      'クラウド移行支援',
    ],
    color: 'purple',
  },
]

const colorClasses = {
  primary: {
    bg: 'bg-primary-100 dark:bg-primary-900/30',
    text: 'text-primary-600 dark:text-primary-400',
    border: 'border-primary-200 dark:border-primary-800',
  },
  accent: {
    bg: 'bg-accent-100 dark:bg-accent-900/30',
    text: 'text-accent-600 dark:text-accent-400',
    border: 'border-accent-200 dark:border-accent-800',
  },
  green: {
    bg: 'bg-green-100 dark:bg-green-900/30',
    text: 'text-green-600 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900/30',
    text: 'text-purple-600 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
  },
}

export function ServiceSection() {
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
    <section className="section-padding bg-white dark:bg-dark-950">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-6 font-jp">
            サービス
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-jp">
            お客様のビジネス成長をサポートする包括的なソリューション
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const colors = colorClasses[service.color as keyof typeof colorClasses]
            
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="bg-white dark:bg-dark-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 h-full">
                  <div className="flex items-start space-x-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4 font-jp">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-jp">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                          >
                            <div className={`w-2 h-2 ${colors.bg} rounded-full mr-3 flex-shrink-0`} />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      
                      <motion.button
                        whileHover={{ x: 5 }}
                        className={`inline-flex items-center text-sm font-medium ${colors.text} hover:underline`}
                      >
                        詳細を見る
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </motion.button>
                    </div>
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
