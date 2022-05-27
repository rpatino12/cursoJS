function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

const coupons = [
    "giveMe15",
    "secretCoupon",
    "50_Off"
];

function onClickButtonDiscount()
{
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let discount;

    switch(couponValue)
    {
        case coupons[0]: // "giveMe15"
            discount = 15;
        break;
        case coupons[1]: // "secretCupon"
            discount = 30;
        break;
        case coupons[2]: // "50_Off"
            discount = 50;
        break;
        default:
            discount = 0;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}