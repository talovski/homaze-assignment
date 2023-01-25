const someMysticMethod = (param) => {
  let resultVal

  if (!param) {
    console.log('Error: some error text...')
    return ''
  }
  const splattedParam = param.split(' ')
  const amount = splattedParam.length

  if (amount > 1) {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu')
    resultVal = [...param.matchAll(rgx)] || []

    resultVal = (resultVal.shift()?.[1] || '') + (resultVal.pop()?.[1] || '')
  } else {
    if (param.length > 0) {
      resultVal = param.charAt(0)
    } else {
      resultVal = ''
    }
  }
  console.log('result', resultVal.toUpperCase())
  return resultVal.toUpperCase()
}

someMysticMethod('Apple Not Banana')
someMysticMethod('')
someMysticMethod('a')
