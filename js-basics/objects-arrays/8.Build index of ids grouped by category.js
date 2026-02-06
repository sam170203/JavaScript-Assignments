// [
//   { id: 1, category: "fruit" },
//   { id: 2, category: "veggie" },
//   { id: 3, category: "fruit" }
// ]

// { fruit: [1,3], veggie: [2] }

ip=[
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]
op={}
for(let item of ip){
    if(!op[item.category]){
        op[item.category]=[]
    }
    op[item.category].push(item.id)
}
console.log(op)