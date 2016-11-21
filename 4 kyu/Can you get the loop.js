function loop_size(node){
    var set = new Set(),
        num = 0,
        len = 0;
    while( !set.has(node) ) {
        set.add(node)
        node = node.next;
        num++;
    }
    for( key of set.keys() ) {
        if( key == node ) break;
        len ++;
    }
    return num - len;
}