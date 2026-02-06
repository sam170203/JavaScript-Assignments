obj={ name: "Alice", age: 25 }

//op="name=Alice&age=25"

const op=Object.entries(obj)
    .map(([key,value])=>`${key}=${value}`)
    .join("&");
console.log(op)