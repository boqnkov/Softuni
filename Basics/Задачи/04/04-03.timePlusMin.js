function timePlusMin(input) {

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let currTime = hours * 60 + minutes;
    let newTime = currTime + 15;

    let newHour = Math.floor(newTime / 60);
    let newMinutes = newTime % 60;
    
    if (newHour === 24) {
        newHour = 0
    }
    
    if (newMinutes < 10) {
        console.log(`${newHour}:0${newMinutes}`);
    } else {

        console.log(`${newHour}:${newMinutes}`);
    }



}
timePlusMin(["23", "49"]);
