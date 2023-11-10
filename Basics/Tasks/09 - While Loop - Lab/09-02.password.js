function password(input) {

    let username = input[0];
    let password = input[1];
    let currentPassword = input[2];
    let i = 2;

    while (currentPassword !== password) {
        currentPassword = input[i];
        i++
    }
    console.log(`Welcome ${username}!`)

    // let i = 2;
    // let currentPassword = input[i]

    // if (password === currentPassword) {
    //     console.log(`Welcome ${username}!`)

    // } else {
    //     while (input[i] !== password) {
    //         i++
    //         currentPassword = input[i]
    //         if (password === currentPassword) {
    //             console.log(`Welcome ${username}!`);
    //         }

    //     }
    // }
}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])




