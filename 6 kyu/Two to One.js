function longest(s1, s2) {
  var s = '',
      a = 'a'.charCodeAt(),
      z = 'z'.charCodeAt();
  for( let i = a; i <= z; ++ i ) {
    if( ~s1.indexOf(String.fromCharCode(i)) || ~s2.indexOf(String.fromCharCode(i)) ) {
      s += String.fromCharCode(i);
    }
  }
  return s;
}