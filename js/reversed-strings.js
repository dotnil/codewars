/*
Reversed Strings.

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

export function solution(str){
  return str.split('').reverse().join('')
}
