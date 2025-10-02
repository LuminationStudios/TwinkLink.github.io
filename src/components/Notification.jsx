import React, { useEffect, useState, useContext } from 'react'
import { SoundContext } from '../context/SoundContext'

export default function Notification({ message, type='default', onClose }){
  const [closing, setClosing] = useState(false)
  const { soundEnabled } = useContext(SoundContext)

  useEffect(()=>{
    if(soundEnabled){
      let sound = '/sounds/alert.mp3'
      if(type === 'match') sound = '/sounds/match.mp3'
      if(type === 'message') sound = '/sounds/message.mp3'
      const audio = new Audio(sound)
      audio.volume = 0.25
      audio.play().catch(()=>{})
    }
    const timer = setTimeout(()=>{
      setClosing(true)
      setTimeout(onClose, 500)
    }, 2500)
    return ()=> clearTimeout(timer)
  },[onClose, type, soundEnabled])

  return (
    <div className={`fixed top-6 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-6 py-3 rounded-2xl shadow-lg font-semibold z-50 ${closing ? 'notify-fadeout' : 'notify-pop'}`}>
      {message}
    </div>
  )
}
