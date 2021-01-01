const { expect } = require("@jest/globals");


const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const reverseString = string => {
  const stringArr = Array.from(string);
  return(stringArr.reduceRight((accumulator, currentValue) => accumulator + currentValue));
}

module.exports = {capitalize, reverseString};