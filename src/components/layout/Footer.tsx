'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Phone, Mail, Building, User, Shield, Brain, Settings, TrendingUp, Code } from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'AI導入コンサルティング', href: '/services', icon: Brain },
    { name: 'システム運用サポート', href: '/services', icon: Settings },
    { name: 'ECマーケティング支援', href: '/services', icon: TrendingUp },
    { name: 'システム開発', href: '/services', icon: Code },
  ],
  company: [
    { name: '会社概要', href: '/about', icon: Building },
    { name: '代表挨拶', href: '/message', icon: User },
    { name: 'お問い合わせ', href: '/contact', icon: Mail },
    { name: 'プライバシーポリシー', href: '/privacy', icon: Shield },
  ],
}

export function Footer() {
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
    hidden: { opacity: 0, y: 20 },
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
    <footer className="bg-dark-900 dark:bg-dark-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPgo8L3N2Zz4=')] opacity-30" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative z-10 py-20"
      >
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 font-jp">オールジェンス株式会社</h3>
            <p className="text-gray-200 mb-6 text-lg font-jp">テクノロジーで未来を切り拓く</p>
            
            <div className="space-y-3 text-gray-200">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-accent flex-shrink-0" />
                <div>
                  <p>〒100-0001</p>
                  <p>東京都千代田区千代田1-1-1</p>
                  <p>バーチャルオフィス</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <p>03-1234-5678</p>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-accent flex-shrink-0" />
                <p>info@allgens.co.jp</p>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 font-jp">サービス</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-200 hover:text-accent transition-colors duration-300 flex items-center group"
                    >
                      <Icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 font-jp">会社情報</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => {
                const Icon = link.icon
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-200 hover:text-accent transition-colors duration-300 flex items-center group"
                    >
                      <Icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          variants={itemVariants}
          className="border-t border-gray-600 pt-8 text-center text-gray-200"
        >
          <p className="font-jp">&copy; 2024 オールジェンス株式会社. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
