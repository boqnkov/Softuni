function passvalidator(password) {
    
    let checklengthVar = checkLength(password);
    let checkCharVar = checkChar(password);
    let checkDigitsCountVar = checkDigitsCount(password);


    if (checklengthVar && checkCharVar && checkDigitsCountVar){
        console.log(`Password is valid`);
    }


    function checkLength(password) {
       if (password.length<6 || password.length>10){
        console.log(`Password must be between 6 and 10 characters`);
        return false
       } else {
        return true
       }
       
    }

    function checkChar(password) {
        
        for (let curSym of password){
            let asciiCurSym = curSym.charCodeAt()
            if (!((asciiCurSym>=48 && asciiCurSym<=57) || (asciiCurSym>=65 && asciiCurSym<=90) || (asciiCurSym>=97 && asciiCurSym<=122)) ){
                console.log(`Password must consist only of letters and digits`);
                return false
            }
        }
        return true
    }

    function checkDigitsCount(password) {
        let digitCounter = 0
        for (let curChar of password){
            let code = curChar.charCodeAt()
            if ((code >= 48 && code<=57)){
                digitCounter++
            } 
        }
        
        if (digitCounter<2){
            console.log(`Password must have at least 2 digits`);
            return false
        } else {
            return true
        }
    }
}
passvalidator('logI32n')