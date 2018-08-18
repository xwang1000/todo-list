const getArrayFromMap = map => {
  const array = []
  Object.keys(map).forEach(key => {
    array.push(map[key])
  })
  return array
}

export default getArrayFromMap
