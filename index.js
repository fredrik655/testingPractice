const { expect } = require("@jest/globals");


const capitalize = (string) => {
  

  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

module.exports = capitalize;