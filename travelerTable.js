const gridtravelerTab=(n, m) => {
    const table = Array(n+1).fill().map(()=>Array(m+1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i<=n; i++)
    {
        for (let j = 0; j<=m; j++ )
        {
            if(j<m)table[i][j+1] += table[i][j];
            if(i<n)table[i+1][j] += table[i][j];

        }
    }
    return table[n][m];
}

console.log(gridtravelerTab(10,10));
console.log(gridtravelerTab(18,18));
console.log(gridtravelerTab(1,1));
console.log(gridtravelerTab(2,3));