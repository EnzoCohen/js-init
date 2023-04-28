console.log("Script Boucle 5 chargé !")
let Homme =[]
let Femme = []
const staff = [
    {name:"Marc",gender:"M"},
    {name:"Sophie",gender:"F"},
    {name:"Eva",gender:"F"},
    {name:"Aaron",gender:"M"},
    {name:"Pierre",gender:"M"},
    {name:"Martine",gender:"F"},
    {name:"Chloé",gender:"F"},
    {name:"Hubert",gender:"M"},
    {name:"Aurore",gender:"F"},
]
for (let staffmember of  staff){
    
        if(staffmember.gender === "M"){
            Homme.push(staffmember)
        }
        else{
            Femme.push(staffmember)
        }
}
console.log(Homme)
console.log(Femme)