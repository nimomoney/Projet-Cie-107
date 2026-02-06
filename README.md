# Projet-Cie-107
Projet d'utilisation des blockchain avec JavaScript et HTML
Analyse Projet CIE-107

But du projet : Transformer des minerais de fer en lingot de fer.
Entrée nécessaire : minerais de fer, charbon.
Action : Fonderie
Sortie : Lingot
Attention pour un lingot il faut 1kg fer et 2kg charbon
Processus de création d’un / plusieurs lingot : 
1.	Ajoute du charbon et du fer dans les stocks de la fonderie (1stock minerai de fer ; 1 stock charbon lingot ; 1 stock charbon combustible)
2.	Choix du nombre de lingot que l’on veut faire
3.	Vérification de la quantité de matière dans les stocks de la fonderie en fonction du nombre de lingot à créer.
4.	Combinaison des matières (1kg de fer et 1kg de charbon et combustion de 1kg de charbon). 
5.	Vérification du poids des lingots qui sortent de la fonderie
6.	Ajouts des lingots aux stock de la fonderie déjà existant
Attention dans mon code :
Si la vérification du stock des matières premières démontre qu’on n’a pas ce qu’il faut pour faire le nombre de lingot demandés, la demande est annulée et retourne au demandeur un message d’annulation car stock insuffisant.
Il y a une gestion des rôles :
Fournisseur : Seul lui peut appeler la fonction "Ajout au stock".
Ouvrier : Seul lui peut cliquer sur "Lancer la fonderie".
Administrateur : Peut modifier les recettes (si demain il faut 3kg de charbon).
Une fois qu’une action de fonderie de lingots est mise en marche on ne peut pas revenir en arrière donc on ne peut pas redécomposer un lingot en charbon et fer brut. A savoir que le charbon mis dans le lingot ne disparait pas et son poids s’additionne à celui du fer (donc poids d’un lingot 2kg).
J’aimerai également que le message d’annulation précise ce qu’il me manque et combien de kg.



