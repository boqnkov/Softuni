function worldTour(input) {
    let stops = input.shift();

    let command = input.shift();

    while (command != 'Travel') {
        let tokens = command.split(':');
        let curCommand = tokens[0];

        if (curCommand == 'Add Stop') {
            let index = Number(tokens[1]);
            let string = tokens[2];
            if (index >= 0 && index < stops.length) {
                stops = stops.slice(0, index) + string + stops.slice(index)
            }

        } else if (curCommand == 'Remove Stop') {
            let startIdx = Number(tokens[1]);
            let endIdx = Number(tokens[2]);
            if (startIdx >= 0 && endIdx < stops.length) {
                stops = stops.slice(0, startIdx) + stops.slice(endIdx + 1)
            }

        } else if (curCommand == 'Switch') {
            let oldString = tokens[1];
            let newString = tokens[2];
            if (stops.includes(oldString)) {
                stops = stops.replace(oldString, newString)
            }

        }
        console.log(stops);
        command = input.shift()
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)