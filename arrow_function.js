var inputs = process.argv.slice(2);
var result = inputs.map((val)=>val.charAt(0).toUpperCase())
                   .reduce((a,b)=>a+b);
console.log(result);