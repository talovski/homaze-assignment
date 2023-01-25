const matchWords = (str) => {
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu')
  let matchedWords = [...str.matchAll(rgx)]
  return matchedWords
}

const extractFirstLetters = (param) => {
  let words = matchWords(param)

  if (!words.length) return param.charAt(0)

  let firstWord = words[0]
  let lastWord = words[words.length - 1]

  let extractedLetters =
    words.length > 1 ? firstWord[1] + lastWord[1] : firstWord[1]

  return extractedLetters
}

const transformExtractedLetters = (param) => {
  if (!param) {
    console.log('No param was provided')
    return ''
  }
  console.log('result', extractFirstLetters(param).toUpperCase())
  return extractFirstLetters(param).toUpperCase()
}
transformExtractedLetters('Apple not banana')
transformExtractedLetters('')
transformExtractedLetters('a')
