ip={ a: 1, b: 5, c: 3 }
bool=true
for(let val of Object.values(ip)){
    if(typeof val!="number"){
        
        bool=false
        break;        
    }
    
}
if(bool){
    console.log(true)
}
else{
    console.log(false)
}