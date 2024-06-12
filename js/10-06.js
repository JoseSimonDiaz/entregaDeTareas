/*
En una tienda de venta de repuestos automotrices se tiene que el descuento depende del monto de venta total.
Se ingresa el monto de venta y el sistema debe calcular el descuento y restarlo del total segun las reglas:
- Si el monto es menor que 500 no hay descuento
- Si el monto está comprendido entre 500 y 1000 inclusive, el descuento es de 5%
- Si el monto está comprendido entre 1000 y 7000 inclusive, el descuento es del 11%
- Si el monto está comprendido entre 7000 y 15000 inclusive, el descuento es del 18%
- Si el monto es mayor de 15000 el desc es del 25%.
por ejemplo si se ingresa un monto de 5000 el descuento sera 550, y por tanto el valor a pagar sera 4450.
 */

//Datos de entrada: monto final de ventas
//proceso: validar el monto de ventas, calcular los descuentos
//datos de salida: monto de descuento, monto final de pago


let montoDeVenta = parseFloat(prompt("Ingrese el total de su venta:"));
let descuento = 0;

if(montoDeVenta <= 500){
    descuento = 0;
}else if(montoDeVenta <= 1000){
    descuento = montoDeVenta * 0.05
}else if(montoDeVenta <= 7000){
    descuento =montoDeVenta * 0.11
}else if(montoDeVenta <=15000){
    descuento = montoDeVenta * 0.18
}else if(montoDeVenta >15000){
    descuento = montoDeVenta * 0.25
}


let totalAPagar = montoDeVenta - descuento;


console.log(`Monto de venta: ${montoDeVenta}`);
console.log(`Descuento: ${descuento}`);
console.log(`Monto a pagar: ${totalAPagar}`);


