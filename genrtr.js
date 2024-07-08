function* generatorfn(){
    let num=5;
    while(true){
        
        yield num;
        num+=5;
    }
}
const gen=generatorfn()

for(let i=0;i<10;i++){
    console.log(gen.next());
}




