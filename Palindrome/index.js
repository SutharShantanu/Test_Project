// Check whether a string is palindrome or not ?

let bag = "", bag2 = "";

let str = "naman";

for (let j = str.length - 1; j >= 0; j--) {
    bag = bag + str[j];
}

for (let i = 0; i <= str.length-1; i++) {
    bag2 = bag2 + str[i];
}

if (bag == bag2) {
    console.log(true);
} else {
    console.log(false);
}