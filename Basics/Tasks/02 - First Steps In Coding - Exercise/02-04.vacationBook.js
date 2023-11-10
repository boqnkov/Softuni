function vacationBook(input) {

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let allHours = pages / pagesPerHour;

    let hoursPerDay = allHours / days;

    console.log(hoursPerDay);

}
vacationBook(["212", "20", "2"]);