function toCalculate(a,b,operations){
    switch(operations){
        case 'add':
            return a+b;
        case 'sub':
            const res= a-b;
            if(res<0){
               throw new Error('res is less than 0')
            }
            return res;
        case 'mul':
            return a*b;
        case 'div':
            if (b === 0) throw new Error('Division by zero is not allowed.');
            return a/b;
        default:
            throw new Error('Invalid operation. Only "ADD", "SUB" ,"MOD" ,"MUL", or "DIV" are allowed.');
    }
}
console.log(toCalculate(1,2,'sub'))