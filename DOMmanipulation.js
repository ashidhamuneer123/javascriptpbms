
//alert("hellooooo")

//console.log(color)
//console.log(element)
/*console.info("one")
console.warn("two")
console.error("three")
console.debug("four")*/

function show(){
    const element=document.getElementById("color")
    
    const color=element.value;
    if(color==="red"){
        alert("Danger")
    }else if(color==="yellow"){
        alert("warning")
    }else{
        alert("success")
    }

    element.style.backgroundColor=color;
}


function sum(a,b){
    return a+b;
}
let res=sum(3,5)
console.log(res);