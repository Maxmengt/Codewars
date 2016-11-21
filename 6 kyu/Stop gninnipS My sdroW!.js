function spinWords(str){
  return str.split(' ').map(item => item.length < 5 ? item : item.split('').reverse().join('')).join(' ');
}