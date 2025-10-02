import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){ 
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white/60 backdrop-blur-md shadow-sm">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="logo" className="w-10 h-10 rounded-full"/>
        <div className="font-bold text-lg">TwinkLink</div>
      </div>
      <nav className="flex gap-4 items-center">
        <Link to="/" className="text-sm font-medium">Home</Link>
        <Link to="/discover" className="text-sm font-medium">Discover</Link>
        <Link to="/chat" className="text-sm font-medium">Chat</Link>
        <Link to="/settings" className="text-sm font-medium">Settings</Link>
      </nav>
    </header>
  )
}
