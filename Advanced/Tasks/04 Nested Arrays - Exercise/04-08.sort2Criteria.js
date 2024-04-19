function sort2Criteria(arr) {
    
    let sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    sorted.forEach(element => {
        console.log(element);
    });
}
sort2Criteria(['alpha',
    'beta',
    'gamma']
)