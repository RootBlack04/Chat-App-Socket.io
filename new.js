const arr = [1, 2, 3, 4];
let newArray = [];
for (let index = 0; index < arr.length; index++) {
  let removedElement = arr.splice(index, 1)[0];
//   console.log(arr);
let product = arr.reduce((total, value) => total * value, 1);
newArray.push(product);
  arr.unshift(removedElement);
  console.log(newArray);
}
