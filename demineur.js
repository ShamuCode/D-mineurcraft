console.log("demineur.js");

var nbLignes = 12;
var nbColones = 12;
var difficulte = 8; // 10% d'indésirable
var bloqueJeu = false;

//recup grille
var maGrille = $("#grille");

//clque sur le rdieu des resulats pour le faire disparaitre
$('#resultat').click(function(){
     $(this).fadeOut(1000);
});



function launcher() {
    
    //acher les rèles
    $('#regles').fadeOut(1000); //cache en 1000 millisec
    bloqueJeu=false;
    dessinerLaGrille();
    calculIndesirable();
    
}


$('#niv0').click(function(){
    console.log('clic');
    nbLignes = 5;
    nbColones = 5;
    difficulte = 20;
    launcher();
})



$("#niv1").click(function(){
    console.log('clic');
    nbLignes = 12;
    nbColones = 12;
    difficulte = 8;
    launcher();
})

$("#niv2").click(function(){
    console.log('clic');
    nbLignes = 15;
    nbColones = 15;
    difficulte = 10;
    launcher();
})

$("#niv3").click(function(){
    console.log('clic');
    nbLignes = 20;
    nbColones = 20;
    difficulte = 15;
    launcher();
})

//clic sur le bouton niv facile

//clic gauche case
maGrille.on(
    'click',
    'td',
    function(){
        //si c'est un drapeau ou jeu fini -> on sort
        if($(this).hasClass('drapeau') || bloqueJeu) {return; }
        //$(this) est lobjet sur lequel on agit
        //eleve la couche de peinture
        $(this).removeClass('paint');
        //si une case est indésirable perdu !
        if ($(this).hasClass('indesirable')   ) {
            afficheResultat("BOOOOOOOOOOOOOOOOOOOOM, Perdu !")
            //decouvre les cases
            $('.paint').removeClass('paint');
            $(this).addClass('erreur');
            bloqueJeu=true;
        } else {
            //GAGNE ?
            //on gagne lorsque le nb delements de la class paint est egal au nb delemnts de class idnesirable
            //$('.paint')/lenght correspond au nb delements ayant la class paint
            if( $('.paint').length == $('.indesirable').length){
                afficheResultat("Victoire, Steve a trouvé des diamants.");
                addClass('F&S');
                $("F&S").removeClass("dreapeau");
                bloqueJeu=true;
            }
        }
    }
)

//clic droit (drapeau)
maGrille.on(
    'contextmenu',
    'td',
    function(event){
        console.log('clic droit');
        //naffiche pas le menu
        event.preventDefault();
        //ajou de classe si drapeau est couvert
        if($(this).hasClass('paint')){
            //toggle permute
            //si pas classe ajoute
            //si la classe enlève
            $(this).toggleClass('drapeau');
        }
    }
)


function dessinerLaGrille() {

//vide
maGrille.empty();

//boucle sur les cellules

for (var i = 0 ; i < nbLignes ; i++) {

    //génère une ligne HTML
    var maLigne= $("<tr></tr>");
    

    for (var j = 0 ; j < nbColones ; j++) {
        //génère une ligne HTML
        var maCellule= $("<td></td>");
        //ajout de class de coordonnées
        maCellule.addClass('i'+i);
        maCellule.addClass('j'+j);


        // on tire au hasard un nb entre 0 et 100
        //si ce nb est < une variable (% d'indésirable)
        //on ajoute la classe indésirable
        if (nbrHasard() < difficulte) {


        //ajout de la classe indésirable
        maCellule.addClass("indesirable");
        }
        //ajout d'une couche de peinture pour masquer
        maCellule.addClass('paint');
        //attache la cellule à la ligne
        maLigne.append(maCellule);
    }

// attache la ligne au squelette (la grille)
maGrille.append(maLigne);
}

}

//fonction qui tire au hasard un nombre compris entre 0 et 100
function nbrHasard(){
    var alea=Math.random();//tire au hasard un nb entre 0 et 1
    alea=alea*100;
    return alea;
}

function calculIndesirable() {
    // la boucle des lignes
    for (var i = 0; i < nbLignes; i++) {
        // la boucle des colonnes
        for (var j = 0; j < nbColones; j++) {

            // Si il n'y a pas d'indésirables
            // alors je compte le nombre d'indésirables
            // le contraire de vrai, c'est faux
            // donc je dois trouver le contraire de il a la classe indésirables
            // le contraire s'écrit ! avant (il a la classe indésirables)
            // avoir une class qui se nomme indésirable, chercher sur Google : jQuery avoir une class
            // qqchose == true revient à écrire QQCHOSE
            // qqchose == false revient à écrire !QQCHOSE
            if (!$(".i" + i + ".j" + j).hasClass("indesirable")) {
                //console.log("PAS DE BOMBES");
                var nbrIndesirable = 0;

                // on contrôle la case i-1, j-1 pour compter si bombe dedans
                if ($(".i" + (i - 1) + ".j" + (j - 1)).hasClass("indesirable")) {
                    nbrIndesirable++;
                }

                /// plein de if => en contrôle 7 autres

                // on contrôle la case i-1, j pour compter si bombe dedans
                if ($(".i" + (i - 1) + ".j" + (j)).hasClass("indesirable")) {
                    nbrIndesirable++;
                }
                // on contrôle la case i-1, j+1 pour compter si bombe dedans
                if ($(".i" + (i - 1) + ".j" + (j + 1)).hasClass("indesirable")) {
                    nbrIndesirable++;
                }
                // on contrôle la case i, j-1 pour compter si bombe dedans
                if ($(".i" + (i) + ".j" + (j - 1)).hasClass("indesirable")) {
                    nbrIndesirable++;
                }
                // on contrôle la case i, j+1 pour compter si bombe dedans
                if ($(".i" + (i) + ".j" + (j + 1)).hasClass("indesirable")) {
                    nbrIndesirable++;
                }
                // on contrôle la case i+1, j-1 pour compter si bombe dedans
                if ($(".i" + (i + 1) + ".j" + (j - 1)).hasClass("indesirable")) {
                    nbrIndesirable++;
                }
                // on contrôle la case i+1, j pour compter si bombe dedans
                if ($(".i" + (i + 1) + ".j" + (j)).hasClass("indesirable")) {
                    nbrIndesirable++;
                }
                // on contrôle la case i+1, j+1 pour compter si bombe dedans
                if ($(".i" + (i + 1) + ".j" + (j + 1)).hasClass("indesirable")) {
                    nbrIndesirable++;
                }
                var couleur= 'white';
                //iciciciciiciciciciciiciciciiciciciciiciciciciicicici
                switch(nbrIndesirable){
                    case 1:
                        couleur='blue';
                        break;
                    case 2: 
                        couleur='green';
                        break;
                    case 3:
                        couleur='red';
                        break;
                    case 4: 
                        couleur='violet';
                        break;
                    case 5:
                        couleur='black';
                        break;
                    
                }
                $('.i'+i+'.j'+j).css('color', couleur);

                if(nbrIndesirable !=0){
                // On met le résultat du compteur dans la case
                $(".i" + i + ".j" + j).text(nbrIndesirable);
               }
            }
        }
    }
}


function afficheResultat(messsage) {
    $('#resultat').text(messsage);
    $('#resultat').fadeIn(500); //500 mili sec
}