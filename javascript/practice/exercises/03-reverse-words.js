/**
 * 🧩 Ejercicio 03 – Reverse Words
 * Enunciado:
 *
 * Escribí una función `reverseWords(str)` que reciba un string con múltiples palabras
 * y devuelva una nueva cadena donde el orden de las palabras esté invertido,
 * pero las palabras individuales mantengan su orden interno.
 *
 * 🔁 No se deben invertir los caracteres dentro de las palabras, solo el orden de aparición.
 *
 * 💡 Tip: Considerá espacios como separadores. Ignorá múltiples espacios consecutivos.
 *
 * Ejemplos:
 */
function reverseWords(str) {
	return str
		.trim()
		.split(' ')
		.filter((word) => word !== '')
		.reverse()
		.join(' ');
}

console.log(reverseWords('El sol brilla hoy')); // → "hoy brilla sol El"
console.log(reverseWords('  JavaScript   es  genial ')); // → "genial es JavaScript"
console.log(reverseWords('muy      muy      bien   ')); // → "bien muy muy"
console.log(reverseWords('')); // → ""
