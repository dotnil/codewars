/* Training JS #4: Basic data types--Array

Task
I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr

When you have finished the work, click "Run Tests" to see if your code is working properly.
*/

export const getLength = arr => arr.length
export const getFirst = arr => arr[0]
export const getLast = arr => arr[arr.length - 1]

export const pushElement = (arr) => {
  const el = 1
  arr.push(el)

  return arr
}

export const popElement = (arr) => {
  arr.pop()

  return arr
}
