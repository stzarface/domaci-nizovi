
var niz = [16, 23, 3, 78, 9, 14, 17];
var parni = [];
var neparni = [];

for (var i = 0; i <niz.length; i++) {
	var medjuNiz = niz[i];
	if (medjuNiz % 2 === 0) {
		parni.push(medjuNiz);
	} else {
		neparni.push(medjuNiz);
	}
}

console.log(parni);
console.log(neparni);