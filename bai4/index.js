function inra() {
    var ketQua = document.getElementById("ketqua")

    for (i = 0; i < 10; i++) {
        var ketQua = document.getElementById("ketqua")
        var data = "";
        if (i % 2 == 0) {
            data = "<div style='color:red'>Thẻ nè mấy anh hai</div>"
        } else {
            data = "<div style='color:blue'>Thẻ nè mấy anh hai</div>"

        }
        ketQua.innerHTML += data
    }
}