function aMinerTask(arr) {

    let resources = {};

    for (let i = 0; i < arr.length; i += 2) {
        
        let resource = arr[i];
        let qty = Number(arr[i + 1]);

        if (resource in resources) {
            resources[resource] += qty;

        } else {
            resources[resource] = qty;
        }
    }

    let entries = Object.entries(resources);

    entries.forEach((a) => console.log(`${a[0]} -> ${a[1]}`))

}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]
)