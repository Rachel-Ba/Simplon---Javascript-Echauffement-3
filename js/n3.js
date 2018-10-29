var user = {
    login: "",
    password: "",
};

var user1 = Object.create(user);
user1.login = "lea@gmail.com";
user1.password = "12345";

var user2 = Object.create(user);
user2.login = "emma@gmail.com";
user2.password = "02468";

var user3 = Object.create(user);
user3.login = "louise@gmail.com";
user3.password = "13579";

var user4 = Object.create(user);
user4.login = "jade@gmail.com";
user4.password = "98765";

//----------------------------------------------------------------------------------------------------------
var ident = prompt("Veuillez entrer votre identifiant :");

while ((ident!==user1.login)&&(ident!==user2.login)&&(ident!==user3.login)&&(ident!==user4.login))
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

//----------------------------------------------------------------------------------------------------------

var motDePasse = prompt("Veuillez entrer votre mot de passe :");

if (ident===user1.login)
{
	while (motDePasse!==user1.password)
	{
		alert("Ce n'est pas le bon mot de passe, recommencer");
		motDePasse = prompt("Veuillez entrer votre mot de passe :");
	}
	
}

if (ident===user2.login)
{
	while (motDePasse!==user2.password)
	{
		alert("Ce n'est pas le bon mot de passe, recommencer");
		motDePasse = prompt("Veuillez entrer votre mot de passe :");
	}
	
}

if (ident===user3.login)
{
	while (motDePasse!==user3.password)
	{
		alert("Ce n'est pas le bon mot de passe, recommencer");
		motDePasse = prompt("Veuillez entrer votre mot de passe :");
	}
	
}

if (ident===user4.login)
{
	while (motDePasse!==user4.password)
	{
		alert("Ce n'est pas le bon mot de passe, recommencer");
		motDePasse = prompt("Veuillez entrer votre mot de passe :");
	}
	
}

alert("Bienvenue Lea, votre identifiant est "+ ident + " et votre mot de passe est " + motDePasse);

