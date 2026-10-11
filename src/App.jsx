import { useMemo, useState } from 'react'
import './App.css'
import { BottomCont } from './components/BottomCont'
import { PasswordCont } from './components/PasswordCont'

const defaultOptions = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: false,
}

const characterSets = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+[]{};:,.<>?~',
}

function shuffleCharacters(value) {
  const characters = value.split('')

  for (let index = characters.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[characters[index], characters[randomIndex]] = [characters[randomIndex], characters[index]]
  }

  return characters.join('')
}

function getRandomChar(set) {
  return set[Math.floor(Math.random() * set.length)]
}

function calculateStrength(length, selectedOptions) {
  const selectedCount = Object.values(selectedOptions).filter(Boolean).length
  const score = selectedCount + (length >= 8 ? 1 : 0) + (length >= 12 ? 1 : 0) + (length >= 16 ? 1 : 0)

  if (score <= 2 || selectedCount === 0) {
    return {
      label: 'Too Weak!',
      score: 1,
      bars: [true, false, false, false],
      color: '#f64e5d',
    }
  }

  if (score <= 3) {
    return {
      label: 'Weak',
      score: 2,
      bars: [true, true, false, false],
      color: '#fb7c58',
    }
  }

  if (score <= 4) {
    return {
      label: 'Medium',
      score: 3,
      bars: [true, true, true, false],
      color: '#f8cd65',
    }
  }

  return {
    label: 'Strong',
    score: 4,
    bars: [true, true, true, true],
    color: '#a4ffaf',
  }
}

function App() {
  const [length, setLength] = useState(12)
  const [options, setOptions] = useState(defaultOptions)
  const [password, setPassword] = useState(() => buildPassword(12, defaultOptions))
  const [copied, setCopied] = useState(false)

  const strength = useMemo(
    () => calculateStrength(length, options),
    [length, options],
  )

  function buildPassword(nextLength = length, nextOptions = options) {
    const activeOptions = Object.entries(nextOptions)
      .filter(([, enabled]) => enabled)
      .map(([key]) => key)

    if (activeOptions.length === 0) {
      return ''
    }

    const requiredCharacters = []

    activeOptions.forEach((optionKey) => {
      requiredCharacters.push(getRandomChar(characterSets[optionKey]))
    })

    let generatedPassword = requiredCharacters.join('')

    while (generatedPassword.length < nextLength) {
      const selectedType = activeOptions[Math.floor(Math.random() * activeOptions.length)]
      generatedPassword += getRandomChar(characterSets[selectedType])
    }

    generatedPassword = shuffleCharacters(generatedPassword)

    if (generatedPassword.length > nextLength) {
      generatedPassword = generatedPassword.slice(0, nextLength)
    }

    return generatedPassword
  }

  function generatePassword(nextLength = length, nextOptions = options) {
    setPassword(buildPassword(nextLength, nextOptions))
    setCopied(false)
  }

  function toggleOption(optionKey) {
    setOptions((previousOptions) => {
      const nextOptions = {
        ...previousOptions,
        [optionKey]: !previousOptions[optionKey],
      }

      setPassword(buildPassword(length, nextOptions))
      setCopied(false)

      return nextOptions
    })
  }

  async function handleCopy() {
    if (!password) {
      return
    }

    try {
      await navigator.clipboard.writeText(password)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch (error) {
      console.error('Copy failed:', error)
    }
  }

  return (
    <div className="App">
      <PasswordCont password={password} onCopy={handleCopy} copied={copied} />
      <BottomCont
        length={length}
        onChangeLength={(value) => {
          setLength(value)
          setPassword(buildPassword(value, options))
          setCopied(false)
        }}
        options={options}
        onToggleOption={toggleOption}
        onGenerate={() => generatePassword()}
        strength={strength}
      />
    </div>
  )
}

export default App
