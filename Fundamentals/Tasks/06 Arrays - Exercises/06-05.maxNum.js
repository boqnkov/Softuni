function maxNum(arr) {
    let newArr=[]
    for(let i=0; i<arr.length; i++){
        let num=arr[i]
        let isTop = true
        for(let j=i+1; j<arr.length; j++){
            if (num<arr[j]){
                isTop=false
                break
            }

        }
        if (isTop){
            newArr.push(num)
        }
    }
    console.log(newArr.join(' '));



}
maxNum([14, 24, 3, 19, 15, 17])