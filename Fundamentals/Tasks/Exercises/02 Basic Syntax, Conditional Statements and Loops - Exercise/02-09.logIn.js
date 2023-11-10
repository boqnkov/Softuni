function logIn(input) {
    let user = input[0]
    let pass = ''
    for (let i=user.length - 1; i>=0; i--){
        pass += user[i]
    }
    
    let currAtempt = input[1]
    let index = 2
    let wrongAttempts = 0
    
    while (currAtempt != pass) {
        wrongAttempts++
        if (wrongAttempts === 4){
            console.log(`User ${user} blocked!`);
            return
        }
        console.log('Incorrect password. Try again.');
        currAtempt = input[index]
        index++
        
    }
    console.log(`User ${user} logged in.`);

}
// logIn(['Acer','login','go','let me in','recA'])
// logIn(['momo','omom'])
logIn(['sunny','rainy','cloudy','sunny','not sunny'])