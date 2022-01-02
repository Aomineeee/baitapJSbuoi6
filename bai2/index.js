function tinhtong(){
    var x=document.getElementById("so-x").value*1
    var n=document.getElementById("so-n").value*1
    var luythua=1
    var s=0
    var ketQua=document.getElementById("ketqua")
    for(i=1;i<=n;i++){
        luythua*=x
        s+=luythua
    }
    ketQua.innerHTML="Tổng của lũy thừa="+" "+s
}