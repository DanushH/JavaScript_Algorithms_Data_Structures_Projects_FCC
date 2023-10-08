function convertToRoman(num) {
    //initialize a map with Roman numerals
    const roman_numerals = new Map([
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1]
    ]);
    let quotient;
    let roman_number = "";
    
    //loop through the map
    roman_numerals.forEach (function(value, key) {
        quotient = Math.floor(num / value);
        
        for (let i = 0; i < quotient; i++){
            roman_number += key;
        }
        
        num = num % value;
    })  //forEach

    return roman_number;
  
}   //end function
 
console.log(convertToRoman(36));