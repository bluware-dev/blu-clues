/**
 * 🧩 Ejercicio 05 – Flatten Array
 * Enunciado:
 *
 * Escribí una función `flattenArray(arr)` que tome un array que puede contener
 * elementos anidados de cualquier profundidad y devuelva un nuevo array completamente plano.
 *
 * Sin usar `Array.prototype.flat()` ni `.flatMap()`.
 *
 * Puntos clave:
 * - Puede haber arrays anidados dentro de arrays, en cualquier profundidad.
 * - Se espera un solo array plano al final.
 *
 * Ejemplos:
 */
function flattenArray(arr) {
	let collected = [];
	for (const element of arr) {
		if (Array.isArray(element)) {
			collected = collected.concat(flattenArray(element));
		} else {
			collected.push(element);
		}
	}
	return collected;
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // → [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // → [1, 2, 3, 4, 5]
console.log(flattenArray([[['a']], [['b']], 'c'])); // → ["a", "b", "c"]
console.log(flattenArray([1, null, [2, [3, null]]])); // → [1, null, 2, 3, null]
console.log(flattenArray([])); // → []
