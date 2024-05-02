let xp = 10001
let classificador = 0;
let NameHero = "Link"
let classe = ["Ferro","Bronze","Prata","Ouro","Platina","Ascendente","Imortal","Radiante"]

if(xp >= 1001 && xp<= 2000){
    classificador = 1;
} else
if(xp >= 2001 && xp<= 5000){
    classificador = 2;
} else
if(xp >= 5001 && xp<= 7000){
    classificador = 3;
} else
if(xp >= 7001 && xp<= 8000){
    classificador = 4;
} else
if(xp >= 8001 && xp<= 9000){
    classificador = 5;
} else
if(xp >= 9001 && xp<= 10000){
    classificador = 6;
} else
if(xp >= 10001){
    classificador = 7;
}

console.log("O Herói de nome "+ NameHero, "está no nível de " + classe[classificador])
