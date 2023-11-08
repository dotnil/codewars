/* Training JS #2: Basic data types--Number

Task

I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.
*/

let v1 = 50
let v2 = 100
let v3 = 150
let v4 = 200
let v5 = 2
let v6 = 250

export const equal1 = (a = v1, b = v1) => a + b
export const equal2 = (a = v4, b = v2) => a - b
export const equal3 = (a = v1, b = v5) => a * b
export const equal4 = (a = v4, b = v5) => a / b
export const equal5 = (a = v6, b = v3) => a % b
