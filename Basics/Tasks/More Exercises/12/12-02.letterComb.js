function letterComb(input) {

    let e1 = input[0];
    let e2 = input[1];
    let e3 = input[2];
    
   let result = ''
    let counter = 0
    for (let a = e1.charCodeAt(0); a <= e2.charCodeAt(0);a++){
        for ( let b = e1.charCodeAt(0); b <= e2.charCodeAt(0); b++ ){
            for ( let c = e1.charCodeAt(0); c <= e2.charCodeAt(0);c++){

                let a1 = String.fromCharCode(a)
                let b1 = String.fromCharCode(b)
                let c1 = String.fromCharCode(c)

                if (a1 === e3 || b1=== e3 || c1 === e3){
                    continue
                } else {
                    counter++
                    result += a1+b1+c1+' '
                    
                }
            }
        }
    }
    console.log(`${result}${counter}`);
}
letterComb(['a','c','b'])