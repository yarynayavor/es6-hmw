 const max = process.argv[2];
 let FizzBuzz = function*(){
   let p=0,
   fizz="Fizz",
   buzz="Buzz",
   fizzbuzz="FizzBuzz";
   while(p<max) {
    p++;
    var res=p;
    if ((p%3===0) && (p%5===0)) {
        res=fizzbuzz;
    } 
    else if (p%3===0) {
        res=fizz;
    } 
    else if (p%5===0) {
        res=buzz;
    } 
    yield res;
    }
}();

for (var n of FizzBuzz) {
  console.log(n);
}