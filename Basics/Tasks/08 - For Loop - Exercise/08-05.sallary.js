function sallary(input) {

    let tabs = Number(input[0]);
    let sallary = Number(input[1]);


    for (let i = 2; i < input.length; i++) {

        if (input[i] === 'Facebook') {
            sallary -= 150;
        } else if (input[i] === 'Instagram') {
            sallary -= 100;
        } else if (input[i] === 'Reddit') {
            sallary -= 50;
        }
        if (sallary <= 0) {
            console.log(`You have lost your salary.`);
            break;
        }

    }

    if (sallary > 0) {
        console.log(sallary);
    }

}
sallary(["3",
    "500",
    "Github.com",
    "Stackoverflow.com",
    "softuni.bg"])

