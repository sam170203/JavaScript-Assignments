//ip=[
//   { user: "A", amount: 100 },
//   { user: "B", amount: 200 },
//   { user: "A", amount: 50 }
// 
// op={ A: 150, B: 200 }

ip=[
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }]
op={}
for(let item of ip){
    
    if(op[item.user]){
    op[item.user]+=item.amount
    }
    else{
        op[item.user]=item.amount
    }
}
console.log(op)



