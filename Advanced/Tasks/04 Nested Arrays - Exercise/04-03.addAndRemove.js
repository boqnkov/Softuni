function addAndRemove(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            result.push(i + 1)
        } else {
            result.pop()
        }
    }

    if (result.length > 0) {
        result.forEach(el => console.log(el));
    } else {
        console.log('Empty');
    }

}
// addAndRemove(['add',
//     'add',
//     'add',
//     'add']
// )
addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add']
)