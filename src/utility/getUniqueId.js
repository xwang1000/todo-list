const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const characters = '0123456789abcdefghijklmnopqrstuvwxyz'

const getRandomCharacter = () => characters[getRandomNumber(0, characters.length - 1)]

const getUniqueId = (length = 8) => {
  let id = ''
  for (let i = 0; i < length; i++) {
    id += getRandomCharacter()
  }
  return id
}

export default getUniqueId
