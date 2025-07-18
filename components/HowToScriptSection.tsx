import React from "react"

interface HowToScriptSectionProps {
  title: string
  steps: string[]
}

const HowToScriptSection: React.FC<HowToScriptSectionProps> = ({ title, steps }) => {
  return (
    <section className="bg-gray-900 rounded-lg p-8 shadow-lg">
      <h2 className="flex items-center justify-center text-2xl md:text-3xl font-bold mb-4">
        <span className="inline-block align-middle mr-2">🛠️</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 drop-shadow">{title}</span>
      </h2>
      <ol className="list-decimal list-inside space-y-3 text-lg text-gray-200">
        {steps.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </section>
  )
}

export default HowToScriptSection 