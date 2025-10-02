import React, { useContext } from 'react'
import Header from '../components/Header'
import { SoundContext } from '../context/SoundContext'

export default function Settings(){
  const { soundEnabled, toggleSound } = useContext(SoundContext)

  return (
    <div className="min-h-screen p-6 fade-in">
      <Header />
      <main className="max-w-3xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="flex items-center gap-4">
          <div className="font-medium">🔊 Sounds</div>
          <button onClick={toggleSound} className={`px-4 py-2 rounded-full shadow btn-glow ${soundEnabled ? 'bg-twinkBlue text-white btn-glow-blue' : 'bg-gray-300 text-gray-700'}`}>
            {soundEnabled ? 'On' : 'Off'}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4">Toggle notification sounds for matches and messages.</p>
      </main>
    </div>
  )
}
