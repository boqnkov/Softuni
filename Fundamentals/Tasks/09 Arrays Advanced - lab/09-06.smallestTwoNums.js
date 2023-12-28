let smallest = arr => arr
   .sort((a,b) => a-b)
   .slice(0,2)
   .join(' ');


console.log(smallest([30, 15, 50, 5]));