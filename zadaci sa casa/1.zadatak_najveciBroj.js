
var niz = [23, 48, -8, 77, 0, 23, 15];
var najBroj = niz[0];

for (var i = 0; i < niz.length; i++) {
	if (najBroj < niz[i]) {
		najBroj = niz[i];
	}
}
console.log("Najveci broj je " + najBroj);

