ip=[
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]

//op={ Delhi: ["A", "C"], Mumbai: ["B"] }

let obj={}

for(let person of ip){
    let city=person.city;
    let name=person.name
    if(obj[city]===undefined){
        obj[city]=[];
    }

    obj[city].push(name)
}
console.log(obj)