function octalToDecimal(octal) {
  //Write code here
  return parseInt(octal, 8); 
}

function anagram(word, words) {
  //Write code here
  let newArr = []
    for (let i = 0; i < words.length; i++) {
      if (sortString(words[i]) === sortString(word)) {
        newArr.push(words[i])
      }
    }
    return newArr;
}

function sortString(str) {
    return str.split('').sort().join('');
}

function triangle(angle1, angle2, angle3) {
  //Write code here
  if(angle1 + angle2 + angle3 !== 180 || Math.min(angle1,angle2,angle3)=== 0) return 'invalid';
  if(Math.max(angle1, angle2, angle3) > 90) return 'obtuse';
  if(Math.max(angle1, angle2, angle3) < 90) return 'acute';
  return 'right';
}

function fridayThe13ths(year) {
  //Write code here
  let count = 0;
  for (let month = 0; month < 12; month++) {
    let d = new Date(year, month, 13);
    if (d.getDay() === 5) {
      count++;
    }
  }
  return count;

}

module.exports = {
  octalToDecimal,
  anagram,
  triangle,
  fridayThe13ths,
};