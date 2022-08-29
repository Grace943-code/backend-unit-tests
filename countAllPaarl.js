export default function allPaarl(regNumbers) {
  let count = [];
  var myRegNumber = regNumbers.split(',');
  console.log(regNumbers.split(','));
  for (var i = 0; i < myRegNumber.length; i++) {
    const rg = myRegNumber[i].trim();
    if (rg.startsWith("CJ")) {
      count.push(rg);
    }
  }
  return count;
}