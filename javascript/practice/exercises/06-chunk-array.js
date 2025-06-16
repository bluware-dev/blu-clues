/**
 * 🧩 Ejercicio 06 – Chunk Array
 * Enunciado:
 *
 * Escribí una función `chunkArray(arr, size)` que divida un array en múltiples subarrays (chunks),
 * cada uno con un máximo de `size` elementos. El último chunk puede tener menos elementos si no alcanza.
 *
 * No usar librerías externas (tipo Lodash).
 *
 * Puntos clave:
 * - Debe mantener el orden original.
 * - Usar `slice()` o índice manual, como prefieras.
 *
 * Ejemplos:
 */
function chunkArray(arr, size) {
	const result = [];
	for (let i = 0; i < arr.length; i += size) {
		result.push(arr.slice(i, i + size));
	}
	return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // → [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5], 3)); // → [[1, 2, 3], [4, 5]]
console.log(chunkArray([], 4)); // → []
console.log(chunkArray([1, 2], 5)); // → [[1, 2]]
