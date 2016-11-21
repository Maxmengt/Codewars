function iqTest(numbers){
  numbers = numbers.split(' ').map(Number);
  var odd = numbers.filter(item => item & 1),
      even = numbers.filter(item => !(item & 1));
  if( odd.length == 1 ) return numbers.indexOf(odd[0]) + 1;
  return numbers.indexOf(even[0]) + 1;
}