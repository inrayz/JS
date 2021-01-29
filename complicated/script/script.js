let result = 1;
let num = 266219;
num = String(num);
num.split('');
for (let i = 0; i < num.length; i++) {
  result *= num[i];
}
console.log(result);

result = result**3;
console.log(result);
result = String(result);
result.split('');
console.log(result.slice(0, 2)); 


