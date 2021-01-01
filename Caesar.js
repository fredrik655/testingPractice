

const caesar = (string, shift) => {
  let stringArr = Array.from(string);
  stringArr = stringArr.map(value => {
    if(value.charCodeAt(0) !== 32 && value.charCodeAt(0) !== 46) {
      if(checkIfLoweCase(value.charCodeAt(0))){
        const charValue = value.charCodeAt(0) + shift;
        if(charValue < 97){
          const remainder = 97 - charValue;
          return String.fromCharCode(123 - remainder);
        }
        else if( charValue > 122) {
          const remainder =  charValue - 122;
          return String.fromCharCode(96 + remainder);
        }
        else {
          return String.fromCharCode(value.charCodeAt(0) + shift);
        }
      }
      else {
        const charValue = value.charCodeAt(0) + shift;
        if(charValue < 65){
          const remainder = 65 - charValue;
          return String.fromCharCode(91 - remainder);
        }
        else if( charValue > 90) {
          const remainder =  charValue - 90;
          return String.fromCharCode(64 + remainder);
        }
        else {
          return String.fromCharCode(value.charCodeAt(0) + shift);
        }
      }
    }
    else {
      return String.fromCharCode(value.charCodeAt(0));
    }
  });
  return stringArr.reduce((a, value) => {
    return a + value;
  });
}

const checkIfLoweCase = (char) => {
  if(char < 123 && char > 96){
    return true;
  }
  else {
    return false;
  }
}

module.exports = caesar;