// https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

function betterThanAverage(classPoints, yourPoints) {
  const allClassPoints = classPoints.concat(yourPoints)
  const getAverage = allClassPoints.reduce((acc, point) => acc + point, 0) / allClassPoints.length

  return yourPoints > getAverage
}
