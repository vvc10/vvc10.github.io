'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Connect() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md space-y-6"
      >
        <div>
          <h1 className="text-2xl text-red-500">CONNECT WITH ME</h1>
          <p className="text-sm text-gray-400">WANNA CHAT? OR JUST SHARE SOMETHING COOL?</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm text-red-500">HOW SHOULD I CALL YOU?</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-black border border-red-500/20 p-2 text-white focus:border-red-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-red-500">SENDING FROM</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black border border-red-500/20 p-2 text-white focus:border-red-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-red-500">TRANSMITTED DATA</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full bg-black border border-red-500/20 p-2 text-white focus:border-red-500 transition-colors"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-red-500 text-white px-4 py-2 hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              SEND MESSAGE [ENTER]
            </button>
            <button
              type="button"
              className="px-4 py-2 border border-red-500/20 text-red-500 hover:border-red-500 transition-colors"
            >
              DISCARD [ESC]
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

