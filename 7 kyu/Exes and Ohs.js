function XO(str) {
  var x = str.match(/x/gi),
      o = str.match(/o/gi);
  return (x && x.length) == (o && o.length);
}