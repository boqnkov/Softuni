function matchFullName(names) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm

    let result = names.match(pattern);

    console.log(result.join(' '));

    
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")