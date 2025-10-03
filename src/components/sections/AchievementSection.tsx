'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Counter } from '@/components/ui/Counter'

const achievements = [
  { value: 50, label: '導入実績', suffix: '+', description: '件' },
  { value: 95, label: '顧客満足度', suffix: '%', description: '' },
  { value: 30, label: '平均コスト削減', suffix: '%', description: '' },
  { value: 24, label: 'サポート体制', suffix: '/7', description: '時間' },
  { value: 15, label: '平均復旧時間', suffix: '分', description: '' },
  { value: 99.9, label: 'システム稼働率', suffix: '%', description: '' },
]

export function AchievementSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-700 dark:to-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPgo8L3N2Zz4=')] opacity-20" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-jp">
            実績・成果
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-jp">
            お客様に選ばれ続ける理由が、ここにあります
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center text-white transform hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold mb-2 font-en group-hover:scale-110 transition-transform duration-300"
                >
                  <Counter
                    target={achievement.value}
                    duration={2000}
                    delay={1 + index * 0.2}
                  />
                  {achievement.suffix}
                </motion.div>
                
                <div className="text-lg text-white/90 font-jp mb-1">
                  {achievement.label}
                </div>
                
                {achievement.description && (
                  <div className="text-sm text-white/70 font-jp">
                    {achievement.description}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-white/80 text-lg font-jp mb-8">
            これらの数字は、お客様との信頼関係の証です
          </p>
          
          <motion.a
            href="/results"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 backdrop-blur-sm border border-white/30"
          >
            詳細な実績を見る
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
