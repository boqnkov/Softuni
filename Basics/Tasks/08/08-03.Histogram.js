function histogram(input) {
 
    let n = Number(input[0]);

    let numbersCountp1=0;
    let numbersCountp2=0;
    let numbersCountp3=0;
    let numbersCountp4=0;
    let numbersCountp5=0;
     

    for (let i=1; i<=n; i++){
        let num = Number(input[i]);

        if (num < 200) {
            numbersCountp1++;
        } else if (num < 400) {
            numbersCountp2++;
        } else if (num <600) {
            numbersCountp3++;
        } else if (num < 800) {
            numbersCountp4++;
        } else {
            numbersCountp5++;
        }
    }

        let p1 = numbersCountp1 / n * 100;
        let p2 = numbersCountp2 / n * 100;
        let p3 = numbersCountp3 / n * 100;
        let p4 = numbersCountp4 / n * 100;
        let p5 = numbersCountp5 / n * 100;

        console.log(`${p1.toFixed(2)}%`);
        console.log(`${p2.toFixed(2)}%`);
        console.log(`${p3.toFixed(2)}%`);
        console.log(`${p4.toFixed(2)}%`);
        console.log(`${p5.toFixed(2)}%`);


}
histogram(["9",
"367", 
"99", 
"200", 
"799",
"999",
"333",
"555",
"111",
"9"])

