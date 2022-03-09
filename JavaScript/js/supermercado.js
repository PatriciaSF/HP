function compra(b,f,a){
    var pago = b + f + a;
    return pago;
}

document.write('Las compras en el supermercado');
document.write('<br>');
document.write(Math.round(compra(80.250,15.301,60.698)*100)/100);