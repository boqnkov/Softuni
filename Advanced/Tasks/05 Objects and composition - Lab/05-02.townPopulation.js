function townPopulation(input) {
    let registry = {};

    for (let town of input){
        let tokens = town.split(' <-> ');
        let name = tokens[0];
        let population = Number(tokens[1]);

        if (!(name in registry)){
            registry[name] = population
            continue
        }

        registry[name]+=population
    }

    for (let town in registry){
        console.log(town, ':', registry[town]);
    }
}
townPopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)