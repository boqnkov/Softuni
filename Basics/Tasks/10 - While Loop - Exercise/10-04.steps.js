function steps(input) {

    let goal = 10000;
    let sumsteps = 0;

    let command = input[0];
    let i = 1;


    while (command !== 'Going home') {
        let currentSteps = Number(command);


        sumsteps += currentSteps
        if (sumsteps >= goal) {
            let diff = Math.abs(sumsteps - goal);
            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
            break;
        }

        command = input[i];
        i++
    }

    if (command === 'Going home') {
        sumsteps += Number(input[i])
        let diff = Math.abs(sumsteps - goal);
        if (sumsteps >= goal) {

            console.log(`Goal reached! Good job!`);
            console.log(`${diff} steps over the goal!`);
        } else {
            console.log(`${diff} more steps to reach goal.`);
        }
    }

}
steps(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])



