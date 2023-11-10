function examOnTime(input) {

    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivedHour = Number(input[2]);
    let arrivedMinute = Number(input[3]);

    let examTime = examHour * 60 + examMinute;
    let arrivedTime = arrivedHour * 60 + arrivedMinute;

    if (arrivedTime > examTime) {
        console.log('Late');
    } else if (arrivedTime <= examTime && arrivedTime + 30 >= examTime) {
        console.log('On time');
    } else {
        console.log('Early');
    }

    let diff = Math.abs(examTime - arrivedTime);

    if (examTime != arrivedTime) {
        if (arrivedTime < examTime && arrivedTime + 60 > examTime) {
            console.log(`${diff} minutes before the start`);
        } else if (arrivedTime < examTime) {
            let hour = Math.floor(diff / 60);
            let minute = diff % 60;
            if (minute >= 10) {
                console.log(`${hour}:${minute} hours before the start`);
            } else {
                console.log(`${hour}:0${minute} hours before the start`);
            }
        } else if (arrivedTime > examTime && arrivedTime - 60 < examTime) {
            console.log(`${diff} minutes after the start`);
        } else if (arrivedTime > examTime) {
            let hour = Math.floor(diff / 60);
            let minute = diff % 60;
            if (minute >= 10) {
                console.log(`${hour}:${minute} hours after the start`);
            } else {
                console.log(`${hour}:0${minute} hours after the start`);
            }
        }
    }
}
examOnTime(["11",
    "30",
    "12",
    "29"])







