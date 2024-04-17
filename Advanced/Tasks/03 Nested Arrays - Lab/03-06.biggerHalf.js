function biggerHalf(input) {

    let sorted = input.sort((a, b) => a - b);
    let halfIndex = Math.ceil(input.length / 2);
    let result = sorted.slice(-halfIndex);
    return result

} 
biggerHalf([3, 19, 14, 7, 2, 19, 6])