function longestSlideDown(pyramid) {
    for( let i = pyramid.length - 2; i >= 0; -- i ) {
        for( let j = 0, len = pyramid[i].length; j < len; ++ j ) {
            pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
        }
    }
    return pyramid[0][0];
}