function phoneBook(arr) {

    let assocArr = {}

    for (let data of arr) {
        let curArr = data.split(' ')
        let [name, phone] = curArr
        assocArr[name] = phone;

    }

    for (let key in assocArr) {
        console.log(`${key} -> ${assocArr[key]}`);
    }

}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])