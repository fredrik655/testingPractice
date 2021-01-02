
const analyze = (arr) => {
  return ({
    average: calculateAverage(arr),
    min: findMinValue(arr),
    max: findMaxValue(arr),
    length: arr.length
  })
};

const findMaxValue = arr => {
  let max = arr[0];
  arr.forEach(element => {
    if(element > max){
      max = element;
    }
  });
  return max;
};

const findMinValue = arr => {
  let min = arr[0];
  arr.forEach(element => {
    if(element < min){
      min = element;
    }
  });
  return min;
};

const calculateAverage = arr => {
  const sum = arr.reduce((a, v) => {
    return a + v;
  })
  return (sum / arr.length);
};

module.exports = analyze;