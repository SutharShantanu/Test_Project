// Check whether a number is Prime or not ?

let num = 100;
for (let i = 1; i <= num; i++) {
    let factor = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 1) {
            factor++;
        }
    }
    if (factor == 3) {
        console.log(i, "Prime");
    } else {
        console.log(i, "Not");
    }
}