const howConstructTab = (target, wordBank) => {
table = Array(target.length+1).fill().map(()=> Array());
table[0]= [[]];
for (let i = 0; i< target.length+1; i++)
    {
        if (table[i].length >0)
        {
            for(let word of wordBank)
            {
                if (target.slice(i, word.length+i) === word)
                {
                    [...table[i+word.length], ...table[i], word];
                //   const newStuff = table[i].map(subArray => [...subArray, word]);
                //   table[i+word.length].push(...newStuff);  
              
                }
            }
        }
    }   

return table[target.length];


};
console.log(howConstructTab('purple',['purp', 'p', 'le', 'ur', 'purpl', 'pur', 'e']));
//console.log(howConstructTab('jkrolling',['j', 'k', 'r', 'o', 'l', 'i', 'n', 'g']));
//console.log(howConstructTab('money', ['art', 'tax', 'taxi', 'mon', 'ney']));