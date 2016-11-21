function calc(expr) {
  var stack = [];
  expr.split(' ').forEach(function(item) {
    if( item == '+' || item == '-' || item == '*' || item == '/' ) {
      let b = stack.pop(),
          a = stack.pop();
      if( item == '+' ) stack.push(a + b);
      else if( item == '-' ) stack.push(a - b);
      else if( item == '*' ) stack.push(a * b);
      else stack.push(a / b);
    }
    else stack.push(Number(item));
  });
  return stack.pop() || 0;
}