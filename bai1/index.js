function tim() {
    var s = 0
    var n = 0
    var ketQua = document.getElementById("ketqua")
    while (s < 10000) {
        n++;
        s += n;
    }
    ketQua.innerHTML = "Số n là:" + " " + n

}
