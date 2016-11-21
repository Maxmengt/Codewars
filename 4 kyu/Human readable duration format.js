function formatDuration (seconds) {
  if( !seconds ) return "now";
  var map = ['year', 'day', 'hour', 'minute', 'second'],
      ans = '',
      time = [seconds / (365 * 24 * 60 * 60), 
              seconds / (24 * 60 * 60) % 365, 
              seconds / (60 * 60) % 24, 
              seconds / 60 % 60, 
              seconds % 60].map(Math.floor).forEach(function(item, index) {
                if( !item ) return ;
                if( ans ) ans += ', ';
                ans += item + ' ' + map[index];
                if( item > 1 ) ans += 's';
              }),
      loc = ans.lastIndexOf(',');
    return loc == -1 ? ans : ans.slice(0, loc) + " and" + ans.slice(loc + 1);
}