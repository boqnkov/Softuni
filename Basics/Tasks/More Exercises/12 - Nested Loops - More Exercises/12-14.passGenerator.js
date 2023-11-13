function passGenerator(input) {

    let n = Number(input[0]);
    let L = Number(input[1]);

    let result = '';
    let print = '';
    for (let s1 = 1; s1 <= n; s1++) {
        for (let s2 = 1; s2 <= n; s2++) {
            for (let s3 = 'a'.charCodeAt(0); s3 < ('a'.charCodeAt(0)) + L; s3++) {
                for (let s4 = 'a'.charCodeAt(0); s4 < ('a'.charCodeAt(0)) + L; s4++) {
                    for (let s5 = 1; s5 <= n; s5++) {

                        if (s5 <= s1 || s5 <= s2) {
                            continue
                        }
                        result = `${s1}${s2}${String.fromCharCode(s3)}${String.fromCharCode(s4)}${s5} `
                        print += result

                    }
                }
            }

        }
    }
    console.log(print);
}
passGenerator(['4',
    '2'
])