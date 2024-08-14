function toCalculate(operation, ...numbers) {
    function helper(op, num1, num2) {
        switch(op) {
            case 'ADD':
                return num1 + num2;
            case 'SUB':
                return num1 - num2;
            case 'MUL':
                return num1 * num2;
            case 'MOD':
                return num1 % num2;
            case 'DIV':
                if (num2 === 0) throw new Error('Division by zero is not allowed.');
                return num1 / num2;
            default:
                throw new Error('Invalid operation. Only "ADD", "SUB" ,"MOD" ,"MUL", or "DIV" are allowed.');
        }
    }
    if (numbers.length < 2) {
        throw new Error('At least two numbers are required.');
    }

    return numbers.reduce((acc, curr) => helper(operation, acc, curr));
}

console.log(toCalculate('ADD', 23,43)); 
console.log(toCalculate('SUB', 1, 2, 3, 4)); 
console.log(toCalculate('MOD', 10, 5, 2));   
console.log(toCalculate('MUL', 2, 3, 4));   
console.log(toCalculate('DIV', 100, 2, 5)); 
