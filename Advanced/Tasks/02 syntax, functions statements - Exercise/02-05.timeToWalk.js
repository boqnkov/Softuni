function timeToWalk(steps, length, speed) {
    let distance = steps * length
    let speedInMS = speed / 3.6

    const brakes = Math.floor(distance/500) * 60
    
    let time = Math.ceil((distance / speedInMS) + brakes)

    const date = new Date(null);
    date.setSeconds(time); // specify value for SECONDS here
    const result = date.toISOString().slice(11, 19);
    console.log(result);
}
timeToWalk(2564, 0.70, 5.5)