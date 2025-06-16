// - Condicionales
const x = 10;
if (x % 2 === 0) console.log('par');
else console.log('impar');

const mensaje = x > 5 ? 'mayor' : 'menor o igual';
console.log(mensaje);

switch (mensaje) {
	case 'mayor':
		console.log('x > 5');
		break;
	default:
		console.log('x ≤ 5');
}

// - Bucles
for (let i = 0; i < 3; i++) console.log(i);
let j = 0;
while (j < 3) {
	console.log(j);
	j++;
}
let k = 0;
do {
	console.log(k);
	k++;
} while (k < 3);

// - Iteradores
const obj = { a: 1, b: 2 };
for (const key in obj) console.log(key, obj[key]); // key, value
const arr = ['a', 'b', 'c'];
for (const val of arr) console.log(val); // value
arr.forEach((val, index) => console.log(index, val)); // index, value

// - Control interno
for (let n = 0; n < 5; n++) {
	if (n === 3) continue;
	if (n === 4) break;
	console.log(n);
}

// - Excepciones
function fallo(flag) {
	if (!flag) throw new TypeError('flag inválido');
	return 'ok';
}
try {
	fallo(false); // Lanza un error
} catch (e) {
	console.error(e.name, e.message); // TypeError flag inválido
} finally {
	console.log('fin');
}

// - Asincronía y errores
Promise.resolve('dato')
	.then((d) => {
		throw new Error(`${d}: fallo`);
	})
	.catch((e) => console.warn(e.message));

// - Evaluación condicional

// Truthy / Falsy
if ('') console.log('esto no se ejecuta');
if ('texto') console.log('esto sí'); // truthy

// &&: devuelve el primer falsy o el último truthy
console.log('A' && 0); // 0
console.log('A' && 'B'); // "B"

// ||: devuelve el primer truthy
console.log(null || 'defecto'); // "defecto"
console.log('valor' || 'otro'); // "valor"

// ?? (nullish coalescing): solo considera null o undefined
console.log(0 ?? 100); // 0 (no lo reemplaza)
console.log(null ?? 100); // 100
console.log(null ?? undefined); // undefined (devuelve el ultimo valor)

// ?. (optional chaining): evita error si es null o undefined
let undefinedObj;
console.log(undefinedObj?.prop); // undefined

const persona = { nombre: 'Ana' };
console.log(persona?.nombre); // "Ana"
console.log(persona?.edad); // undefined (no lanza error)
