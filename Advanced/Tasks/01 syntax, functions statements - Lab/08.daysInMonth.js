function daysInMonth(month, year) {
    let result = new Date(year, month);
    result.setDate(result.getDate()-1)

    return result.getDate()
}
daysInMonth(2, 2021)