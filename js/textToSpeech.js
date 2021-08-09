/**
 * Script to Handle Text to Speech using speechSynthesis
 */

let _speechSynth
let _voices
const _cache = {}

/**
 * Load Voices. Attempts to load a voice until one is loaded
 */

const loadVoicesWhenAvailable = (onComplete = () => {}) => {
  _speechSynth = window.speechSynthesis
  const voices = _speechSynth.getVoices()

  if (voices.length !== 0) {
    _voices = voices
    onComplete()
  } else {
    return setTimeout(() => { loadVoicesWhenAvailable(onComplete) }, 100)
  }
}

/**
 * Returns the first found voice for a given language code.
 */

const getVoices = (locale) => {
  if (!_speechSynth) {
    throw new Error('Browser does not support speech synthesis')
  }

  if (_cache[locale]) return _cache[locale]

  _cache[locale] = _voices.filter(voice => voice.lang === locale)
  return _cache[locale]
}

/**
 * Speak a certain text 
 * @param locale the locale this voice requires
 * @param text the text to speak
 * @param onEnd callback if text to speech is finished
 */

const playByText = (locale, text, onEnd) =>{
  const voices = getVoices(locale)

  // TODO load preference here, e.g. male / female etc.
  
  const utterance = new window.SpeechSynthesisUtterance()
  utterance.voice = voices[0]
  utterance.pitch = 1
  utterance.rate = 1
  utterance.voiceURI = 'native'
  utterance.volume = 1
  utterance.rate = 1
  utterance.pitch = 1
  utterance.text = text
  utterance.lang = locale

  if (onEnd) {
    utterance.onend = onEnd
  }

  _speechSynth.cancel() // cancel current speak, if any is running
  _speechSynth.speak(utterance)
}

// on document ready
loadVoicesWhenAvailable(() => {
  console.log("voices loaded") 
})

const speakArabic = (text) => { // "ar-SA"
  setTimeout(() => playByText("ar-SA", text), 300)
}