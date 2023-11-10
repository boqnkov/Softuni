function sumNumbers(input) {
    let maxNum = Number(input[0]);
    let sum = 0;
    let index = 1
    let currentElement = Number(input[index]);


    while (sum < maxNum) {

        currentElement = Number(input[index]);
        sum += currentElement;

        index++
    }
    console.log(sum);

}
sumNumbers(["100",
    "10",
    "20",
    "30",
    "40"])
