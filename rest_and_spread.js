var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
 let commaSep = val.split(',');
 commaSep.forEach(val => {
 	if(val !== '') args.push(+val);
 });
});

let avg = function(...args) {
	var sum = args.reduce((a,b)=>a+b);
	var average = sum/args.length;
	return average;
};

console.log(avg(...args));