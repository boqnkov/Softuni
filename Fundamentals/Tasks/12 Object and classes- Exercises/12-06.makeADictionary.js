function dictionary(arr) {
    
    let sortedArr = arr.sort((a,b) => a.localeCompare(b))
    
    let object = {}
    
    for (let curObj of sortedArr){
        let parsedObj = JSON.parse(curObj)
        let term = Object.keys(parsedObj)[0]
        let definition = Object.values(parsedObj)[0]
        object[term] = definition 
    }

    for (let term of Object.keys(object)){
        console.log(`Term: ${term} => Definition: ${object[term]}`);
    }
    
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    ])