let N = prompt("Hãy nhập 1 số nguyên dương:");
if (N > 0) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    alert(sum);
} else {
    alert("Dữ liệu nhập vào không hợp lệ");
}