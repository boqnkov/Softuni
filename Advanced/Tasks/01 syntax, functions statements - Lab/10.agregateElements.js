function agregateEls(arr) {
    let sum = 0
    arr.forEach(element => {
        sum+=element
    });
    console.log(sum);

    let inverse = 0;
    arr.forEach((el) => inverse+=1/el)
    console.log(inverse);

    let string = '';
    arr.forEach((el) => string+=el);
    console.log(string);
}
agregateEls([1, 2, 3])