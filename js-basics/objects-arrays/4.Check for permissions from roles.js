//roles={ admin:["read","write"], user:["read"], staff: ["write"]}
// checkRole="user",
// action="write"
//false

roles={admin:["read","write"],user:["read"],staff:["write"]}
checkRole="user"
action="read"
console.log(roles[checkRole].includes(action));
