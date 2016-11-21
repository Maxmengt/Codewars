function humanReadable(seconds) {
  var s = parseInt(seconds / 3600) + ':' + parseInt(seconds % 3600 / 60) + ':' + parseInt(seconds % 60);
  return s.split(':').map(item => item.length > 1 ? item : '0' + item).join(':');
}