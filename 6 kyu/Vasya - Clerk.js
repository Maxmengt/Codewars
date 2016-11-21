function tickets(peopleInLine){
  var mon = [0, 0, 0],
      flag = true;
  for( let i = 0, len = peopleInLine.length; i < len; ++ i ) {
    let now = peopleInLine[i];
    if( now == 100 ) {
      mon[2]++;
      if( mon[1] && mon[0] ) mon[1]--, mon[0]--;
      else if( mon[0] >= 3 ) mon[0] -= 3;
      else {
        flag = false;
        break;
      }
    }
    else if( now == 50 ) {
      mon[1]++;
      if( mon[0] ) mon[0]--;
      else {
        flag = false;
        break;
      }
    }
    else mon[0]++;
  }
  return flag ? "YES" : "NO";
}