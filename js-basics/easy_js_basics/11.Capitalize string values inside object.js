ip={ name: "alice", city: "delhi" }

for(let key in ip){
    ip[key]=ip[key][0].toUpperCase()+ip[key].slice(1)

}
console.log(ip)