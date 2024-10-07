let victories = 160;
let defeats = 5;

let returnPoints = getReturnPoints(victories, defeats);

if (returnPoints <= 10) {
    console.log(`O Herói tem saldo de  **${returnPoints}** está no nível **Ferro**`)
} else if (returnPoints > 10 && returnPoints <= 20) {
    console.log(`O Herói tem saldo de  **${returnPoints}** está no nível **Bronze**`)
}else if (returnPoints > 20 && returnPoints <= 50) {
    console.log(`O Herói tem saldo de  **${returnPoints}** está no nível **Ouro**`)
} else if (returnPoints > 50 && returnPoints <= 80) {
    console.log(`O Herói tem saldo de  **${returnPoints}** está no nível **Platina**`)
} else if (returnPoints > 80 && returnPoints <= 90) {
    console.log(`O Herói tem saldo de  **${returnPoints}** está no nível **Ascendente**`)
} else if (returnPoints > 90 && returnPoints <= 100) {
    console.log(`O Herói tem saldo de  **${returnPoints}** está no nível **Imortal**`)
} else {
    console.log(`O Herói tem saldo de  **${returnPoints}** está no nível **Radiante**`)
}


function getReturnPoints(victories = 0, defeats = 0) {
    return victories - defeats;
}