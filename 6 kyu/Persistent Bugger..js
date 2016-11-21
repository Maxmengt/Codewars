function persistence(num) {
  var now = num,
      cnt = 0;
  while( parseInt(now / 10) ) {
    now = 1;
    while( parseInt(num) ) {
      now *= num % 10;
      num = parseInt(num / 10);
    }
    num = now;
    cnt++;
  }
  return cnt;
}