function mathOperations(num1, num2, sym) {
    let result
    switch (sym) {
        case '+':
            result = num1 + num2
            break;

        case '-':
            result = num1 - num2
            break;

        case '*':
            result = num1 * num2
            break;

        case '/':
            result = num1 / num2
            break;

        case '%':
            result = num1 % num2
            break;

        case '**':
            result = num1 ** num2
            break;
        default:
            break;
    }
    console.log(result);

}
mathOperations(5, 6, '+')