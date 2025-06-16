// - Variables y constantes
const PI = 3.1416; // valor fijo
let nombre = 'Juan'; // redeclarable en bloque
// evitar var; su ámbito es función, no bloque

// - Funciones clásicas y modernas
function saludar(nombre = 'amigo') {
	return `Hola, ${nombre}!`; // hoisted
}

const despedir = function (nombre) {
	return `Adiós, ${nombre}!`; // expresión; no hoisted
};

const saludarFlecha = (nombre) => `Hola, ${nombre}!`; // sintaxis concisa

// - Desestructuración y parámetros rest
function perfil({ nombre, edad }, ...hobbies) {
	return `${nombre} (${edad} años) hace: ${hobbies.join(', ')}`;
}
const usuario = { nombre: 'Ana', edad: 25 };
console.log(perfil(usuario, 'pintar', 'leer')); // Ana (25 años) hace: pintar, leer

// - Ámbito léxico y bloque
{
	let x = 1;
	const y = 2;
	// x, y existen aquí
}
// x, y no existen aquí

// - Closure: contador privado
function crearContador() {
	let cuenta = 0;
	return () => ++cuenta;
}
const contador = crearContador();
console.log(contador(), contador(), contador()); // 1 2 3

// - Event Loop: microtask vs macrotask
console.log('Inicio');

/**
 * ¿Que es setTimeout, Promise, resolve, then?:
 * - setTimeout(funcion, tiempo): ejecuta una función después de un retraso en milisegundos.
 * - Promise: objeto que representa una operación asíncrona.
 * - resolve: método para resolver una promise.
 * - then: método para manejar el resultado de una promise.
 */
setTimeout(() => console.log('macrotarea'), 1000); // macrotarea al final (después de 1 segundo)
Promise.resolve().then(() => console.log('microtarea')); // microtarea antes de macrotarea

console.log('Fin'); // Esto se va a imprimir antes de las tareas asíncronas

// - Async/Await simulado
async function simularFetch() {
	const datos = await new Promise((res) =>
		setTimeout(() => res({ ok: true }), 2000)
	);
	console.log('Datos recibidos:', datos);
}
simularFetch();
