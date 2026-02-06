// ip=[
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" }
// ]

// op=[
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ]

ip=[
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]

const seen=new Set();
const op=[]

for(let item of ip){
    if(!seen.has(item.id)){
        seen.add(item.id)
        op.push(item)
    }
}
console.log(op)