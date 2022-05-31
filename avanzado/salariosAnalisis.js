const salariosCol = colombia.map(
    function(personita)
    {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort((a, b) => a - b);

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

console.log("La mediana de salarios en colombia es de: " + medianaSalarios(salariosColSorted));