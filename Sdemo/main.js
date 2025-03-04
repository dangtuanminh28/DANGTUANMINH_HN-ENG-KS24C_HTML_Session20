// cách 1
let result = 49;
let loop = true;
while (loop === true) {
    let choice = +prompt("Hay nhap");
    if (choice === result) {
        console.log("Bingo");
        loop = false;
    } else {
        console.log("Lại");
    }
}
// cách 2
let ok = 1;
do {
    console.log("Helo");
} while (ok == 0)