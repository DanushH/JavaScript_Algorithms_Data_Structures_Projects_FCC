function palindrome(str) {
  let reverse_string;
  const regEx_pattern = /[^a-z0-9]/g;
  
  //convert to the same case
  str = str.toLowerCase(); 
  
  //remove all non-alphanumeric characters
  str = str.replace(regEx_pattern, "");    
  
  //split string into characters
  //get the reverse characters
  //join characters into a string
  reverse_string = str.split('').reverse().join('');
  
  //return true if palindrome
  return str === reverse_string;
  
}   //end palindrome


console.log(palindrome("eye"));