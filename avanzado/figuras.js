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
