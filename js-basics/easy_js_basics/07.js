ip={ a: 20, b: 60, c: 40, d: 90 }

//op={ b: 60, d: 90 }

let obj={}

for (let key of Object.keys(ip)){
    
    if(ip[key]>50){

        obj[key]=ip[key]
    }
}
console.log(obj)