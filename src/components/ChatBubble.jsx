import React from 'react'

export default function ChatBubble({ msg, isOwn }){
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-2 chat-animate`}>
      <div className={`px-4 py-2 rounded-2xl max-w-xs text-sm shadow ${isOwn ? 'bg-twinkBlue text-gray-900 rounded-br-none' : 'bg-twinkPink text-gray-900 rounded-bl-none'}`}>
        {msg.text}
      </div>
    </div>
  )
}
