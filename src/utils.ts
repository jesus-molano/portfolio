const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-UK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

const capitalizeSentence = (input: string): string => {
  const words = input.split(' ')
  const capitalizedWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1)
  })
  return capitalizedWords.join(' ')
}

export { formatDate, capitalizeSentence }