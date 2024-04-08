function previousDay(year, month, day) {
    const givenDay = new Date(year, month - 1, day);

    givenDay.setDate(day - 1)

    const resultYear = givenDay.getFullYear();
    const resultMonth = givenDay.getMonth() + 1;
    const resultDate = givenDay.getDate()

    console.log(`${resultYear}-${resultMonth}-${resultDate}`);
}
previousDay(2016, 9, 30)