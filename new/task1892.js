function infixEvaluation(str) {
    let opstack = []; 
    let valstack = [];
    function applyOperation(val1, val2, operator) {
        switch(operator) {
            case '+': return val1 + val2;
            case '-': return val1 - val2;
            case '*': return val1 * val2;
            case '/': return val1 / val2;
            default: throw new Error("Unsupported operator: " + operator);
        }
    }

    
    for(let cha = 0; cha < str.length; cha++) {
        let ch = str[cha];

        if(!isNaN(Number(ch))) {
            let dig = ch;
            while(cha + 1 < str.length && !isNaN(Number(str[cha + 1]))) {
                dig += str[cha + 1];
                cha++;
            }
            valstack.push(Number(dig));


        }
        else if(opstack.length === 0 || ch === '(' || opstack[opstack.length - 1] === '(') {
            opstack.push(ch);
        }
        else if(ch === ')') {
            while(opstack[opstack.length - 1] !== '(') {
                let val2 = valstack.pop();
                let val1 = valstack.pop();
                let operator = opstack.pop();
                valstack.push(applyOperation(val1, val2, operator));
            }
            opstack.pop();
        } 
        
        else {
            if(ch === '+' || ch === '-') {
                while(opstack.length > 0 && (opstack[opstack.length - 1] === '+' || opstack[opstack.length - 1] === '-' || opstack[opstack.length - 1] === '*' || opstack[opstack.length - 1] === '/')) {
                    let val2 = valstack.pop();
                    let val1 = valstack.pop();
                    let operator = opstack.pop();
                    valstack.push(applyOperation(val1, val2, operator));
                }
                opstack.push(ch);
            } else if(ch === '*' || ch === '/') {
                while(opstack.length > 0 && (opstack[opstack.length - 1] === '*' || opstack[opstack.length - 1] === '/')) {
                    let val2 = valstack.pop();
                    let val1 = valstack.pop();
                    let operator = opstack.pop();
                    valstack.push(applyOperation(val1, val2, operator));
                }
                opstack.push(ch);
            }
        }
    }

    while(opstack.length > 0) {
        let val2 = valstack.pop();
        let val1 = valstack.pop();
        let operator = opstack.pop();
        valstack.push(applyOperation(val1, val2, operator));
    }

    return valstack.pop();
}

console.log(infixEvaluation("1+(2+3)*4-10/2"));