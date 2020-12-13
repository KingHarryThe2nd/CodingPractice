const canConstructTab =(target, wordBank)=>{
table = Array(target.length+1).fill(false);
table[0] = true;
for (let i = 0; i <=target.length; i++)
{
    if (table[i])
    {
        for (let word of wordBank)
        {
            if (target.slice(i,i+word.length)===word)
            {
                table[i+word.length] = true;
            }
        }

    }

}
return table[target.length];

};
console.log(canConstructTab('purple',['purp', 'p', 'le', 'ur', 'purpl']));
console.log(canConstructTab('jkrolling',['j', 'k', 'r', 'o', 'l', 'i', 'n', 'g']));
console.log(canConstructTab('money', ['art', 'tax', 'taxi', 'mon', 'ney']));