function arrayRotation(arr, rotations) {

    for (let i = 1; i <= rotations; i++) {

        let el = arr.shift()
        arr.push(el)
    }

    console.log(arr.join(' '));

}
arrayRotation([51, 47, 32, 61, 21], 2)