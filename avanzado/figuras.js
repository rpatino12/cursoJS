// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;

function perimetroCuadrado(lado)
{
    return lado * 4;
}

function areaCuadrado(lado)
{
    return lado * lado;
}
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
// const ladoTrianguloA = 6;
// const ladoTrianguloB = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base)
{
    return lado1 + lado2 + base;
}

function alturaTriangulo(lado1, lado2, base)
{
    if (lado1 === lado2 && lado2 === base)
    {
        return (lado1*Math.sqrt(3))/2;
    }
    else if (lado1 === lado2 && lado1 !== base)
    {
        return (Math.sqrt((lado1**2)-((base**2)/4)));
    }
}

function areaTriangulo(lado1, lado2, base)
{
    const altura = alturaTriangulo(lado1, lado2, base);
    return (base * altura) / 2;
}
console.groupEnd();

// Código del Círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;

// Diámetro
function diametroCirculo(radio)
{
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio)
{
    const diametro = diametroCirculo(radio);
    return diametro * PI;    
}

// Área
function areaCirculo(radio)
{
    return PI * (radio ** 2);
}
console.groupEnd();

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = parseFloat(input.value);

    const perimetro = perimetroCuadrado(value);
    document.getElementById("demoPerimetro1").innerHTML = "Perimeter = " + perimetro.toFixed(2);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = parseFloat(input.value);

    const area = areaCuadrado(value);
    document.getElementById("demoArea1").innerHTML = "Area = " + area.toFixed(2);
}

function calcularPerimetroTriangulo()
{
    const inputA = document.getElementById("inputTrianguloA");
    const ladoA = parseFloat(inputA.value);
    const inputB = document.getElementById("inputTrianguloB");
    const ladoB = parseFloat(inputB.value);
    const inputBase = document.getElementById("inputTrianguloBase");
    const base = parseFloat(inputBase.value);
    
    const perimetro = perimetroTriangulo(ladoA, ladoB, base);
    document.getElementById("demoPerimetro2").innerHTML = "Perimeter = " + perimetro.toFixed(2);
}

function calcularAreaTriangulo()
{
    const inputA = document.getElementById("inputTrianguloA");
    const ladoA = parseFloat(inputA.value);
    const inputB = document.getElementById("inputTrianguloB");
    const ladoB = parseFloat(inputB.value);
    const inputBase = document.getElementById("inputTrianguloBase");
    const base = parseFloat(inputBase.value);

    const altura = alturaTriangulo(ladoA, ladoB, base);
    document.getElementById("demoAltura").innerHTML = "Altura = " + altura.toFixed(2);

    const area = areaTriangulo(ladoA, ladoB, base);
    document.getElementById("demoArea2").innerHTML = "Area = " + area.toFixed(2);
}

function calcularPerimetroCirculo()
{
    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);

    const perimetro = perimetroCirculo(value);
    document.getElementById("demoPerimetro3").innerHTML = "Perimeter = " + perimetro.toFixed(2);
}

function calcularAreaCirculo()
{
    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);

    const area = areaCirculo(value);
    document.getElementById("demoArea3").innerHTML = "Area = " + area.toFixed(2);
}
