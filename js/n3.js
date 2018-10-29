var ident = prompt("Veuillez entrer votre identifiant :");
var login = "lea@gmail.com";


while (ident!==login)
{
	if(ident.length<4)
	{
		alert("Vous avez taper un indentifiant inférieur a 4 caracteres, recommencer");
		ident = prompt("Veuillez entrer votre identifiant :");
	}
	else if (ident.indexOf("@")===-1)
	{
		alert("Il n'y a pas d'@ dans votre identifiant, recommencer");
		ident = prompt("Veuillez entrer votre identifiant :");
	}
	else
	{
		alert("Identifiant inconnu, recommencer");
		ident = prompt("Veuillez entrer votre identifiant :");
	}
}

var motDePasse = prompt("Veuillez entrer votre mot de passe :");
var password = "12345";


while (motDePasse!==password)
{
	alert("Ce n'est pas le bon mot de passe, recommencer");
	motDePasse = prompt("Veuillez entrer votre mot de passe :");
}

alert("Bienvenue Lea, votre identifiant est "+ ident + " et votre mot de passe est " + motDePasse);

