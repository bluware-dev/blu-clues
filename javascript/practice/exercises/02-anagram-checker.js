/**
 * 🧩 Ejercicio 02 – Anagram Checker
 *
 * Enunciado:
 *
 * Escribí una función `isAnagram(str1, str2)` que devuelva `true` si ambas cadenas son anagramas una de la otra,
 * y `false` en caso contrario.
 *
 * Definición rápida:
 * Dos palabras son **anagramas** si contienen **exactamente las mismas letras** en **igual cantidad**,
 * pero en **orden diferente**.
 *
 * Consideraciones:
 * - Ignorá mayúsculas y espacios (`"Dormitory"` vs `"Dirty room"` → true).
 * - Solo se comparan caracteres alfabéticos (no números ni símbolos).
 * - Usar `===` entre strings transformadas (no funciones externas).
 *
 * @param {string} str1 - La primera cadena a comparar.
 * @param {string} str2 - La segunda cadena a comparar.
 * @returns {boolean} - `true` si las cadenas son anagramas, `false` en caso contrario.
 */

function isAnagram(str1, str2) {
	const sorter = (str) =>
		str
			.toLowerCase()
			.replace(/[^a-z]/g, '')
			.split('')
			.sort()
			.join('');
	return sorter(str1) === sorter(str2);
}

console.log(isAnagram('listen', 'silent')); // → true
console.log(isAnagram('rail safety', 'fairy tales')); // → true
console.log(isAnagram('hello', 'world')); // → false
