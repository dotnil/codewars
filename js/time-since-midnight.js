/* Beginner Series #2 Clock


Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.
Example:

h = 0
m = 1
s = 1

result = 61000

Input constraints:

    0 <= h <= 23
    0 <= m <= 59
    0 <= s <= 59
*/

export const timeSinceMidnight  = (hour, min, sec) => {
  const millisecondsInHour = 60 * 60 * 1000
  const millisecondsInMinute = 60 * 1000
  const millisecondsInSecond = 1000

  const hoursToMilliseconds = hour * millisecondsInHour
  const minutesToMilliseconds = min * millisecondsInMinute
  const secondsToMilliseconds = sec * millisecondsInSecond

  return hoursToMilliseconds + minutesToMilliseconds + secondsToMilliseconds
}
