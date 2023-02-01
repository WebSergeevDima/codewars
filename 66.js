function getNumberFromString(s) {  
  return parseInt(s.split('').map(n => {   
     if(!isNaN(parseInt(n)) && parseInt(n) > -1) {
       return +n;
     }   
  }).join(''));
}