ip={ x: [1,2,1,2,3,3], y: [2,3,4], z: [4,5] }

//op=[1,2,3,4,5]


res=[]
for(let arr of Object.values(ip)){
    for(let num of arr){
        if(!res.includes(num)){
            res.push(num)
        }
    }
}
console.log(res)