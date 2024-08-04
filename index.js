// const finalValueAfterOperations = (operations) => {
//     return operations.reduce((acc,curr) => {
//         if(curr.includes("--")) --acc
//         else ++acc;
//         return acc
//     }, 0)
// };
// console.log('...',finalValueAfterOperations(["++X","++X","X++"]))

let array = [];
for (var i = 0; i < 20000000; i++) {
  array.push(i);
}

console.time('map');
array.map((num) => {
  return num * 4;
});
console.timeEnd('map');

console.time('forEach');
array.forEach((num, index) => {
  return (array[index] = num * 4);
});
console.timeEnd('forEach');

console.time('for');
for (i = 0; i < array.length; i++) {
  array[i] = array[i] * 2;
}
console.timeEnd('for');
