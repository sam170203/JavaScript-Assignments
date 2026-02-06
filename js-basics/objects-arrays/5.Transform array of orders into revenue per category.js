//[
//   { id: 1, category: "electronics", price: 100 },
//   { id: 2, category: "clothes", price: 50 },
//   { id: 3, category: "electronics", price: 200 }
// ]

// op { electronics: 300, clothes: 50 }

ip=[
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]
op={}
for(let item of ip){
    if(op[item.category]){

        op[item.category]+=item.price
    }
    else{
        op[item.category]=item.price
    }
}
console.log(op)