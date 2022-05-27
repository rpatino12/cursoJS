// const precioOriginal = 120;
// const porcentajeDescuento = 18;

function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}



// console.log({
//     precioOriginal,
//     porcentajeDescuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });