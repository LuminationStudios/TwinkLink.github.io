import React from 'react'
import Header from '../components/Header'
import ChatBubble from '../components/ChatBubble'

export default function Chat(){
  const [messages, setMessages] = React.useState([
    { id: 'm1', text: 'Hey! 👋', sender: 'u2' },
    { id: 'm2', text: 'How are you?', sender: 'me' },
  ])
  const [text, setText] = React.useState('')

  function send(){
    if(!text.trim()) return
    setMessages(prev => [...prev, { id: Date.now().toString(), text, sender: 'me' }])
    setText('')
  }

  return (
    <div className="min-h-screen p-6 fade-in">
      <Header />
      <main className="max-w-3xl mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4">Chat</h2>
        <div className="border p-4 rounded-lg h-80 overflow-y-auto mb-4 bg-white">
          {messages.map(m => <ChatBubble key={m.id} msg={m} isOwn={m.sender==='me'} />)}
        </div>
        <div className="flex gap-2">
          <input value={text} onChange={e=>setText(e.target.value)} className="flex-1 px-4 py-2 rounded-full border" placeholder="Type a message..." />
          <button className="bg-twinkBlue text-white px-4 py-2 rounded-full btn-glow btn-glow-blue" onClick={send}>➤ Send</button>
        </div>
      </main>
    </div>
  )
}
