let N = prompt("Hãy nhập một số nguyên dương:");
if (N > 0) {  
    let sum = [];
    for (let i = 5; i <= N; i += 5) {  
        sum.push(i);
    }
    alert(`Các số chia hết cho 5 từ 1 đến ${N} là: ${sum.join(", ")}`);
} else {
    alert("Dữ liệu nhập vào không hợp lệ");
}
