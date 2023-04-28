const chiffre = prompt('Entrez un chiffre entre 1 et 10')
parseInt(chiffre)
console.log(chiffre)
if (chiffre>= 10){
alert("Votre nombre est supérieur à 10")
}
else{
    for (let i = chiffre; i >= 0; i--)
    {
        console.log("je compte " + i)
    }
}

