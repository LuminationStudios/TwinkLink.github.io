import React from 'react'
import Header from '../components/Header'
import ProfileCard from '../components/ProfileCard'
import { DUMMY_PROFILES } from '../utils/dummyProfiles'

export default function Discover(){
  const [profiles, setProfiles] = React.useState(DUMMY_PROFILES)
  const [notif, setNotif] = React.useState(null)
  const [blocked, setBlocked] = React.useState([])

  function handleLike(p){
    setNotif("🎉 It's a Match! (demo)")
  }
  function handleBlock(p){
    setBlocked(prev => [...prev, p.id])
    setProfiles(profiles.filter(x=>x.id !== p.id))
  }

  return (
    <div className="min-h-screen p-6 fade-in">
      <Header />
      <main className="max-w-5xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Discover</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map(p => <ProfileCard key={p.id} profile={p} onLike={handleLike} onBlock={handleBlock} />)}
        </div>
        {notif && <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50"><div className="bg-white px-6 py-3 rounded-2xl shadow-lg">{notif}</div></div>}
      </main>
    </div>
  )
}
