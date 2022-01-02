function tinh(){
    var s=1
    var n=document.getElementById("so-n").value*1
    var ketQua=document.getElementById("ketqua")
    for(i=1;i<=n;i++){
        s*=i
    }
    ketQua.innerHTML="Giai thừa ="+" "+s
}