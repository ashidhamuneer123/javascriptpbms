let pattern =""
let count = 1
for(let i=1;i<5;i++)
{
    for(let j=1;j<=i;j++)
    {
        pattern=pattern+" "+count
        count++
    }
  pattern=pattern+"\n"
}
console.log(pattern)