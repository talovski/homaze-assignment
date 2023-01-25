# Part 2

Tasks:

1. Try to understand what this code does
2. If you catch the point, improve this code’s readability.

---

## Code solution:

## Here: `transformExtractedLetters.ts`

## 1. What the code does

The method takes a single parameter `param` (string).
If `param` is not empty, the function splits it into an array separated by space character (so basically we now have an array of words).
Variable `amount` holds the length of the array.

### if amount > 1 (if there are more than one word)

If `amount` > 1, a RegExp is used. RegExp matches the first letter of each word of the input string. This RegExp is used on the `param` string. The resulting array is saved into `resultVar`.

We then re-write `resultVar` from array to string, so it would only include include the first letters of the first and the last words of the string we used for RegExp.

### if amount <= 1 (one word or none)

In this case we check if `param` string is not empty. If it is not empty, we assign the first letter of the `param` to `resultVar`. Otherwise, we assign an empty string to `resultVar`.

We then return `resultVar` in uppercase.

## 2. How to improve

1. The first logical step is to remove the mysique and rename the method to something more descriptive. We might also rename the variables inside depending on the context.
2. The second step is to split this method into a few separate ones, so that each method would do only one thing, but hopefully do it good.
   E.g.: `matchWords(str)` to define and apply the RegExp; `extractFirstLetters(param)` to only get the first letters of the first (0) and the last (-1) words from the array; and `transformExtractedLetters(param)` to check if param is empty (and throw an error) or not empty (and apply `extractImportantLetters`).
3. By doing this, we also reduce the complexity with if-else statements — the big if-else block is now located in one function and is much easier to understand. The resulting code could look like this:

```
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

```

3. This way, we have a better understanding of what is going on in the code.
4. We also added a better error message, because it never hurts :).
