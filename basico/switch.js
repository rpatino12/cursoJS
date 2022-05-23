let usuario = prompt('1, 2, 3!!! Piedra, Papel o Tijera?!\nSeleccione su jugada, escogiendo una de las opciones:\n1: Piedra\n2: Papel\n3: Tijera');
let jugadaUsuario;

let robot = ['Piedra', 'Papel', 'Tijera'];
let jugadaRobot;

switch(usuario) 
{
    case '1':
        jugadaUsuario = 'Piedra';
        break;
    case '2':
        jugadaUsuario = 'Papel';
        break;
    case '3':
        jugadaUsuario = 'Tijera';
        break;
    default:
        alert('Vuelva a intentarlo, seleccionando bien su jugada');
}

function aleatorio(min, max)
{
    let resultado;
    resultado = Math.floor(Math.random() * (max - min +1)) + min;
    return resultado;
}

jugadaRobot = robot[aleatorio(0, 2)];

if (jugadaUsuario === 'Piedra' || jugadaUsuario === 'Papel' || jugadaUsuario === 'Tijera')
{
    alert('Jugada del usuario: ' + jugadaUsuario + '\n' + 'Jugada del robot: ' + jugadaRobot);

    if (jugadaUsuario === jugadaRobot) 
    {
        alert('Empate!');
    }
    else if (jugadaUsuario === 'Piedra' && jugadaRobot === 'Tijera')
    {
        alert('Victoria del usuario!');
    }
    else if (jugadaUsuario === 'Papel' && jugadaRobot === 'Piedra')
    {
        alert('Victoria del usuario!');
    }
    else if (jugadaUsuario === 'Tijera' && jugadaRobot === 'Papel')
    {
        alert('Victoria del usuario!');
    }
    else if (jugadaUsuario === 'Piedra' && jugadaRobot === 'Papel')
    {
        alert('Victoria del robot!');
    }
    else if (jugadaUsuario === 'Papel' && jugadaRobot === 'Tijera')
    {
        alert('Victoria del robot!');
    }
    else if (jugadaUsuario === 'Tijera' && jugadaRobot === 'Piedra')
    {
        alert('Victoria del robot!');
    }
}

console.log('Jugada del usuario: ' + jugadaUsuario);
console.log('Jugada del robot: ' + jugadaRobot);