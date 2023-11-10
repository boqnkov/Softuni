function oldBooks(input) {
  
    let favBook = input[0];
    let i = 1
    let command = input[i];
    let bookChecked = 0;

    while (i<= input.length){

        let currentBook = command;
       
        if (currentBook === favBook){
            console.log(`You checked ${bookChecked} books and found it.`);
            break;
        }
        if (currentBook === 'No More Books'){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${bookChecked} books.`);
        }

        bookChecked+=1
        i++
        command = input[i]


    }

    
    


}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


