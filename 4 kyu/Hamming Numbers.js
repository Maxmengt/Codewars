function hamming(n) {
    var arr = [1],
        i2 = 0,
        i3 = 0,
        i5 = 0;
    for( let i = 1; i < n; ++ i ) {
        var now = Math.min(2 * arr[i2], 3 * arr[i3], 5 * arr[i5]);
        arr.push(now);
        if( now == 2 * arr[i2] ) ++ i2;
        if( now == 3 * arr[i3] ) ++ i3;
        if( now == 5 * arr[i5] ) ++ i5;
    }
    return arr[n - 1];
}
/*  My trick solution:
    function fast_pow(x, n) {
        var res = 1;
        while( n ) {
            if( n & 1 ) res *= x;
            x *= x;
            n >>= 1;
        }
        return res;
    }
    var arr = (function() {
        var array = [];
        for( let i = 0; i < 40; ++ i ) {
            for( let j = 0; j < 40; ++ j ) {
                for( let k = 0; k < 40; ++ k ) {
                    array.push(fast_pow(2, i) * fast_pow(3, j) * fast_pow(5, k));
                }
            }
        } 
        return array.sort((a, b) => a - b);
    })();
    function hamming(n) {
        return arr[n - 1];
    }
*/