let N = prompt("Nhập vào một số nguyên:");
if (isNaN(N) || N < 0) {
    alert("Số không hợp lệ");
} else {
    let strN = N.toString();
    let reversed = "";
    for (let i = strN.length - 1; i >= 0; i--) {
        reversed += strN[i];
    }
    if (strN === reversed) {
        alert("Là số đối xứng");
    } else {
        alert("Không phải số đối xứng");
    }
}
