
let ip = { a: 3, b: 1, c: 2 };


result=(Object.entries(ip)).sort((x,y)=> x[1]-y[1])
console.log(result)