 const max = process.argv[2];
 let FizzBuzz = {
  [Symbol.iterator]() {
    let p=0,
        fizz="Fizz",
        buzz="Buzz",
        fizzbuzz="FizzBuzz";
        return {
            next() {
                p++;
                if ((p%3===0) && (p%5===0)) return { done: false, value: fizzbuzz };
                if (p%3===0) return { done: false, value: fizz };
                if (p%5===0) return { done: false, value: buzz };
                if (p<max) return { done: false, value: p };
                return {done:true};
            }
        }
    }
}

for (var n of FizzBuzz) {
  console.log(n);
}