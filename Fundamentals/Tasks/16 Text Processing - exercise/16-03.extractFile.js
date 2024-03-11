function extractFile(input) {
    
    let arr = input.split('\\');
    let file = arr.pop();
    let index = file.lastIndexOf('.');
    let fileExt = file.substring(index+1);
    let fileName = file.substring(0, index);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')