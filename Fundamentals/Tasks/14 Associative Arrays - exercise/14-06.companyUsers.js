function companyUsers(arr) {

    let info = {}

    for (let command of arr) {
        let [company, id] = command.split(' -> ');
        if (!(company in info)) {
            info[company] = [id]
        } else {
            if (!info[company].includes(id)) {
                info[company].push(id)
            }
        }
    }

    let entries = Object.entries(info).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, id] of entries) {
        console.log(company);
        id.forEach(id => console.log(`-- ${id}`));
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)