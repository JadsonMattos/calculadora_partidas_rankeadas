const readline = require('readline-sync');

let vitoriasNum = parseInt(readline.question("Insira o número de vitórias: "));
let derrotasNum = parseInt(readline.question("Insira o número de derrotas: "));

function calcularRankeadas(vitorias, derrotas) {
    let saldoVitorias = Math.abs(vitorias - derrotas);
    let nivel;

    switch(true) {
        case (saldoVitorias < 10):
            nivel = 'Ferro';
            break;
        case (saldoVitorias >= 11 && saldoVitorias <= 20):
            nivel = 'Bronze';
            break;
        case (saldoVitorias >= 21 && saldoVitorias <= 50):
            nivel = 'Prata';
            break;
        case (saldoVitorias >= 51 && saldoVitorias <= 80):
            nivel = 'Ouro';
            break;
        case (saldoVitorias >= 81 && saldoVitorias <= 90):
            nivel = 'Diamante';
            break;
        case (saldoVitorias >= 91 && saldoVitorias <= 100):
            nivel = 'Lendário';
            break;
        case (saldoVitorias >= 101):
            nivel = 'Imortal';
            break;
        default:
            nivel = 'Desconhecido'
    }
    console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}.`);
}

calcularRankeadas(vitoriasNum, derrotasNum);
