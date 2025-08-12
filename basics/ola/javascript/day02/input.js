const readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

r1.question('What is your name? ', function(name){
	console.log(`Hello, ${name}! Nice to meet you.`);
	r1.close();
});
