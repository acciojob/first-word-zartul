function firstWord(s) {
s = s.trimStart();
let spaceIndex = s.indexOf(' ');
if (spaceIndex === -1) {
	return s;
}
return s.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
