// I misunderstand the problem initally so that it waste a lot of my time :)
function cal(str) {
  var o = {};
  for( let i = 97; i <= 122; ++ i ) {
    o[String.fromCharCode(i)] = 0;
  }
  str.split('').filter(item => 'a' <= item && item <= 'z' ).forEach(item => o[item]++);
  return o;
}
function mix(s1, s2) {
  var o1 = cal(s1),
      o2 = cal(s2),
      sh = [];
  for( let i = 97; i <= 122; ++ i ) {
    let az = String.fromCharCode(i),
        str = '',
        len = Math.max(o1[az], o2[az]);
    if( len <= 1 ) continue;
    if( o1[az] > o2[az] ) str = '1:';
    else if( o1[az] < o2[az] ) str = '2:';
    else str = '=:';
    for( let j = 0; j < len; ++ j ) str += az;
    sh.push(str);
  }
  return sh.sort((a, b) => b.length - a.length || (a < b ? -1 : 1)).join('/');
}