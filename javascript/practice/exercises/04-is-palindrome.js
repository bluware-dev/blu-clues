/**
 * 🧩 Ejercicio 04 – Is Palindrome
 * Enunciado:
 *
 * Escribí una función `isPalindrome(str)` que determine si un string es un palíndromo,
 * ignorando mayúsculas, espacios y signos de puntuación.
 *
 * Un palíndromo es una palabra o frase que se lee igual al derecho y al revés.
 *
 * Consideraciones:
 * - Ignorá símbolos, espacios y diferencias de mayúsculas.
 * - Podés asumir que `str` siempre es un string.
 *
 * Ejemplos:
 */
function isPalindrome(str) {
	return (
		str.toLowerCase().replace(/[^a-z]/gi, '') ===
		str
			.toLowerCase()
			.replace(/[^a-z]/gi, '')
			.split('')
			.reverse()
			.join('')
	);
}

console.log(isPalindrome('Anita lava la tina')); // → true
console.log(isPalindrome('A man, a plan, a canal, Panama')); // → true
console.log(isPalindrome('JavaScript')); // → false
console.log(isPalindrome("No 'x' in Nixon")); // → true
