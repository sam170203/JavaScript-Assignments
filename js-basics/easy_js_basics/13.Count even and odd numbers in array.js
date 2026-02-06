ip=[1,2,3,4,5,6]

let evens=0
let odds=0
for(let x of ip){
    if(x%2==0){
        evens+=1
    }
    else{
        odds+=1
    }
    
}
console.log({evens,odds})