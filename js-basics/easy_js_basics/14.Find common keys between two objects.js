//{ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
//["b","c"]
let arr=[]
obj1={ a: 1, b: 2, c: 3 }
obj2={ b: 4, c: 5, d: 6 }
for(let x in obj1){ 
    
        if(x in obj2){
            arr.push(x)
        }
    }

console.log(arr)