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

function areaTriangulo(base, altura)
{
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
    alert("El valor del perímetro del cuadrado es: " + perimetro);
}

function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = parseFloat(input.value);

    const area = areaCuadrado(value);
    alert("El valor del área del cuadrado es: " + area);
}

function calcularPerimetroTriangulo()
{
    const inputA = document.getElementById("inputTrianguloA");
    const ladoA = parseFloat(inputA.value);
    const inputB = document.getElementById("inputTrianguloB");
    const ladoB = parseFloat(inputB.value);
    const inputBase = document.getElementById("inputTrianguloBase");
    const base = parseFloat(inputBase.value);
    
    console.log(ladoA);
    const perimetro = perimetroTriangulo(ladoA, ladoB, base);
    alert("El valor del perímetro del Triangulo es: " + perimetro);
}

function calcularAreaTriangulo()
{
    const inputBase = document.getElementById("inputTrianguloBase");
    const base = parseFloat(inputBase.value);
    const inputHeight = document.getElementById("inputTrianguloHeight");
    const height = parseFloat(inputHeight.value);

    const area = areaTriangulo(base, height);
    alert("El valor del área del Triangulo es: " + area);
}

function calcularPerimetroCirculo()
{
    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);

    const perimetro = perimetroCirculo(value);
    alert("El valor del perímetro del Circulo es: " + perimetro.toFixed(2));
}

function calcularAreaCirculo()
{
    const input = document.getElementById("inputCirculo");
    const value = parseFloat(input.value);

    const area = areaCirculo(value);
    alert("El valor del área del Circulo es: " + area.toFixed(2));
}
