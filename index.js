let nomeHeroi = "Super"
let xp = 1500

if (xp <= 1000) {
    //ferro
    console.log(`O Herói de nome **${nomeHeroi}** está no nível **Ferro**`)
}else if(xp > 1000 && xp <= 2000){
    //bronze
    console.log(`O Herói de nome **${nomeHeroi}** está no nível **Bronze**`)
}else if(xp > 2000 && xp <= 5000){
    //ouro
    console.log(`O Herói de nome **${nomeHeroi}** está no nível **Ouro**`)
}else if(xp > 5000 && xp <= 8000){
    //platina
    console.log(`O Herói de nome **${nomeHeroi}** está no nível **Platina**`)
}else if(xp > 8000 && xp <= 9000){
    //ascendente
    console.log(`O Herói de nome **${nomeHeroi}** está no nível **Ascendente**`)
}else if(xp > 9000 && xp <= 10000){
    //imortal
    console.log(`O Herói de nome **${nomeHeroi}** está no nível **Imortal**`)
}else{
    //radiante
    console.log(`O Herói de nome **${nomeHeroi}** está no nível **Radiante**`)
}