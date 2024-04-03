function strLength(arg1,arg2, arg3) {
    let sum = arg1.length + arg2.length + arg3.length
    let avg = Math.floor(sum/3);
    console.log(sum);
    console.log(avg);
}
strLength('chocolate', 'ice cream', 'cake')