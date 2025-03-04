let a = +prompt("Mời bạn nhập số thứ nhất: ")
let b = +prompt("Mời bạn nhập số thứ hai: ")
if (isNaN(a) || isNaN(b)) {
    alert("Không hợp lệ!")
} else {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result = result * a;
    }
    alert(`${a} ^ ${b}=${result}`)
}