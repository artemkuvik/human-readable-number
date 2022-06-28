module.exports = function toReadable (number) {
    let a =  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let b = ['ten', 'eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    let c = ['ten', 'ten', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety']
    let numberOst = number % 10;
    let numberWithoutOSt = number - numberOst;
    let hnumberOst = number % 100;
    let hnumberWithoutOSt = number - hnumberOst;
    let s = hnumberOst - numberOst;
   let numberStr = String(number);
    
    
  if (number < 10) 
  return a[number];
  
  if (9 < number && number < 20)
   return b[number-10];
  
  if (number > 19 && number < 100 && numberStr[numberStr.length - 1] === '0') 
  return c[number / 10];
  
  if (number > 19 && number < 100 && numberStr[numberStr.length - 1] !== '0') 
  return `${c[numberWithoutOSt / 10]} ${a[number - numberWithoutOSt]}`;
  
  if (number >= 100 && number < 1000 && numberStr[numberStr.length - 1] === '0' && numberStr[numberStr.length - 2] === '0') 
  return `${a[hnumberWithoutOSt / 100]} hundred`;

  if (number >= 100 && number < 1000 && numberStr[numberStr.length - 1] !== '0' && numberStr[numberStr.length - 2] === '1') 
  return `${a[hnumberWithoutOSt / 100]} hundred ${b[hnumberOst - 10]}`;
  
  if (number >= 100 && number < 1000 && numberStr[numberStr.length - 1] !== '0' && numberStr[numberStr.length - 2] !== '0') 
  return `${a[hnumberWithoutOSt / 100]} hundred ${c[s / 10]} ${a[numberOst]}`;
  
  if (number >= 100 && number < 1000 && numberStr[numberStr.length - 1] !== '0' && numberStr[numberStr.length - 2] === '0') 
  return `${a[hnumberWithoutOSt / 100]} hundred ${a[numberOst]}`;/////nnn
  
  if (number >= 100 && number < 1000 && numberStr[numberStr.length - 1] === '0' && numberStr[numberStr.length - 2] !== '0') 
  return `${a[hnumberWithoutOSt / 100]} hundred ${c[s / 10]}`;
  
}

