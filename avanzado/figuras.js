// Código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado}cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El área del cuadrado es: ${areaCuadrado}cm2`);
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
const ladoTrianguloA = 6;
const ladoTrianguloB = 6;
const baseTriangulo = 4;
console.log(`Los lados del triángulo miden: ${ladoTrianguloA}cm, ${ladoTrianguloB}cm y ${baseTriangulo}cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de: ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTrianguloA + ladoTrianguloB + baseTriangulo;
console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es: ${areaTriangulo}cm2`);
console.groupEnd();

// Código del Círculo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log(`El radio del círculo es: ${radioCirculo}cm`);

// Diámetro
const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es: ${diametroCirculo}cm`);

// PI
const PI = Math.PI;
console.log(`PI es: ${PI}`);

// Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log(`El perímetro del círculo es: ${perimetroCirculo}cm`)

// Área
const areaCirculo = PI * (radioCirculo ** 2);
console.log(`El área del círculo es: ${areaCirculo}cm2`)

console.groupEnd();