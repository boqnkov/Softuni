function wordReading(input) {

    let i = 0;
    let currentElement = input[i];

    while (currentElement !== 'Stop') {

        console.log(currentElement);
        i++
        currentElement = input[i];
    }

}
wordReading(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"]);
