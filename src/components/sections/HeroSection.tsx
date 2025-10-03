'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Rocket, Play, Sparkles, ChevronDown } from 'lucide-react'
import { Counter } from '@/components/ui/Counter'
import { ParticleBackground } from '@/components/ui/ParticleBackground'

const stats = [
  { value: 50, label: '導入実績', suffix: '件' },
  { value: 95, label: '顧客満足度', suffix: '%' },
  { value: 30, label: 'コスト削減率', suffix: '%' },
  { value: 24, label: '時間サポート', suffix: '時間' },
]

export function HeroSection() {
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
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <section className="relative min-h-screen-safe flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-primary-900/70 to-accent-900/50" />
        <ParticleBackground />
        <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white/90 border border-white/20"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            次世代テクノロジーソリューション
          </motion.span>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] font-en tracking-tight">
            <motion.span
              className="block text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              SHAPING
            </motion.span>
            <motion.span
              className="block gradient-text-animated"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              THE FUTURE
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl mb-16 opacity-90 max-w-5xl mx-auto leading-relaxed font-jp font-light"
        >
          テクノロジーの力で、
          <br className="hidden md:block" />
          ビジネスの可能性を無限に広げる
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.a
            href="/contact"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group relative inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-12 py-6 rounded-2xl font-bold text-lg hover:from-primary-500 hover:to-primary-600 transition-all duration-500 transform hover:-translate-y-2 shadow-2xl hover:shadow-primary-500/25 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <Rocket className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            今すぐ始める
          </motion.a>

          <motion.a
            href="/services"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="group inline-flex items-center border-2 border-white/30 text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm"
          >
            <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
            サービスを見る
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                <Counter target={stat.value} duration={2000} delay={1.5 + index * 0.2} />
                {stat.suffix}
              </div>
              <div className="text-sm text-white/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-sm text-white/70 mb-2 font-medium">Scroll</span>
          <ChevronDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
