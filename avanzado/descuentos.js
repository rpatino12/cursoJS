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

    if (!coupons.includes(couponValue))
    {
        alert(`El cupon ${couponValue} no es valido`);
        discount = 0;
    }
    else if (couponValue === coupons[0]) // "giveMe15"
    {
        discount = 15;
    }
    else if (couponValue === coupons[1]) // "secretCoupon"
    {
        discount = 30;
    }
    else if (couponValue === coupons[2]) // "50_Off"
    {
        discount = 50;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
}