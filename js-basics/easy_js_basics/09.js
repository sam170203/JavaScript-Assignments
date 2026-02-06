let ip = { 
  A: [80, 90], 
  B: [70, 75, 85] 
};

let max = 0;
let maxkey = "";

for (let key of Object.keys(ip)) {
    let sum = 0;

    for (let num of ip[key]) {
        sum += num;
    }

    let avg = sum / ip[key].length;

    if (avg > max) {
        max = avg;
        maxkey = key;
    }
}

console.log(maxkey);
