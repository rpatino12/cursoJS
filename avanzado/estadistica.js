'use strict';

function calcularMediaAritmetica(arr)
{
    // let sumaArr = 0;

    // for (let i=0; i < arr.length; i++)
    // {
    //     sumaArr += arr[i];
    // }

    // El metodo reduce recorre todo el array y aplica sobre los elementos la funcion que recibe por parametro, que en este caso esa funcion es para ir sumando cada elemento dentro de "valorAcumulado" y el valor que itera es el parametro "elemento"
    const sumaArr = arr.reduce(
        function(valorAcumulado = 0, elemento) 
        {
            return valorAcumulado + elemento;
        }
    );

    const promedioArr = sumaArr / arr.length;

    return promedioArr;
}

const lista1 = [100, 200, 500, 400000000];

function esPar(num)
{
    if (num % 2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

function calcularMediana(arr)
{
    const mitadArr = parseInt(arr.length / 2);
    
    const arrayOrdenado = arr.sort(function(a,b){return a - b})

    let mediana;
    
    if (esPar(arr.length))
    {
        const elemento1 = arrayOrdenado[mitadArr - 1];
        const elemento2 = arrayOrdenado[mitadArr];
    
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    
        mediana = promedioElemento1y2;
    }
    else
    {
        mediana = arrayOrdenado[mitadArr];
    }

    return mediana;
}