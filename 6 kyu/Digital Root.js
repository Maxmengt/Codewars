function digital_root(n) {
  var s = String(n);
  return s.length == 1 ? n : digital_root(s.split('').reduce((pre, cur) => +pre + +cur));
}