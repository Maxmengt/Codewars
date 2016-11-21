function snail(array){
	var used = [true],
		n = array.length,
		T = n * n,
		arr = [],
		x = 0,
		y = 0,
		step = 0;
	while( T-- ) {
		arr.push(array[x][y]);
		switch( step ) {
			case 0: 
				if( y + 1 < n && !used[x * n + y + 1] ) ++ y;
				else ++ step, ++ x;
				used[x * n + y] = true
				break;
			case 1:
				if( x + 1 < n && !used[(x + 1) * n + y] ) ++ x;
				else ++ step, -- y;
				used[x * n + y] = true;
				break;
			case 2:
				if( 0 <= y - 1 && !used[x * n + y - 1] ) -- y;
				else ++ step, -- x;
				used[x * n + y] = true;
				break;
			case 3:
				if( 0 <= x - 1 && !used[(x - 1) * n + y] ) -- x;
				else step = 0, ++ y;
				used[x * n + y] = true
				break;
		}
	}
	return arr;
}