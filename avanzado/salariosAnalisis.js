// Helpers
function esPar(num) 
{
    return (num % 2 === 0); // Si es par va a retornar true y si no, retorna false
}

function calcularMediaAritmetica(arr)
{
    const sumaArr = arr.reduce(
        function(valorAcumulado = 0, elemento) 
        {
            return valorAcumulado + elemento;
        }
    );
    const promedioArr = sumaArr / arr.length;
    return promedioArr;
}

// Calculadora de mediana
function medianaSalarios(lista)
{
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length))
    {
        const salarioMitad1 = lista[mitad - 1];
        const salarioMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([salarioMitad1, salarioMitad2]);
        return mediana;
    }
    else
    {
        const salarioMitad = lista[mitad];
        return salarioMitad;
    }
}

// Mediana general de salarios
const salariosCol = colombia.map(
    function(personita)
    {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort((salaryA, salaryB) => salaryA - salaryB);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%

// Primer parametro del metodo splice, que sirve para indicar el indice a partir del cual quiero extraer los elementos del array original
const sliceStart = parseInt(salariosColSorted.length * 0.9);

// Segundo parametro del metodo splice, que sirve para indicar la cantidad de elementos que quiero extraer del array original
const sliceEnd = salariosColSorted.length; 

const salariosTop10Col = salariosColSorted.slice(sliceStart, sliceEnd);

const medianaTop10Col = medianaSalarios(salariosTop10Col);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});