function sumOfOddNums(num) {
    let i=1
    let result = 0
    let counter = 1
    while(counter<=num){
        console.log(i);
        counter++
        result+=i
        i+=2
    }
    console.log(`Sum: ${result}`);
}
sumOfOddNums(5)