function dayOfWeek(num) {

    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]

    result = days[num - 1]
    if (result != undefined) {
        console.log(result);
    } else {
        console.log('Invalid day!');
    }

}
dayOfWeek(5)