ip={ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }

//op=["apple", "banana", "carrot", "pea"]
res=[]

for(let arr of Object.values(ip)){
    for(let item of arr){
        res.push(item)
    }
}
console.log(res)