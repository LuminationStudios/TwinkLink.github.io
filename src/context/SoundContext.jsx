import React, { createContext, useState, useEffect } from "react"

export const SoundContext = createContext()

export function SoundProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem("soundEnabled")
    if (saved !== null) setSoundEnabled(saved === "true")
  }, [])

  const toggleSound = () => {
    const newValue = !soundEnabled
    setSoundEnabled(newValue)
    localStorage.setItem("soundEnabled", newValue)
  }

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundContext.Provider>
  )
}
