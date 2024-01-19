function convertToJSON(name, lastName, hairColor){

    let object = {
        name: name,
        lastName: lastName,
        hairColor: hairColor
    }

    let objectAsJSON = JSON.stringify(object)

    console.log(objectAsJSON);

}
convertToJSON('George', 'Jones', 'Brown')