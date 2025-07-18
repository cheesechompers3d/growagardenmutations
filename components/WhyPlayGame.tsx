"use client"

import React from "react"

interface WhyPlayGameProps {
  reasons: {
    title: string
    items: string[]
  }
}

const WhyPlayGame: React.FC<WhyPlayGameProps> = ({ reasons }) => {
  if (!reasons?.items || reasons.items.length === 0) return null
  return (
    <div className="mt-8 rounded-2xl shadow-xl border border-gray-700/50 bg-gradient-to-br from-[#232526] via-[#414345] to-[#232526] p-6">
      <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 drop-shadow-lg">
        {reasons.title}
      </h2>
      {reasons.items.map((item, idx) => (
        <p key={idx} className="mb-4 text-gray-200 text-base leading-relaxed">
          {item}
        </p>
      ))}
    </div>
  )
}

export default WhyPlayGame 