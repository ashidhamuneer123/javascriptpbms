let read = require('readline-sync');
let AnnInc = read.questionFloat("Enter the Annual Income:")
if(AnnInc <= 2_50_000)
console.log("NO TAX")
else if(AnnInc >2_50_000 && AnnInc <= 5_00_000)
{
    tax = (AnnInc * 5)/100
    console.log("INCOME TAX AMOUNT:"+tax)
}

else if(AnnInc >5_00_000 && AnnInc <= 10_00_000)
{
    tax = (AnnInc * 20)/100
    console.log("INCOME TAX AMOUNT:"+tax)
}
else if(AnnInc >10_00_000 && AnnInc <= 50_00_000)
{
    tax = (AnnInc * 30)/100
    console.log("INCOME TAX AMOUNT:"+tax)
}
else
console.log("INVALID ENTRY!!!!")