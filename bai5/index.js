function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i == 0) return false;
    return num > 1;
}
function lietke() {
    var songuyenEl = document.getElementById("songuyen").value * 1
    var ketQua = " "
    var ketQuaEl = document.getElementById("ketqua")
    for (i = 1; i <= songuyenEl; i++) {
        var a = isPrime(i);
        if (a)
            ketQua +=" "+ i; 
    }
    ketQuaEl.innerHTML = ketQua
}