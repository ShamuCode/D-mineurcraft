function calculIndesirable() {
    // la boucle des lignes
    for (var i = 0; i < nbLignes; i++) {
        // la boucle des colonnes
        for (var j = 0; j < nbColonnes; j++) {

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


                // On met le résultat du compteur dans la case
                $(".i" + i + ".j" + j).text(nbrIndesirable);

            }
        }
    }
}