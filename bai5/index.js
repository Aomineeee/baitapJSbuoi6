function lietke() {
    var songuyenEl = document.getElementById("songuyen").value * 1
    var ketQua = " "
    var ketQuaEl = document.getElementById("ketqua")
    for (i = 1; i <= songuyenEl; i++) {
        ketQua += " " + i
    }
    ketQuaEl.innerHTML = ketQua
}