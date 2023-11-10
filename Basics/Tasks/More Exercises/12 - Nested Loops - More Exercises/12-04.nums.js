function nums(input) {

    let e1 = Number(input[0]);
    let e2 = Number(input[1]);

    let result = '';
    let print = '';


    for (let n1 = e1; n1 <= e2; n1++) {
        for (let n2 = e1; n2 <= e2; n2++) {
            for (let n3 = e1; n3 <= e2; n3++) {
                for (let n4 = e1; n4 <= e2; n4++) {

                    if (((n1%2===0)&&(n4%2!==0)) || ((n4%2===0)&&(n1%2!==0))) {
                        if (n1>n4){
                            if ((n2+n3)%2===0){
                                result = String(n1)+String(n2)+String(n3)+String(n4)+' '
                                print+=result
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(print);
}
nums(['3', '5'])