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