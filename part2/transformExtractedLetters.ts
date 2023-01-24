const matchWords = (str) => {
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu')
  let matchedWords = [...str.matchAll(rgx)]
  return matchedWords
}

const extractFirstLetters = (param) => {
  let words = matchWords(param)
  let firstWord = words[0]
  let lastWord = words[words.length - 1]

  if (words.length > 1) {
    return [firstWord[1], lastWord[1]]
  } else if (words.length === 1) {
    return [firstWord[1]]
  } else {
    return ['']
  }
}

const transformExtractedLetters = (param) => {
  if (!param) {
    throw new Error('Error: missing input')
  }
  console.log('result', extractFirstLetters(param).join('').toUpperCase())
  return extractFirstLetters(param).join('').toUpperCase()
}
transformExtractedLetters('Apple')
