    console.log("test")
    const random = Math.floor(Math.random() * 11)
    console.log(random)
    const nbr = prompt("Merci de mettre un nombre entre 0 et 10")
    parseInt(nbr)
    console.log(nbr)
    while(nbr==random)
    {
    if (nbr>random){
        console.log("moins")
        const nbr = prompt("Merci de mettre un nombre entre 0 et 10")

    }
    else{
        console.log("plus")
        const nbr = prompt("Merci de mettre un nombre entre 0 et 10")

    }
}
    console.log("bravo !")

    
