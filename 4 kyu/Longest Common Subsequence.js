function LCS(x, y) {
    var dp = [],
        re = [];
    for( let i = 0, xLen = x.length; i < xLen; ++ i ) {;
        for( let j = 0, yLen = y.length; j < yLen; ++ j ) {
            if( !i || !j ) {
                if( x[i] == y[j] ) {
                    dp[i * yLen + j] = 1;
                    re[i * yLen + j] = x[i];
                }
                else {
                    dp[i * yLen + j] = 0;
                    re[i * yLen + j] = '';
                }
            }
            else {
                if( x[i] == y[j] ) {
                    dp[i * yLen + j] = dp[(i - 1) * yLen + j - 1] + 1;
                    re[i * yLen + j] = re[(i - 1) * yLen + j - 1] + x[i];
                }
                else {
                    if( dp[(i - 1) * yLen + j] >= dp[i * yLen + j - 1] ) {
                        dp[i * yLen + j] = dp[(i - 1) * yLen + j];
                        re[i * yLen + j] = re[(i - 1) * yLen + j];
                    }
                    else {
                        dp[i * yLen + j] = dp[i * yLen + j - 1];
                        re[i * yLen + j] = re[i * yLen + j - 1];
                    }
                }
            }
        }
    }
    return re[x.length * y.length - 1];
}