ip={ a: 10, b: 50, c: 20 }

let max=0
let ans=0
for(let key of Object.keys(ip)){
    if(ip[key]>max){
        max=ip[key]
        ans=key
    }
}
console.log(ans)