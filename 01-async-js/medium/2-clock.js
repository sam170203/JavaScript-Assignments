// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function clock() {
    const now = new Date();

    const h24 = pad(now.getHours());
    const m = pad(now.getMinutes());
    const s = pad(now.getSeconds());

    let h12 = now.getHours();
    const period = h12 >= 12 ? "PM" : "AM";
    h12 = h12 % 12;
    h12 = h12 === 0 ? 12 : h12;

    console.clear();
    console.log(`24-hour : ${h24}:${m}:${s}`);
    console.log(`12-hour : ${pad(h12)}:${m}:${s} ${period}`);

    setTimeout(clock, 1000);
}

function pad(num) {
    return num.toString().padStart(2, "0");
}

clock();
