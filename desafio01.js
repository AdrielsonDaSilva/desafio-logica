let nomeHeroi = "Super"
let xp = 1500

while (nomeHeroi != null) {
    if (xp <= 1000) {
        //ferro
        console.log(`O Herói de nome **${nomeHeroi}** está no nível **Ferro**`)
        break
    } else if (xp > 1000 && xp <= 2000) {
        //bronze
        console.log(`O Herói de nome **${nomeHeroi}** está no nível **Bronze**`)
        break
    } else if (xp > 2000 && xp <= 5000) {
        //ouro
        console.log(`O Herói de nome **${nomeHeroi}** está no nível **Ouro**`)
        break
    } else if (xp > 5000 && xp <= 8000) {
        //platina
        console.log(`O Herói de nome **${nomeHeroi}** está no nível **Platina**`)
        break
    } else if (xp > 8000 && xp <= 9000) {
        //ascendente
        console.log(`O Herói de nome **${nomeHeroi}** está no nível **Ascendente**`)
        break
    } else if (xp > 9000 && xp <= 10000) {
        //imortal
        console.log(`O Herói de nome **${nomeHeroi}** está no nível **Imortal**`)
        break
    } else {
        //radiante
        console.log(`O Herói de nome **${nomeHeroi}** está no nível **Radiante**`)
        break
    }
}