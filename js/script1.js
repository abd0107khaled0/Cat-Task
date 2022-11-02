
//   function 1
function sum(sum1, sum2) {
    let i, sumAll;
    sumAll = 0;
    for (i = sum1; i <= sum2; i++) {
        sumAll += i
    }
    return sumAll;
}
console.log(sum(1, 3)); // 6
console.log(sum(2, 5)) // 14




//   function 2
function nameString(name) {
    // console.log([...name])
    let nameOfNumber = [...name].reduce((a, i) => { a[i] = a[i] ? a[i] + 1 : 1; return a }, {})
    return nameOfNumber;
}
console.log(nameString("Hello")) // {H: 1, e: 1, l: 2, o: 1}
console.log(nameString("CAT"))  // {C: 1, A: 1, T: 1}
