let ip=["apple", "banana", "apple", "orange", "banana", "apple"]

//op={ apple: 3, banana: 2, orange: 1 }

let obj={}

for(let word of ip){
   
    if (obj[word]===undefined){
        obj[word]=1
    }
    else{
        obj[word]+=1
    }
}
console.log(obj)