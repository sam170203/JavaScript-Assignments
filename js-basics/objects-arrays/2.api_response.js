// [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ]

// { 1: "Alice", 2: "Bob" }
const ip = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const op = {};

for (let item of ip) {
  op[item.id] = item.name;
}

console.log(op);
