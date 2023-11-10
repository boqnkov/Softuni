function shopping(input) {

    let budget = Number(input[0]);
    let gpucount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuPrice = gpucount * 250;
    let cpuPrice = gpuPrice * 0.35;
    let ramPrice = gpuPrice * 0.1;
    let price = gpuPrice + cpuPrice*cpuCount + ramPrice*ramCount;

    if (gpucount > cpuCount) {
        price *= 0.85
    }

    let diff = Math.abs(price - budget).toFixed(2);

    if (budget >= price) {
        console.log(`You have ${diff} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff} leva more!`);
    }

}

shopping(["920.45",
"3",
"1",
"1"])
