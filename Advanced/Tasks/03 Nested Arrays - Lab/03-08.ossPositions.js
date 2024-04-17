function oddPositions(arr) {
    const result = arr.filter((e, i) => i % 2)
        .map(e => e * 2)
        .reverse()
        .join(' ')
    return result
}
oddPositions([10, 15, 20, 25])