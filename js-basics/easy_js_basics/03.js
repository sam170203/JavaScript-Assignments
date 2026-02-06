ip={ a: "x", b: "y", c: "z" }

//op={ x: "a", y: "b", z: "c" }

obj={}

for(let key of Object.keys(ip)){
    
    obj[ip[key]]=key
}
console.log(obj)