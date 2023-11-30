function equalArrays(input1, input2) {

    let sum = 0;

    for (let i = 0; i < input1.length; i++) {
        if (input1[i] == input2[i]) {
            sum += Number(input1[i])
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return
        }
    }

    console.log(`Arrays are identical. Sum: ${sum}`);

}
equalArrays
    (['10', '200', '30'],
        ['10', '20', '30'])