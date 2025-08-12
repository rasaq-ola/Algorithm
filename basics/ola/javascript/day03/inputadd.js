const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Input your first number: ', function(num1){
    r1.question('Input your second number: ', function(num2){
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        
        const sum = num1 + num2;
        console.log('The addition of your numbers is ', sum);
        r1.close();
    });
});