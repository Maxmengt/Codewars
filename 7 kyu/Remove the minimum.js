 	function removeSmallest(numbers) {
  var minIndex = -1;
  for( let i = 0, len = numbers.length; i < len; ++ i ) {
    if( minIndex == -1 ) minIndex = i;
    if( numbers[i] < numbers[minIndex] ) minIndex = i;
  }
  return minIndex == -1 ? numbers : (numbers.splice(minIndex, 1), numbers);
}