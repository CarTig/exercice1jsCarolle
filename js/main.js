//exercice1a
alert('Bonjour tout le monde !');

//variante
let hello = "Bonjour tout le monde";
console.log(hello);

//exercice1b
let popUpAccueil = 'Bonjour ',
    prenom,
    end = ' !',
    result;

prenom = prompt(' Entrez votre prénom ici ');
result = popUpAccueil + prenom + end;
alert(result);

//exercice2 Utiliser les méthodes JavaScript prompt() et alert() 
//pour demander à l’utilisateur deux nombres puis afficher leur somme
let nombre1, nombre2;
nombre1 = parseInt(prompt("Entrez votre premier nombre "));
nombre2 = parseInt(prompt("Entrez votre deuxième nombre "));
alert(nombre1+nombre2);


//exercice3 écrire un script demandant à l'utilisateur d'entrer son âge et de contrôler 
//la validité de l'âge entré : si l'âge est erroné, afficher un msg d'erreur et redemander de saisir l'âge)

let age; 
let ageAccepte = 18;

function ageValide(){
    alert("Votre age est valide");
}

function ageErrone(){
    alert("Votre age est erroné");
}

age = parseInt(prompt("Veuillez entrer votre age"));

if(age >= ageAccepte){
    ageValide();
}else{
    ageErrone();
}

// autre solution 

let age1 = 0;
do {
        age1 = parseInt(prompt("Entrer votre age"));
        if (age1>0 && age1<18) {
            alert('Vous êtes mineur vous ne pouvez pas entrer');
        }
        else if (age1>=18) {
            alert("c'est bon vous pouvez passer");
        }
        else{
            alert("ce n'est pas possible, veuillez recommencer");
        }
    }while (age<0);



/* exercice4 boucle de while dans une boucle for, et en utilisant 3 variables
Ecrire une page HTML faisant apparaitre 
les nombres premiers compris entre 0 et 100  */
/* MEMO synthaxe do while
do{le code blablabla
}while(condition);
*/
//let article = document.getElementById('nombrePremier');
/* let nombresPremiers = x
x = nombresPremiers%2 == 0; */
let nombresPremiers;
for(let nombresPremiers = 2; nombresPremiers < 100; nombresPremiers++){
    console.log(nombresPremiers);
    do{document.write(nombresPremiers)}
    while(nombresPremiers/1 == nombresPremiers);
    // do{console.log(nombresPremiers);
    // }while(nombresPremiers < 100);

}

//Solution exercice 4
for(let nombresPremiers = 2; nombresPremiers < 100; nombresPremiers++){
    resultat = true;
    for (i=2; i<= nombresPremiers/2; i++) {
        if(nombresPremiers%i===0){
            resultat = false;
        }
    }
    if (resultat === true){
        document.write(nombresPremiers, " ");
    }
  

/*
Exercice 5 : boucle for (insertion des balises HTML dans les scripts). [moyen]
Ecrire une page HTML faisant apparaitre la table de multiplication 
pour les entiers compris entre 1 et 9 et présenter le résultat 
dans un tableau [10 x 10].
*/



