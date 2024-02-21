function phoneShop(arr) {

    let phoneList = arr.shift().split(', ')
    let [action, phone] = arr.shift().split(' - ')

    while (action != 'End') {
        switch (action) {
            case 'Add':
                if (!(phoneList.includes(phone))) {
                    phoneList.push(phone)
                }
                break;

            case 'Remove':
                if ((phoneList.includes(phone))) {
                    let removedIndex = phoneList.indexOf(phone)
                    phoneList.splice(removedIndex, 1)
                }
                break;

            case 'Bonus phone':
                let [oldPhone, newPhone] = phone.split(':')
                if (phoneList.includes(oldPhone)) {
                    let index = phoneList.indexOf(oldPhone)
                    phoneList.splice(index+1, 0, newPhone)
                }
                break;

            case 'Last':
                if (phoneList.includes(phone)){
                    let index = phoneList.indexOf(phone);
                    let temp = phoneList.splice(index, 1)
                    phoneList.push(temp[0])
                }
                break;
        }
        [action, phone] = arr.shift().split(' - ')
    }

    console.log(phoneList.join(', '));


}
// phoneShop((["SamsungA50, MotorolaG5, IphoneSE",
//     "Add - Iphone10",
//     "Remove - IphoneSE",
//     "End"])
// )

// phoneShop(["HuaweiP20, XiaomiNote",
// "Remove - Samsung",
// "Bonus phone - XiaomiNote:Iphone5",
// "End"])

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])

