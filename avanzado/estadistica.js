'use strict';

function calcularMediaAritmetica(arr)
{
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

function calcularModa(lista)
{
    const listaCount = {};
    
    // Aqui con el metodo map, sumamos la cantidad de veces que aparece un numero dentro de la lista y lo guardamos en listaCount
    lista.map(
        function(elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
            }
            else {
                listaCount[elemento] = 1;
            }
        }
    );
    
    // Aqui la funcion Object.entries convierte el objeto en un array con arrays de todos los elementos de ese objeto.
    // Y como ya es un array, con el metodo sort, podemos ordenarlo de menor a mayor, solo indicandole en el return el valor que va a evaluar que seria la posicion [1] de cada array. Y asi obtenemos nuestro array de arrays ordenado.
    const listaArray = Object.entries(listaCount).sort((a, b) => a[1] - b[1]);
    
    // La moda seria el ultimo elemento de ese array ya que es el elemento que mas veces se repite en el array original.
    const moda = listaArray[listaArray.length - 1];
    
    return moda;
}

function onClickButtonStatistics() 
{
    const lista = document.getElementById("listaUsuario");
    const listaValue = lista.value;
    const listaArray = listaValue.split(" ");
    const numbersArray = listaArray.map(a => parseFloat(a));

    const promedio = calcularMediaAritmetica(numbersArray);
    const mediana = calcularMediana(numbersArray);
    const moda = calcularModa(numbersArray);

    const averageResult = document.getElementById("averageResult");
    const medianResult = document.getElementById("medianResult");
    const modeResult = document.getElementById("modeResult");

    if (promedio == "NaN" || mediana == "NaN" || moda[0] == "NaN")
    {
        alert("Por favor ingresa valores numericos válidos")
    }
    else
    {
        averageResult.innerText = "Promedio = " + promedio.toFixed(3);
        medianResult.innerText = "Mediana = " + mediana;
        modeResult.innerText = "Moda = " + moda[0] + " que se repite " + moda[1] + " veces";
    }
}