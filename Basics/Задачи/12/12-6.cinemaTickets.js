function cinemaTickets(input) {
 
    let command = input[0];
    let i = 1

        let studentTickets = 0
        let standardTickets = 0
        let kidTickets = 0

    while (command !== 'Finish') {
        let movieName = command;
        
        let availablePlaces = Number(input[i]);
        i++
        let command1 = input[i];
        i++
        let placesTaken = 0
        while (command1 !== 'End'){
           
            let ticketType = command1
           placesTaken++
           
            if (ticketType === 'student') {
                studentTickets++
            } else if (ticketType === 'standard') {
                standardTickets++
            } else { 
                kidTickets++
            }

            if (placesTaken === availablePlaces) {
                break;
            }

            command1 = input[i];
            i++


        }
        
        let percentHall = placesTaken/availablePlaces*100
        console.log(`${movieName} - ${percentHall.toFixed(2)}% full.`);

        
        command = input[i];
        i++

    }
    let totalTickets = studentTickets+standardTickets+kidTickets
    let percentStudent = studentTickets/totalTickets*100
    let percentStandart = standardTickets/totalTickets*100
    let percentKid = kidTickets/totalTickets*100

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${percentStudent.toFixed(2)}% student tickets.`);
    console.log(`${percentStandart.toFixed(2)}% standard tickets.`);
    console.log(`${percentKid.toFixed(2)}% kids tickets.`);
    


}
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])
