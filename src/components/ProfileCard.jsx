import React from 'react'

export default function ProfileCard({ profile, onLike, onBlock }){
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md w-72 text-center">
      <div className="flex flex-col items-center">
        <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold mb-3">
          {profile.displayName.charAt(0).toUpperCase()}
        </div>
        <h3 className="text-lg font-semibold">{profile.displayName}, <span className="text-sm">{profile.age}</span></h3>
        <p className="text-sm text-gray-500">{profile.city}</p>
        <p className="text-sm mt-2">{profile.bio}</p>
        <div className="flex gap-3 mt-4">
          <button className="bg-twinkPink text-white px-4 py-2 rounded-full shadow btn-glow btn-glow-pink" onClick={()=>onLike && onLike(profile)}>❤️ Like</button>
          <button className="bg-twinkBlue text-white px-4 py-2 rounded-full shadow btn-glow btn-glow-blue" onClick={()=>onBlock && onBlock(profile)}>🚫 Block</button>
        </div>
      </div>
    </div>
  )
}
