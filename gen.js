//const genFunc=function * (){}.constructor

const genFun=function * (){}.constructor

const fun=new genFun(`
    yield "a";
    yield "b";
    yield "c";
`)

let str='';

for(const val of fun()){
    str=str+val
}
console.log(str)
