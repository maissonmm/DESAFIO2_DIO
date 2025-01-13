let SaldoDeVitoria = Total(300, 187);
let NivelHeroi = Classe(SaldoDeVitoria);

function Total(Vitoria, Derrota) {
    let Saldo = Vitoria - Derrota;
    return Saldo;
}

function Classe(Nivel) {
    let Rank = ""; 

    if (Nivel < 10) {
        Rank = "Ferro";
    } else if (Nivel >= 10 && Nivel <= 20) {
        Rank = "Bronze";
    } else if (Nivel >= 21 && Nivel <= 50) {
        Rank = "Prata";
    } else if (Nivel >= 51 && Nivel <= 80) {
        Rank = "Ouro";
    } else if (Nivel >= 81 && Nivel <= 90) {
        Rank = "Diamante";
    } else if (Nivel >= 91 && Nivel <= 100) {
        Rank = "Lendário";
    } else if (Nivel > 100) {
        Rank = "Imortal";
    }

    return Rank;
}

console.log("O Herói tem um saldo de " + SaldoDeVitoria + " e está no nível de " + NivelHeroi);
