
function a (balance,fare,point) {
    if (point<fare && fare<balance) {
        return(`残高：${balance-fare}　ポイント${fare*0.1+point}`);
    } else if (point>=fare){
        return(`残高：${balance}　ポイント${point-fare}`);
    } else {
        return '残金不足';
    }
}
console.log(a(2000, 300, 0));
console.log(a(1700, 500, 30));
console.log(a(1200, 300, 80));
console.log(a(900, 100, 110));
console.log(a(900, 100, 10));
console.log(a(100, 300, 10));
