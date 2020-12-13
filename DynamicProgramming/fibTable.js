const fib = (n) =>{
    const ftable = Array(n+1).fill(0);
    
    ftable[1] = 1;
    for (let i = 0; i< ftable.length-1; i++)
    {
        ftable[i+1]+=ftable[i];
        if (i< ftable.length-2)
        {
            
            ftable[i+2]+=ftable[i];
        }
        
      
    }
    return ftable[n];
}
console.log(fib(6));
console.log(fib(2));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));