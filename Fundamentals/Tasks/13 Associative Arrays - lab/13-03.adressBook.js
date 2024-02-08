function addressBook(arr) {
    
    let addressBook = {}
    
    for (let command of arr) {
        let [name, address] = command.split(':')
        addressBook[name] = address
    }

    let entries = Object.entries(addressBook)
    entries.sort((a, b) => a[0].localeCompare(b[0]))

    for (let [name, address] of entries) {
        console.log(name, '->', address);
    }

}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)