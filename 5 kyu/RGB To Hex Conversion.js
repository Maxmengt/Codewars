function rgb(r, g, b){
  return [r, g, b].map(item => Math.min(255, Math.max(0, item)).toString(16).toUpperCase()).map(item => item.length == 1 ? '0' + item : item).join('');
}