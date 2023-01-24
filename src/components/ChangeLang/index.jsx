import { useState } from 'react'
import { setLanguage } from '../../stores/languageStore'
// import { useStore } from '@nanostores/react'

export const ChangeLang = () => {
  const [isESP, setIsESP] = useState(false)
  // const $language = useStore(language)

  const handleLang = () => {
    setIsESP(!isESP)
    setLanguage(isESP)
  }

  return (
    <div>
      <button onClick={handleLang}>{isESP ? 'English' : 'Español'}</button>
    </div>
  )
}
