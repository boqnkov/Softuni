function rotateArray(arr) {
    
    let rotations = Number(arr.pop())

    for(let i=0; i<rotations; i++){
        let movedElement = arr.pop()
        arr.unshift(movedElement)
    }

console.log(arr.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut',
'Apple', '15']
)