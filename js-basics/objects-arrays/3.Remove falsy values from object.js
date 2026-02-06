//{ a: 0, b: null, c: "hello", d: undefined, e: 5 }
//{ c: "hello", e: 5 }

ip={ a: 0, b: null, c: "hello", d: undefined, e: 5 }

for(let item in ip){
    if (ip[item]==null || ip[item]==undefined){
        delete ip[item]
    }
}
console.log(ip)



//-------------------------------------------------------------------


