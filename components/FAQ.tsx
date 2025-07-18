"use client"

import { FAQSection } from "@/lib/types"
import { useMemo } from "react"

interface FAQProps {
  faq?: FAQSection
}

// 预定义一些好看的文字颜色
const textColors = [
  "text-blue-400",
  "text-purple-400",
  "text-green-400",
  "text-rose-400",
  "text-amber-400",
  "text-teal-400",
  "text-indigo-400",
  "text-cyan-400",
]

export default function FAQ({ faq }: FAQProps) {
  if (!faq?.items?.length) {
    return null
  }

  // 为每个问题分配一个随机文字颜色
  const questionColors = useMemo(() => {
    return faq.items.map(() => {
      const randomIndex = Math.floor(Math.random() * textColors.length)
      return textColors[randomIndex]
    })
  }, [faq.items.length])

  return (
    <div className="mt-8 bg-gray-900 rounded-xl p-8">
      <h2 className="flex items-center justify-center text-3xl font-bold mb-8">
        <span className="inline-block align-middle mr-2">❓</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow">{faq.title}</span>
      </h2>
      <div className="space-y-4">
        {faq.items.map((item, index) => (
          <div
            key={index}
            className="rounded-lg p-6 bg-gray-800/50"
          >
            <h3 className={`text-lg font-semibold mb-3 ${questionColors[index]}`}>
              {item.question}
            </h3>
            <p className="text-white leading-relaxed">
              {item.answer}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}

