/**
 * 🧩 Ejercicio 01 – Remove Duplicates from Array
 * Enunciado:
 *
 * Escribí una función removeDuplicates(arr) que reciba un array de elementos (números, strings, etc.)
 * y devuelva un nuevo array sin duplicados, conservando el orden original de aparición.
 * Restricciones:
 *
 * No usar Set directamente (opcional si querés complicarlo).
 *
 * Considerá elementos estrictamente iguales (===).
 *
 * Mantené el orden.
 */

const removeDuplicatesSet = (arr) => [...new Set(arr)]; // Solución facil y rapida.

function removeDuplicatesMap(arr) {
	const finalArr = [];
	arr.map((x) => (finalArr.includes(x) ? x : finalArr.push(x)));
	return finalArr;
}

// Correccion
function removeDuplicates(arr) {
	const finalArr = [];
	arr.forEach((x) => {
		if (!finalArr.includes(x)) finalArr.push();
	});
	return finalArr;
}

// Ejemplos:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // → [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c'])); // → ["a", "b", "c"]
console.log(removeDuplicates([])); // → []
