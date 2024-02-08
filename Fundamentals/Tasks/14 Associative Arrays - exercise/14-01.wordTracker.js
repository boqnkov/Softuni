function wordTracker(arr) {

    let occurrences = {};
    let words = arr.shift().split(' ');
    
    for (let word of words){
        occurrences[word] = 0;
    }

    for (let word of arr ){
        if (word in occurrences){
            occurrences[word]+=1
        }
    }

    let entries = Object.entries(occurrences)
    entries.sort((a,b) => b[1] - (a[1]))

    entries.forEach((a) => console.log(`${a[0]} - ${a[1]}`))
    // console.log(entries);





}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])