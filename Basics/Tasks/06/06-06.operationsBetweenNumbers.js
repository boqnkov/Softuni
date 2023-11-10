function operations(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operation = input[2];

    let result = 0;

    switch (operation) {
        case '+':
            result = n1 + n2;
            break;

        case '-':
            result = n1 - n2;
            break;

        case '*':
            result = n1 * n2;
            break;

        case '/':
            result = n1 / n2;
            break;

        case '%':
            result = n1 % n2;
            break;
    }

    let evenOdd = '';
    if (result % 2 === 0) {
        evenOdd = 'even';
    } else {
        evenOdd = 'odd';
    }


    if (operation === '+' || operation === '-' || operation === '*') {
        console.log(`${n1} ${operation} ${n2} = ${result} - ${evenOdd}`);
    } else if (operation === '/' && n2!=0) {
        console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
    } else if (operation === '%' && n2!=0) {
        console.log(`${n1} % ${n2} = ${result}`);
    } else {
            console.log(`Cannot divide ${n1} by zero`);
    }

}
operations(["10",
"0",
"%"])




