const arr = [1, 2, 3, 4];
console.log("origne " + arr);

for (let index = 0; index < arr.length; index++) {
  // const element = array[index];
  //   let newArry = [...arr];
  //   console.log("new array befor " + newArry);
  //   newArry.splice(1, index);
  //   console.log("newArray after : " + newArry);
  //   let product = newArry.reduce((total, value) => total * value, 1);
  //   console.log(product);
  //   newArry = [...arr];
  //   console.log("new array befor " + newArry);
  //   newArry.splice(1, index);
  //   console.log("newArray after : " + newArry);
  //   product;
  //   console.log(product);
  // let removedElement = arr.splice(0, 1)[0];
  // console.log(arr);
  // arr.splice(0, 1, removedElement);
  // console.log("new " +arr);
  //======================================================================================
  let removedElement = arr.splice(index, 1)[0];
  let product = arr.reduce((total, value) => total * value, 1);
  console.log(product);
  console.log(arr);
  arr.unshift(removedElement);
}
