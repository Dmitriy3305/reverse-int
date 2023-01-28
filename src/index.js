module.exports = function reverse (n) {
  console.log(n);
  let arr = Array.from(String(n), String).reverse();
  for (let num of arr) {
    if (arr[0] == '0') {
        arr.splice(0, 1);
    } else if (num == '-') {
        arr.splice(-1, 1);
    }
  }
  return arr.toString().replace(/[^0-9]/g, '');
}
