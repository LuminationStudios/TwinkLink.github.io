import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Home(){
  return (
    <div className="min-h-screen bg-gradient-to-br from-twinkPink to-twinkBlue p-6 fade-in">
      <Header />
      <main className="max-w-4xl mx-auto text-center mt-12">
        <img src="/logo.png" alt="TwinkLink" className="mx-auto w-36 h-36 rounded-full border-4 border-white mb-4" />
        <h1 className="text-5xl font-bold text-white mb-2">Welcome to TwinkLink 🌸💙</h1>
        <p className="text-white/90 mb-6">A safe and colorful place to connect, chat, and find your perfect match.</p>
        <div className="flex justify-center gap-4">
          <Link to='/discover' className="bg-white text-twinkPink px-6 py-3 rounded-full font-semibold shadow btn-glow btn-glow-pink">✨ Discover</Link>
          <Link to='/chat' className="bg-white text-twinkBlue px-6 py-3 rounded-full font-semibold shadow btn-glow btn-glow-blue">💬 Chat</Link>
        </div>
      </main>
    </div>
  )
}
