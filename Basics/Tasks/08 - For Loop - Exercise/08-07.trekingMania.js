function trekingMania(input) {

    let groupCount = Number(input[0]);


    let musalaGroup = 0;
    let monBlanGroup = 0;
    let kilimandjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;

    for (let i = 1; i < input.length; i++) {

        let peopleInCurrentGroup = Number(input[i]);

        if (peopleInCurrentGroup <= 5) { musalaGroup += peopleInCurrentGroup; }
        else if (peopleInCurrentGroup <= 12) { monBlanGroup += peopleInCurrentGroup; }
        else if (peopleInCurrentGroup <= 25) { kilimandjaroGroup += peopleInCurrentGroup; }
        else if (peopleInCurrentGroup <= 40) { k2Group += peopleInCurrentGroup; }
        else if (peopleInCurrentGroup >= 41) { everestGroup += peopleInCurrentGroup; }

    }
    let totalPeopleCount = musalaGroup + monBlanGroup + kilimandjaroGroup + k2Group + everestGroup;

    let p1 = musalaGroup / totalPeopleCount * 100;
    let p2 = monBlanGroup / totalPeopleCount * 100;
    let p3 = kilimandjaroGroup / totalPeopleCount * 100;
    let p4 = k2Group / totalPeopleCount * 100;
    let p5 = everestGroup / totalPeopleCount * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);


}
trekingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])

