var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];
var novaCena = [];


for (var i = 0; i < cene.length; i++) {
	var cena1 = cene[i];
	if (cena1 < 50) {
		cena2 = Number(cena1.toFixed(2));
		novaCena.push(cena2);
	} else {
		cena1 = cena1 * 1.08;
		cena2 = Number(cena1.toFixed(2));
		novaCena.push(cena2);
	}
}
console.log("Cene proizvoda sa odgovarajućim porezom su " + novaCena);

var zbir = 0;
for (var i = 0; i < novaCena.length; i++) {
	zbir += novaCena[i];
}
console.log("Zbir cena svih proizvoda je " + zbir);
