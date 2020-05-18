export function separateIt(arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    let sliced = arr.slice(i, i + size);
    newArr.push(sliced);
  }
  return newArr;
}

