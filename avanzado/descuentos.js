function calcularPrecioConDescuento(precio, descuento)
{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento
}

const coupons = [
    {
        name: "giveMe15",
        discount: 15,
    },
    {
        name: "secretCoupon",
        discount: 30,
    },
    {
        name: "50_Off",
        discount: 50,
    },
];

function onClickButtonDiscount()
{
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    // Creamos una variable con una función que valide si su parámetro coupon es igual a nuestra variable couponValue.
    const isCouponValueValid = function(coupon) {
        return coupon.name === couponValue;
    };
    
    console.log(isCouponValueValid);
    // Y esta variable la vamos a enviar como parámetro a nuestra función array.find(), ya que el parametro por sintaxis que requiere la funcion array.find() es una comparacion, e internamente recorre el array
    const userCoupon = coupons.find(isCouponValueValid);

    console.log(userCoupon);

    if (!userCoupon) 
    {
        alert(`El cupon ${couponValue} no es valido`);
    }
    else
    {
        const discount = userCoupon.discount;

        const precioConDescuento = calcularPrecioConDescuento(priceValue, discount);

        const resultP = document.getElementById("resultPrice");
        resultP.innerText = "El precio con descuento es: $" + precioConDescuento;
    }
}