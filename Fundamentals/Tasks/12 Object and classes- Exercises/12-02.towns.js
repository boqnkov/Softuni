function towns(arr) {
    
    for (let town of arr ){
        let info = town.split(' | ')

        let obj = {town: info[0], latitude: Number(info[1]).toFixed(2), longitude: Number(info[2]).toFixed(2)}

        console.log(obj);
    }

}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)