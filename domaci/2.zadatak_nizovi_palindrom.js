var provera = prompt("Palindrom ili ne?");

var palindrom = function(string) {
 	var obrnutiString = "";
 	for (var i = string.length - 1; i >= 0; i--) {
 		obrnutiString += string[i];
 	}
 	return obrnutiString;
 }

var konacno = palindrom(provera);

if (provera === konacno) {
	console.log("Reč je palindrom.");
} else {
	console.log("Reč nije palindrom.");
}
