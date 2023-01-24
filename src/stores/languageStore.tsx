import { atom } from 'nanostores'
import * as dataEN from '../data/lang/en.json'
import * as dataESP from '../data/lang/esp.json'

export const language = atom(dataESP)

export function setLanguage (isESP: boolean) {
  isESP ? language.set(dataESP) : language.set(dataEN)
}
