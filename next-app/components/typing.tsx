"use client";

import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import UseTimer from "@/lib/useTimer";
import { score } from "@/types/score";
import { useEffect, useState } from "react";

export default function Typing({ newScore } : { newScore : (score: score) => void }) {
  const frenchWords = ["bleu", "super", "autre", "bizarre", "difficile", "drôle", "étrange", "facile", "grave", "impossible", "jeune", "juste", "libre", "malade", "même", "pauvre", "possible", "propre", "rouge", "sale", "simple", "tranquille", "triste", "vide", "faux", "français", "gros", "heureux", "mauvais", "sérieux", "vieux", "vrai", "ancien", "beau", "blanc", "certain", "chaud", "cher", "clair", "content", "dernier", "désolé", "différent", "droit", "entier", "fort", "froid", "gentil", "grand", "haut", "humain", "important", "joli", "léger", "long", "meilleur", "mort", "noir", "nouveau", "pareil", "petit", "plein", "premier", "prêt", "prochain", "quoi", "seul", "tout", "vert", "vivant", "aide", "chef", "enfant", "garde", "gauche", "geste", "gosse", "livre", "merci", "mort", "ombre", "part", "poche", "professeur", "tour", "fois", "madame", "paix", "voix", "affaire", "année", "arme", "armée", "attention", "balle", "boîte", "bouche", "carte", "cause", "chambre", "chance", "chose", "classe", "confiance", "couleur", "cour", "cuisine", "dame", "dent", "droite", "école", "église", "envie", "épaule", "époque", "équipe", "erreur", "espèce", "face", "façon", "faim", "famille", "faute", "femme", "fenêtre", "fête", "fille", "fleur", "force", "forme", "guerre", "gueule", "habitude", "heure", "histoire", "idée", "image", "impression", "jambe", "joie", "journée", "langue", "lettre", "lèvre", "ligne", "lumière", "main", "maison", "maman", "manière", "marche", "merde", "mère", "minute", "musique", "nuit", "odeur", "oreille", "parole"]
  const englishWords = ["about", "above", "add", "after", "again", "air", "all", "almost", "along", "also", "always", "America", "an", "and", "animal", "another", "answer", "any", "are", "around", "as", "ask", "at", "away", "back", "be", "because", "been", "before", "began", "begin", "being", "below", "between", "big", "book", "both", "boy", "but", "by", "call", "came", "can", "car", "carry", "change", "children", "city", "close", "come", "could", "country", "cut", "day", "did", "different", "do", "does", "don", "down", "each", "earth", "eat", "end", "enough", "even", "every", "example", "eye", "face", "family", "far", "father", "feet", "few", "find", "first", "follow", "food", "for", "form", "found", "four", "from", "get", "girl", "give", "go", "good", "got", "great", "group", "grow", "had", "hand", "hard", "has", "have", "he", "head", "hear", "help", "her", "here", "high", "him", "his", "home", "house", "how", "idea", "if", "important", "in", "Indian", "into", "is", "it", "its", "it", "just", "keep", "kind", "know", "land", "large", "last", "later", "learn", "leave", "left", "let", "letter", "life", "light", "like", "line", "list", "little", "live", "long", "look", "made", "make", "man", "many", "may", "me", "mean", "men", "might", "mile", "miss", "more", "most", "mother", "mountain", "move", "much", "must", "my", "name", "near", "need", "never", "new", "next", "night", "no", "not", "now", "number", "of", "off", "often", "oil", "old", "on", "once", "one", "only", "open", "or", "other", "our", "out", "over", "own", "page", "paper", "part", "people", "picture", "place", "plant", "play", "point", "put", "question", "quick", "quickly", "quite", "read", "really", "right", "river", "run", "said", "same", "saw", "say", "school", "sea", "second", "see", "seem", "sentence", "set", "she", "should", "show", "side", "small", "so", "some", "something", "sometimes", "song", "soon", "sound", "spell", "start", "state", "still", "stop", "story", "study", "such", "take", "talk", "tell", "than", "that", "the", "their", "them", "then", "there", "these", "they", "thing", "think", "this", "those", "thought", "three", "through", "time", "to", "together", "too", "took", "tree", "try", "turn", "two", "under", "until", "up", "us", "use", "very", "walk", "want", "was", "watch", "water", "way", "we", "well", "went", "were", "what", "when", "where", "which", "while", "white", "who", "why", "will", "with", "without", "word", "work", "world", "would", "write", "year", "you", "young"]
  const [stats, setStats] = useState({ accuracy: 0, speed: 0 })
  const { counter, resetCounter } = UseTimer()
  const [started, setStarted] = useState(false)
  const [text, setText] = useState("Press Start to begin typing.")
  const [input, setInput] = useState("")


  const selectRandomWords = (words: string[], count: number) => {
    // Using reduce
    return Array.from({ length: count }, () => words[Math.floor(Math.random() * words.length)])
  }


  useEffect(() => {
    calculateStats()
  }, [counter])


  const reset = (e: React.MouseEvent<HTMLButtonElement> | undefined) => {
    if (e && e.detail == 0) return
    setText(selectRandomWords(frenchWords, 120).join(" "))
    setInput("")
    setStats({ accuracy: 0, speed: 0 })
    setStarted(true)
    resetCounter()
  }


  const calculateStats = () => {
    if (started === false) return;

    const speed = Math.round((text.substring(0, input.length).split(" ").length - 1) * (60 / (60 - counter)))

    const goodChar = input.split("").reduce((acc, char, index) => {
      if (char === text[index]) {
        acc++
      }
      return acc
    }, 0)

    const accuracy = input.length === 0 ? 100 : Math.round(goodChar / (input.length) * 100)
    setStats({ accuracy, speed })
  }

  useEffect(() => {
    if (counter === 0 && stats.speed > 0 && stats.accuracy > 0 && started === true) {
      setStarted(false)
      newScore({wpm : stats.speed, accuracy: stats.accuracy})
    }
  }, [counter])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true)

  }, [input])

  useEffect(() => {
    if (started) {
      document.addEventListener('keydown', handleKeyDown, true)
    }
  }, [started])

  useEffect(() => {
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.shiftKey === true && e.code === "Space") {
        reset(undefined)
        return
      }
    })
  }, [])

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();

    if (e.key === "Backspace") {
      setInput(input.slice(0, -1))
      document.removeEventListener('keydown', handleKeyDown, true)
    }
    if (e.key.length === 1 && started === true) {
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
    <div className="max-w-6xl w-full pt-4 p-8 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-center dark:text-gray-200">Typing Speed Test</h1>
        <p className="text-gray-500 dark:text-gray-400 text-center">Test your typing speed and accuracy.</p>
      </div>
      <div className="space-y-4">
        <Slider
          defaultValue={[]}
          value={[Math.round(counter / 60 * 100)]}
          max={100}
          step={1}
          className="w-full"
        />
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
            <p className="w-full text-center hidden md:block">Shift + space to start</p>
            <Button
              onClick={(e) => reset(e)}
              className="w-full  bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700">
              {started ? counter : "Start"}
            </Button>
          </div>

          <div>
            Speed:
            <span className="font-medium">{stats.speed} WPM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
