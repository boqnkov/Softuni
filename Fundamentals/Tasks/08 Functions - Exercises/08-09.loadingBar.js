function loadingBar(num) {

    let percent = `${num}%`
    let forPrint = loading(num)

    if (percent == 100) {
        console.log(`100% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    } else {
        console.log(`${percent} [${forPrint}]`);
        console.log(`Still loading...`);
    }

    function loading(bar) {
        let result = []
        for (let i = 1; i <= 10; i++) {
            if (i <= bar / 10) {
                result.push('%')
            } else {
                result.push('.')
            }
        }
        result = result.join('')
        return result
    }
}
loadingBar(60)