function furniture(input) {
    
    let pattern = />>(?<name>[A-Z]\w+)<<(?<price>\d+\.*\d+)!(?<qty>\d+)/gm

    let line = input.shift(input);
    let furnitures = [];
    let totalPrice = 0;
    
    while (line != 'Purchase'){
        
        let match = pattern.exec(line);
        
        while(match != null){
            furnitures.push(match.groups['name'])
            totalPrice+= Number(match.groups.price) * Number(match.groups.qty)
            match = pattern.exec(line)
        }

        line = input.shift();
    }

    console.log('Bought furniture:');
    furnitures.forEach(furniture => console.log(furniture))
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase']
)