// { a: "apple", b: "banana", c: "kiwi" }

// banana
ip={ a: "apple", b: "banana", c: "kiwi" }
let ans=""

for(let key in ip){
    if(ip[key].length>ans.length){
        ans=ip[key]
    }
}
console.log(ans)