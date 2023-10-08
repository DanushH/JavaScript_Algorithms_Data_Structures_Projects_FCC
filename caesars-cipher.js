function rot13(str) {
  let string_array = str.split("");
  let decoded_string;
  let character_unicode;
    
  //loop through the characters array
  for (let i = 0; i < string_array.length; i++) {
    character_unicode = string_array[i].charCodeAt(0);

    //+13 for values of 65(A) to 77(M)
    //-13 for values of 78(N) to 90(Z)
    if (character_unicode >= 65 && character_unicode <= 77) {
      character_unicode += 13;
    } else if (character_unicode >= 78 && character_unicode <= 90) {
      character_unicode -= 13;
    }
        
    //replace characters
    string_array[i] =  String.fromCharCode(character_unicode);
     
  }    //for

  //convert decoded array to a string
  decoded_string = string_array.join("");
  return decoded_string;
    
}   //end rot13

console.log(rot13("SERR PBQR PNZC"));
