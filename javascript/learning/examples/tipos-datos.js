// - Objetos
const usuario = { nombre: 'Ana', edad: 30, activo: true }; // literal de objeto
console.log(usuario.nombre); // acceso con punto
console.log(usuario['edad']); // acceso con corchetes
Object.defineProperty(usuario, 'id', { value: 123, writable: false }); // descriptor: propiedad inmutable
console.log(Object.keys(usuario)); // lista de llaves ["nombre","edad","activo","id"]
console.log(Object.values(usuario)); // lista de valores ["Ana",30,true,123]
console.log(Object.entries(usuario)); // pares [ ["nombre","Ana"], … ]
const { nombre, activo } = usuario; // desestructuración: extrae propiedades

// - Arrays
const nums = [1, 2, 3, 4, 5]; // literal de array
const pares = nums.filter((n) => n % 2 === 0); // filter: elementos según condición
const cuadrados = nums.map((n) => n * n); // map: transforma cada elemento
const suma = nums.reduce((acc, n) => acc + n, 0); // reduce: acumula valor
const existeTres = nums.includes(3); // includes: busca valor
const idxCuatro = nums.findIndex((n) => n === 4); // findIndex: índice del elemento
const algunoMayor = nums.some((n) => n > 5); // some: true si algún elemento cumple
const todosPos = nums.every((n) => n > 0); // every: true si todos cumplen
nums.push(6); // push: añade al final
nums.pop(); // pop: elimina último
nums.shift(); // shift: elimina primero
nums.unshift(0); // unshift: añade al inicio
nums.splice(2, 1, 10, 11); // splice: elimina/inserta en posición
const [primero, segundo, ...resto] = nums; // destructuring: extrae y resto

// - Map / Set
const mapa = new Map(); // colección clave→valor
mapa.set('a', 1); // añade par
mapa.set(2, 'dos');
console.log(mapa.get('a')); // obtén valor por clave
console.log(mapa.has(3)); // verifica existencia de clave
console.log(mapa.size); // tamaño de la colección
const conjunto = new Set([1, 2, 2, 3]); // valores únicos
conjunto.add(4); // añade valor
console.log(conjunto.has(2)); // true
console.log(conjunto.size); // tamaño
// WeakMap y WeakSet no son iterables y claves/valores se recolectan si no hay referencias fuertes

// - Técnicas de Manipulación
const a = [1, 2];
const b = [3, 4];
const combinado = [...a, ...b]; // spread: clona y concatena arrays
const clonUsuario = { ...usuario }; // spread en objetos
function cuenta(...args) {
	return args.length;
} // rest: agrupa argumentos en array
console.log(cuenta(1, 2, 3)); // 3
function saluda({ nombre, edad }) {
	// destructuring en parámetros
	console.log(`${nombre} tiene ${edad} años`); // template literal para interpolación
}
saluda(usuario);
