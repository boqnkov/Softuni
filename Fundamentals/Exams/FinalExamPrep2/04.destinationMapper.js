function destMapper(input) {
    
    let pattern = /([=\/])(?<dest>[A-Z][A-Za-z]{2,})\1/g

    let matches = pattern.exec(input)
    let destinations = []
    
    while (matches){
        destinations.push(matches.groups.dest)
        matches = pattern.exec(input)
    }

    let points = 0

    for (let destination of destinations){
        points+=destination.length
    }
    
    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}
destMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")