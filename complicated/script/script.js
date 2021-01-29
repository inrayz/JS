// let result = 1;
// let num = 266219;
// let str = String(num);
// let arr = str.split('');
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   result *= arr[i];
// }
// console.log(result);

// result = result**3;
// console.log(result);
// result = String(result);
// console.log(result.slice(0, 2)); 


// let num = 12345;
// let str = String(num);
// let arr = str.split('');

// console.log(arr);

let result = 1;
let num = 266219;
num = String(num);
console.log(num);
console.log(num.split(''));
for (let i = 0; i < num.length; i++) {
  result *= num[i];
}
console.log(result);

result = result**3;
console.log(result);
result = String(result);
console.log(result.slice(0, 2)); 