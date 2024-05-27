"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const frenchWords = ["le", "la", "les", "des", "du", "un", "une", "ce", "cet", "cette", "ces", "mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses", "notre", "notre", "nos", "votre", "votre", "vos", "leur", "leur", "leurs", "ceci", "cela", "ça", "ce", "celui", "celle", "ceux", "celles", "ici", "là", "là-bas", "dehors", "dedans", "en", "dans", "sur", "sous", "devant", "derrière", "à", "chez", "près", "loin", "avec", "sans", "pour", "par", "dans", "en", "vers", "contre", "dans", "de", "parmi", "entre", "sous", "sur", "dans", "à", "depuis", "pendant", "pour", "à", "tous", "toutes", "tout", "toute", "tous", "toutes", "quelques", "plusieurs", "certains", "certaines", "autre", "autres", "un", "une", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt", "vingt-et-un", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix", "cent", "mille", "million", "milliard", "millions", "milliards", "zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt", "vingt-et-un", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix", "cent", "mille", "million", "milliard", "millions", "milliards", "zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt", "vingt-et-un", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix"]
  const englishWords = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us", "is", "are", "was", "were", "has", "have", "had", "do", "does", "did", "be", "am", "are", "is", "was", "were", "been", "being", "can", "could", "will", "would", "shall", "should", "may", "might", "must", "ought", "dare", "need", "used", "to", "used", "to", "had", "better", "have", "better", "be", "had", "rather", "have", "rather", "be", "would", "sooner", "than", "would", "rather", "than", "had", "sooner", "than", "had", "rather", "than", "would", "sooner", "than", "would", "rather", "than", "had", "sooner", "than", "had", "rather", "than", "would", "sooner", "than", "would", "rather", "than", "had", "sooner", "than", "had", "rather", "than", "would", "sooner", "than", "would", "rather", "than", "had", "sooner", "than", "had", "rather", "than", "would", "sooner", "than", "would", "rather", "than", "had", "sooner", "than", "had", "rather", "than", "would", "sooner", "than", "would", "rather", "than", "had", "sooner", "than", "had", "rather", "than", "would", "sooner", "than", "would", "rather", "than", "had", "sooner", "than", "had", "rather", "than", "would", "sooner", "than", "would", "rather", "than", "had", "sooner", "than", "had", "rather", "than", "would", "sooner", "than", "would", "rather", "than", "had", "sooner", "than", "had", "rather", "than", "would", "sooner", "than", "would", "rather", "than", "had", "sooner", "than", "had", "rather", "than", "would", "sooner", "than", "would", "rather", "than", "had", "sooner", "than", "had", "rather", "than", "would", "sooner", "than", "would", "rather", "than", "had", "sooner", "than"]

  const [stats, setStats] = useState({ accuracy: 0, speed: 0 })

  const selectRandomWords = (words: string[], count: number) => {
    // Using reduce
    return Array.from({ length: count }, () => words[Math.floor(Math.random() * words.length)])
  }

  const reset = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.detail == 0) return
    setText(selectRandomWords(frenchWords, 120).join(" "))
    setInput("")
    setStats({ accuracy: 0, speed: 0 })
  }

  const calculateStats = () => {
    const speed = text.substring(0, input.length).split(" ").length


    const goodChar = input.split("").reduce((acc, char, index) => {
      if (char === text[index]) {
        acc++
      }
      return acc
    }, 0)

    const accuracy = Math.round(goodChar / input.length * 100)

    setStats({ accuracy, speed })
  }

  const [text, setText] = useState("Press Start to begin typing.")
  const [input, setInput] = useState("")


  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true)
  }, [input])

  const handleKeyDown = (e: KeyboardEvent) => {
    calculateStats()
    if (e.key === "Backspace") {
      setInput(input.slice(0, -1))
      document.removeEventListener('keydown', handleKeyDown, true)
    }
    if (e.key.length === 1) {
      setInput(input + e.key)
      document.removeEventListener('keydown', handleKeyDown, true)
    }

  }



  const drawText = () => {

    // Use reduce to minimize number of spans
    const coloredSpans = input.split("").map((char, index) => {
      return <span key={index} className={char === text[index] ? "text-green-500" : "text-red-500"}>{text[index]}</span>
    })
    const cursorSpan = <span className="bg-gray-500 text-gray-100">{text[input.length] || " "}</span>
    const lastSpan = <span className="text-gray-500">{text.slice(input.length + 1)}</span>

    return (
      <>
        {coloredSpans}
        {cursorSpan}
        {lastSpan}
      </>
    )
  }


  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl w-full space-y-8 p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-center dark:text-gray-200">Typing Speed Test</h1>
          <p className="text-gray-500 dark:text-gray-400 text-center">Test your typing speed and accuracy.</p>
        </div>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded-md dark:bg-gray-700">

            <p className="text-gray-700 dark:text-gray-300">
              {drawText()}
            </p>

          </div>
          <div className="flex justify-between text-gray-500 dark:text-gray-400">
            <div>
              Accuracy:
              <span className="font-medium">{stats.accuracy} %</span>
            </div>
            <div className="flex items-center flex-col">
              <p className="w-full text-center hidden md:block">Shift + space to restart</p>
              <Button
                onClick={(e) => reset(e)}
                className="w-full  bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700">
                Start Test
              </Button>
            </div>

            <div>
              Speed:
              <span className="font-medium">{stats.speed} WPM</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
