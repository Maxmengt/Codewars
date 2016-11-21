// I can't understand this.
function nbYear(p0, percent, aug, p) {
  if( !percent ) return (p - p0) / aug;
  percent /= 100;
  return Math.ceil(Math.log((aug + p * percent) / (aug + p0 * percent)) / Math.log(1 + percent));
}
// My solution:
function nbYear(p0, percent, aug, p) {
    var cnt = 0;
    while( p0 < p ) {
      p0 = p0 * (1 + percent / 100) + aug;
      cnt++;
    }
    return cnt;
}