function latinLetters(n) {

    let a = '';
    let b = '';
    let c = '';
    let result = ''
    for (let s1 = 97; s1 < 97 + Number(n); s1++) {
        for (let s2 = 97; s2 < 97 + Number(n); s2++) {
            for (let s3 = 97; s3 < 97 + Number(n); s3++) {
                a = String.fromCharCode(s1)
                b = String.fromCharCode(s2)
                c = String.fromCharCode(s3)

                console.log(`${a}${b}${c}`);
            }
        }
    }
}
latinLetters('3')