obj={ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }


//o/p={ food: 60, travel: 20, bills: 100 }


let result={}

for (let key of Object.keys(obj)){
   
    let sum=0
    for (let num of obj[key]){
        sum+=num
    }
    result[key]=sum
}
console.log(result)