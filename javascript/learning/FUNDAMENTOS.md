# Fundamentos de JavaScript

Una guía práctica y progresiva para dominar **JavaScript** desde conceptos básicos hasta técnicas avanzadas.

## Índice

-   [Definiciones Contextuales](#definiciones-contextuales)
-   [Conceptos Base](#conceptos-base)
-   [Tipos de Datos](#tipos-de-datos)
-   [Control de Flujo](#control-de-flujo)
-   [Estructuras de Datos](#estructuras-de-datos)
-   [Temas Avanzados](#temas-avanzados)
-   [Programación Funcional](#programación-funcional)
-   [Buenas Prácticas](#buenas-prácticas)

## Definiciones Contextuales

-   **Hoisting**: Comportamiento donde declaraciones de variables y funciones se procesan antes de la ejecución del código, "elevándolas" al inicio de su ámbito.
-   **Event Loop**: Mecanismo que maneja la ejecución asíncrona mediante call stack, task queue y microtask queue.
-   **Closure**: Función que retiene acceso a variables de su ámbito léxico después de que la función externa retorna.
-   **Coerción**: Conversión automática de tipos que JavaScript realiza durante operaciones entre tipos diferentes.
-   **TDZ (Temporal Dead Zone)**: Estado donde variables `let`/`const` existen pero no son accesibles hasta su inicialización.
-   **Prototype Chain**: Mecanismo de herencia donde objetos pueden acceder a propiedades de otros objetos a través de la cadena de prototipos.

[<small>Volver al Índice</small>](#índice)

## Conceptos Base

**Variables y Declaraciones**

JavaScript maneja tres tipos de declaraciones con características específicas de ámbito y hoisting.

-   `const`: Enlace inmutable con ámbito de bloque. Los objetos referenciados pueden mutar.
-   `let`: Enlace mutable con ámbito de bloque. Permanece en TDZ hasta inicialización.
-   `var`: Ámbito de función. Hoisted como `undefined`. Práctica obsoleta.

**Funciones**

Las funciones son objetos de primera clase con diferentes formas de declaración.

-   Declaración: `function f() {}` - Completamente hoisted
-   Expresión: `const f = function() {}` - Solo variable hoisted
-   Arrow functions: `() => {}` - `this` léxico, sin hoisting
-   Métodos de objetos y clases

**Ámbito y Contexto**

Sistema de resolución de variables basado en ámbito léxico.

-   Ámbito global: `window` (navegador) o `global` (Node.js)
-   Ámbito de función: cada función crea nuevo contexto
-   Ámbito de bloque: `{}` crean ámbito para `let`/`const`
-   Closures: retención de ámbito léxico

**Event Loop y Asincronía**

Arquitectura fundamental para manejar operaciones asíncronas.

-   Call Stack: contextos de ejecución LIFO
-   Task Queue: macrotareas (setTimeout, eventos DOM)
-   Microtask Queue: promises, queueMicrotask (prioridad alta)

[Ejemplos](examples/conceptos-base.js)

[<small>Volver al Índice</small>](#índice)

## Tipos de Datos

**Tipos Primitivos**

Valores inmutables almacenados en el stack.

-   `string`: Secuencias UTF-16. Literales: `"texto"`, `'texto'`, `` `template` ``
-   `number`: IEEE 754 doble precisión. Incluye `Infinity`, `-Infinity`, `NaN`
-   `boolean`: `true` y `false`
-   `null`: Ausencia intencional de valor. `typeof null === "object"` (bug histórico)
-   `undefined`: Variables no inicializadas o propiedades inexistentes
-   `symbol`: Identificadores únicos. `Symbol("desc")`, `Symbol.for("key")`
-   `bigint`: Enteros de precisión arbitraria. `123n`, `BigInt(123)`

**Tipos de Referencia**

Objetos mutables almacenados en el heap.

-   `object`: Colecciones clave-valor. Base de todos los objetos
-   `array`: Objetos especializados con índices numéricos
-   `function`: Objetos ejecutables con propiedades adicionales
-   `date`: Representación de fechas y tiempo
-   `regexp`: Objetos para coincidencia de patrones

**Coerción de Tipos**

JavaScript realiza conversiones automáticas entre tipos.

-   Coerción implícita: `"5" + 1` → `"51"`, `"5" - 1` → `4`
-   Coerción explícita: `Number()`, `String()`, `Boolean()`
-   Comparaciones: `==` (con coerción) vs `===` (estricta)
-   `Object.is()` determina si dos valores son el mismo valor.

**Verificación de Tipos**

- `typeof`: retorna el tipo de dato del valor (primitivo u “function”/“object”).
- `instanceof`: comprueba si un objeto hereda de un constructor en su cadena de prototipos.
- `Array.isArray()`: verifica si un valor es un array.
- `Object.prototype.toString.call()`: devuelve `"[object Tipo]"`, indicando la clase interna exacta.

[Ejemplos](examples/tipos-datos.js)

[<small>Volver al Índice</small>](#índice)

## Control de Flujo

**Estructuras Condicionales**  
- `if` / `else if` / `else`  
- Operador ternario: `condición ? valor1 : valor2`  
- `switch` (coincidencia estricta)  
- Operadores lógicos: `&&`, `||`, `??`

**Repetición**  
- `for` (inicialización; condición; incremento)  
- `while` (precondición)  
- `do…while` (postcondición)  
- `for…in` (claves de objeto)  
- `for…of` (valores iterables)  
- Control interno: `break`, `continue`, `return`

**Excepciones**  
- `try { … } catch (e) { … } finally { … }`  
- Tipos comunes: `Error`, `TypeError`, `ReferenceError`, `SyntaxError`  
- Lanzar: `throw new Error(...)`  
- Propagación de errores en call stack
- Errores en asincronía: `.catch()`, `async/await` + `try/catch`

**Evaluación Condicional**
- _Truthy / Falsy_: valores que se comportan como `true` o `false` en condicionales (`0`, `''`, `null`, `undefined`, `NaN` son falsy)
- `&&`: retorna el primer valor falsy o el último valor
- `||`: retorna el primer valor truthy
- `??`: como `||`, pero solo usa el segundo si el primero es `null` o `undefined`
- `?.`: accede a propiedades sin lanzar error si el objeto es `null` o `undefined``

[Ejemplos](examples/control-flujo.js)

[<small>Volver al Índice</small>](#índice)

## Estructuras de Datos

**Objetos**

Colecciones de pares clave-valor con acceso dinámico.

- Literal: `{ clave: valor }`
- Acceso: `obj.prop` / `obj['prop']`
- Iteración: `Object.keys(obj)`, `Object.values(obj)`, `Object.entries(obj)`
- Descriptores: `Object.defineProperty(obj, 'prop', { writable: false })`
- Desestructuración: `const { a, b } = obj`

**Arrays**

Objetos especializados para colecciones ordenadas.

- Literal: `[v1, v2, …]`
- Transformación: `map()`, `filter()`, `reduce()`
- Búsqueda: `find()`, `findIndex()`, `includes()`
- Validación: `some()`, `every()`
- Mutación: `push()`, `pop()`, `shift()`, `unshift()`, `splice()`
- Desestructuración: `const [x, y, ...rest] = arr`

**Map / Set**

Estructuras de datos especializadas para casos específicos.

- `Map()`: clave→valor, claves de cualquier tipo, `map.set(k,v)`, `map.get(k)`
- `Set()`: valores únicos, `set.add(v)`, `set.has(v)`
- Weak: `WeakMap`, `WeakSet` (referencias débiles, no iterables)

**Técnicas de Manipulación**

- Spread: `...iterable` (clonar, combinar)
- Rest: `function(...args)` (args como array)
- Desestructuración en parámetros: `f({ a, b })`
- Template literals: `` `texto ${var}` ``

[Ejemplos](examples/estructuras-datos.js)

[<small>Volver al Índice</small>](#índice)

## Temas Avanzados

A partir de esta section del apunte, los contenidos van a estar mas detallados.

### Prototipos y Herencia

**¿Qué son los prototipos?**

Imagínate que los prototipos son como **plantillas o moldes** que los objetos pueden usar para obtener propiedades y métodos. Es como tener un "manual de instrucciones" compartido.

**Concepto clave**: Cuando un objeto no tiene una propiedad, JavaScript automáticamente busca en su prototipo, luego en el prototipo del prototipo, y así sucesivamente. Esto se llama **cadena de prototipos**.

**¿Cómo funcionan?**

1. Creas un objeto
2. Si intentas acceder a una propiedad que no existe en ese objeto
3. JavaScript busca en su prototipo automáticamente
4. Si no la encuentra, busca en el prototipo del prototipo
5. Continúa hasta llegar a `null`

**Ejemplo básico**:

```js
// Función constructora (la forma "vieja")
function Animal(nombre) {
    this.nombre = nombre;
}

// Agregamos un método al prototipo
Animal.prototype.hablar = function() {
    return `${this.nombre} hace ruido`;
};

const perro = new Animal('Firulais');
console.log(perro.hablar()); // "Firulais hace ruido"
```

**¿Por qué es útil?** Todos los objetos creados con `Animal` comparten el mismo método `hablar`, ahorrando memoria.

---

## Clases ES6

**¿Qué son las clases?**

Las clases ES6 son simplemente una **sintaxis más limpia** para hacer lo mismo que hacíamos con prototipos. Es *"azúcar sintáctico"* - por debajo sigue siendo el mismo sistema de prototipos.

**Ventajas de las clases:**

- Sintaxis más clara y familiar
- Mejor organización del código
- Funcionalidades adicionales como campos privados

**Estructura básica:**

```js
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    hablar() {
        return `${this.nombre} hace ruido`;
    }
}

const gato = new Animal('Michi');
```

**Herencia con clases:**

```js
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); // Llama al constructor de Animal
        this.raza = raza;
    }
    
    hablar() {
        return `${this.nombre} ladra`;
    }
}
```

**Punto importante**: `extends` crea la herencia, `super()` llama al constructor padre.

---

### Promises (Promesas)

**¿Qué es una Promise?**

Una Promise es como **hacer un pedido en un restaurante**:

- Haces el pedido (creas la Promise)
- Mientras esperas, puedes hacer otras cosas (código no bloqueante)
- Eventualmente recibes tu comida (resolve) o te dicen que no hay (reject)

**Estados de una Promise:**

1. **Pending**: Esperando resultado
2. **Fulfilled**: Completada exitosamente
3. **Rejected**: Falló

**Sintaxis básica:**

```js
const miPromesa = new Promise((resolve, reject) => {
    // Simular operación asíncrona
    setTimeout(() => {
        const exito = true;
        if (exito) {
            resolve("¡Operación exitosa!");
        } else {
            reject("Algo salió mal");
        }
    }, 1000);
});

// Usar la promesa
miPromesa
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));
```

### Async/Await - La forma moderna:

```js
async function miFuncion() {
    try {
        const resultado = await miPromesa;
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
```

**¿Por qué usar async/await?** Hace que el código asíncrono se lea como código síncrono, más fácil de entender.

### Utilidades importantes:

**Promise.all()** - Espera que TODAS se completen:

```js
const promesas = [promesa1, promesa2, promesa3];
const resultados = await Promise.all(promesas);
// Si una falla, todas fallan
```

**Promise.race()** - La primera que termine (buena o mala):

```js
const resultado = await Promise.race([promesaRapida, promesaLenta]);
// Solo importa la primera en completarse
```

---

### Módulos
Organización, encapsulación y reutilización de código.

- **ES6 modules**:
    ```js
    // export.js
    export function f() { }
    // import.js
    import { f } from './export.js';
    ```
- **CommonJS** (Node.js):
    ```js
    module.exports = { f };
    const { f } = require('./export');
    ```
- Bundlers (Webpack, Rollup) realizan tree shaking para eliminar código muerto.
- **Importación dinámica**: `const mod = await import('./mod.js');`

---

### A tener en cuenta:

**Prototipos**: Sistema de herencia de JavaScript donde los objetos pueden "pedir prestadas" propiedades de otros objetos.

**Clases ES6**: Sintaxis moderna para trabajar con prototipos de forma más clara.

**Promises**: Forma de manejar operaciones que toman tiempo sin bloquear el resto del código.

**Async/Await**: Forma más limpia de escribir código que usa Promises.

La clave está en entender que todo esto son herramientas para organizar mejor tu código y manejar operaciones que no son instantáneas (como llamadas a APIs, lectura de archivos, etc.).

*Los ejemplos ya están incluidos*

[<small>(Para una mejor comprension, ver las practicas)</small>](javascript/practice/README.md)

[<small>Volver al Índice</small>](#índice)

## Programación Funcional

### Funciones Puras

**¿Qué es una función pura?**

Una función pura es como una **máquina expendedora**: siempre que ingreses la misma moneda (input), obtienes el mismo producto (output). No importa cuántas veces lo hagas o cuándo lo hagas.

**Características de una función pura**:

- **Mismo input, mismo output**: No importa cuándo la ejecutes
- **Sin efectos secundarios**: No modifica nada fuera de sí misma
- **No depende del estado externo**: Solo usa lo que recibe como parámetros

**Ejemplo de función pura**:

```js
// ✅ PURA
function sumar(a, b) {
    return a + b;
}

// ❌ NO PURA (modifica variable externa)
let contador = 0;
function incrementar() {
    contador++; // Efecto secundario
    return contador;
}
```

**¿Por qué son importantes?**

- **Predecibles**: Siempre sabes qué va a pasar
- **Fáciles de testear**: No dependen de nada externo
- **Reutilizables**: Funcionan en cualquier contexto
- **Más fáciles de debuggear**: Si algo falla, está dentro de la función

### Funciones de Orden Superior

**¿Qué son?**

Son funciones que **trabajan con otras funciones**. Como un jefe que delega tareas: puede recibir funciones como parámetros o devolver funciones como resultado.

**Dos tipos principales**:

**1. Reciben funciones como parámetros**:

```js
function procesarArray(array, operacion) {
    return array.map(operacion);
}

const numeros = [1, 2, 3];
const duplicar = x => x * 2;
const duplicados = procesarArray(numeros, duplicar); // [2, 4, 6]
```

**2. Devuelven funciones**:

```js
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);
```

**Los métodos más importantes de arrays**:

**map()** - Transforma cada elemento:

```js
const numeros = [1, 2, 3];
const cuadrados = numeros.map(x => x * x); // [1, 4, 9]
```

**filter()** - Filtra elementos que cumplen una condición:

```js
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(x => x % 2 === 0); // [2, 4]
```

**reduce()** - Reduce el array a un solo valor:

```js
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((acc, x) => acc + x, 0); // 10
```

### Inmutabilidad

**¿Qué significa inmutabilidad?**

Es como trabajar con **fotocopias en lugar del original**. Nunca modificas los datos originales, siempre creas nuevas versiones.

**¿Por qué es importante?**

- **Previene bugs**: No hay modificaciones accidentales
- **Más fácil de razonar**: Los datos no cambian por sorpresa
- **Mejor para concurrencia**: Múltiples procesos pueden usar los mismos datos

**Técnicas básicas**:

**Para arrays**:

```js
const original = [1, 2, 3];

// ❌ Mutación
original.push(4);

// ✅ Inmutable
const nuevo = [...original, 4];
const sinPrimero = original.slice(1);
```

**Para objetos**:

```js
const persona = { nombre: 'Juan', edad: 25 };

// ❌ Mutación
persona.edad = 26;

// ✅ Inmutable
const personaMayor = { ...persona, edad: 26 };
```

**Object.freeze()** para prevenir cambios:

```js
const config = Object.freeze({ 
    apiUrl: 'https://api.ejemplo.com',
    timeout: 5000 
});
// config.apiUrl = 'otra-url'; // Error en modo estricto
```

### Composición de Funciones

**¿Qué es la composición?**

Es como **armar un pipeline de producción**: la salida de una función se convierte en la entrada de la siguiente. Como una cadena de montaje.

**Ejemplo básico**:

```js
const multiplicarPor2 = x => x * 2;
const sumar3 = x => x + 3;
const convertirString = x => x.toString();

// Composición manual
const resultado = convertirString(sumar3(multiplicarPor2(5))); // "13"

// Función de composición
const pipe = (...funciones) => (valor) => 
    funciones.reduce((acc, fn) => fn(acc), valor);

const procesar = pipe(
    multiplicarPor2,
    sumar3,
    convertirString
);

const resultado2 = procesar(5); // "13"
```

**Ventajas**:

- **Funciones pequeñas y enfocadas**: Cada una hace una cosa
- **Reutilizable**: Puedes combinar las funciones de diferentes maneras
- **Legible**: El código se lee como una secuencia de pasos

### Técnicas Avanzadas

**Memoización** - Recordar resultados para evitar recálculos:

```js
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const resultado = fn(...args);
        cache[key] = resultado;
        return resultado;
    };
}

const fibonacciLento = n => n <= 1 ? n : fibonacciLento(n-1) + fibonacciLento(n-2);
const fibonacciRapido = memoize(fibonacciLento);
```

**Currying** - Convertir una función de múltiples argumentos en una secuencia de funciones de un argumento:

```js
// Función normal
const sumar = (a, b, c) => a + b + c;

// Función currificada
const sumarCurry = a => b => c => a + b + c;

const sumar5 = sumarCurry(5);
const sumar5y3 = sumar5(3);
const resultado = sumar5y3(2); // 10
```

---

**Resumen para recordar**:

**Funciones puras**: Como máquinas expendedoras - mismo input, mismo output, sin efectos secundarios.

**Funciones de orden superior**: Funciones que trabajan con otras funciones (map, filter, reduce).

**Inmutabilidad**: Trabajar con copias, nunca modificar el original.

**Composición**: Encadenar funciones pequeñas para crear operaciones complejas.

La programación funcional te ayuda a escribir código más predecible, testeable y fácil de mantener.

*Los ejemplos ya están incluidos*

[<small>(Para una mejor comprension, ver las practicas)</small>](javascript/practice/README.md)

[<small>Volver al Índice</small>](#índice)

## Buenas Prácticas

Las buenas prácticas no son sugerencias - son **reglas fundamentales** que separan el código profesional del código amateur. Siguiéndolas, tu código será mantenible, escalable y digno de un entorno de producción.

### Estilo de Código

**¿Por qué importa el estilo?**

El código se lee **10 veces más** de lo que se escribe. Un estilo consistente hace que cualquier desarrollador pueda entender tu código inmediatamente.

**Convenciones de nomenclatura:**

- **camelCase**: variables, funciones, métodos (`getUserName`, `calculateTotal`)
- **PascalCase**: clases, constructores (`UserManager`, `DatabaseConnection`)
- **SNAKE_CASE**: constantes (`API_BASE_URL`, `MAX_RETRY_ATTEMPTS`)
- **kebab-case**: archivos, URLs (`user-service.js`, `/api/user-data`)

**Organización de imports:**

```js
// 1. Librerías externas
import React from 'react';
import axios from 'axios';

// 2. Módulos internos
import { UserService } from '../services/UserService';
import { validateEmail } from '../utils/validation';

// 3. Componentes locales
import Header from './Header';
import Footer from './Footer';
```

**Herramientas esenciales:**

- **ESLint**: Detecta errores y enforce reglas de estilo
- **Prettier**: Formatea código automáticamente
- **Husky**: Git hooks para ejecutar linters antes de commits

### Documentación

**Regla de oro:** Si necesitas explicar qué hace tu código, probablemente está mal escrito. Pero si necesitas explicar **por qué** lo hace, documéntalo.

**JSDoc para funciones públicas:**

```js
/**
 * Calcula el precio total incluyendo impuestos
 * @param {number} basePrice - Precio base del producto
 * @param {number} taxRate - Tasa de impuesto (0.21 para 21%)
 * @returns {number} Precio total con impuestos
 * @throws {Error} Si los parámetros no son números válidos
 */
function calculateTotalPrice(basePrice, taxRate) {
    if (typeof basePrice !== 'number' || typeof taxRate !== 'number') {
        throw new Error('Los parámetros deben ser números');
    }
    return basePrice * (1 + taxRate);
}
```

**Comentarios que agregan valor:**

```js
// ❌ Comentario inútil
let x = 5; // Asigna 5 a x

// ✅ Comentario valioso
// Timeout de 5 segundos porque la API externa es lenta
const API_TIMEOUT = 5000;

// Workaround para bug en Chrome < 89
// TODO: Remover cuando dejemos de soportar Chrome 88
if (navigator.userAgent.includes('Chrome/8')) {
    // implementación alternativa
}
```

### Manejo de Errores

**Principio fail-fast:** Es mejor que el programa falle inmediatamente que continuar en un estado inconsistente.

**Niveles de manejo:**

**1. Validación temprana:**

```js
function processUser(user) {
    // Fail-fast: validar al principio
    if (!user || !user.email || !user.name) {
        throw new Error('User data is incomplete');
    }
    
    // Continuar con lógica
    return normalizeUser(user);
}
```

**2. Try-catch apropiado:**

```js
// ❌ Catch demasiado amplio
try {
    const data = JSON.parse(response);
    const user = processUser(data);
    saveUser(user);
} catch (error) {
    console.log('Error'); // ¿Qué error?
}

// ✅ Manejo específico
try {
    const data = JSON.parse(response);
    const user = processUser(data);
    await saveUser(user);
} catch (error) {
    if (error instanceof SyntaxError) {
        throw new Error('Invalid JSON response');
    } else if (error.name === 'ValidationError') {
        throw new Error(`User validation failed: ${error.message}`);
    } else {
        // Re-throw errores no manejados
        throw error;
    }
}
```

**3. Logging estructurado:**

```js
// ❌ Log inútil
console.log('Error');

// ✅ Log útil
console.error('Failed to save user', {
    userId: user.id,
    error: error.message,
    timestamp: new Date().toISOString(),
    stack: error.stack
});
```

### Rendimiento

**Regla fundamental:** Primero haz que funcione, después haz que sea rápido. No optimices prematuramente.

**Técnicas clave:**

**Lazy loading:**

```js
// Cargar módulos solo cuando se necesitan
const heavyModule = await import('./heavy-calculations');
const result = heavyModule.performComplexCalculation(data);
```

**Memoización para cálculos costosos:**

```js
const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

const expensiveCalculation = memoize((data) => {
    // Cálculo costoso aquí
    return result;
});
```

**Debouncing para eventos frecuentes:**

```js
function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Usar en búsquedas
const handleSearch = debounce((query) => {
    searchAPI(query);
}, 300);
```

### Organización del Código

**Separación de responsabilidades:**

```js
// ❌ Todo en una función
function handleUserRegistration(userData) {
    // Validación
    if (!userData.email) throw new Error('Email required');
    
    // Formateo
    userData.email = userData.email.toLowerCase();
    
    // Lógica de negocio
    const user = new User(userData);
    
    // Persistencia
    database.save(user);
    
    // Notificación
    emailService.sendWelcome(user.email);
}

// ✅ Separado por responsabilidades
function handleUserRegistration(userData) {
    const validatedData = validateUserData(userData);
    const formattedData = formatUserData(validatedData);
    const user = createUser(formattedData);
    
    saveUser(user);
    notifyUser(user);
    
    return user;
}
```

**Arquitectura modular:**

```
src/
├── services/          # Lógica de negocio
│   ├── UserService.js
│   └── EmailService.js
├── utils/             # Utilidades reutilizables
│   ├── validation.js
│   └── formatting.js
├── models/            # Modelos de datos
│   └── User.js
└── controllers/       # Controladores de API
    └── UserController.js
```

### Seguridad

**Validación de entrada SIEMPRE:**

```js
function sanitizeInput(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be string');
    }
    
    // Remover caracteres peligrosos
    return input
        .replace(/<script[^>]*>.*?<\/script>/gi, '')
        .replace(/<[^>]*>/g, '')
        .trim();
}

// Validar en el servidor, no confiar en el cliente
function processUserInput(data) {
    const sanitized = sanitizeInput(data);
    
    if (sanitized.length > 1000) {
        throw new Error('Input too long');
    }
    
    return sanitized;
}
```

**Content Security Policy (CSP):**

```html
<!-- Prevenir XSS -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; script-src 'self' 'unsafe-inline';">
```

**Principios de seguridad:**

- **Nunca confíes en datos del cliente**
- **Valida y sanitiza toda entrada**
- **Usa HTTPS siempre**
- **Mantén dependencias actualizadas**
- **Principio de menor privilegio**

### Testing

**Pirámide de testing:**

- **70% Unit tests**: Funciones individuales
- **20% Integration tests**: Interacción entre módulos
- **10% E2E tests**: Flujos completos de usuario

**Ejemplo de test unitario:**

```js
// userService.test.js
describe('UserService', () => {
    test('should create user with valid data', () => {
        const userData = { name: 'John', email: 'john@example.com' };
        const user = UserService.createUser(userData);
        
        expect(user.name).toBe('John');
        expect(user.email).toBe('john@example.com');
        expect(user.id).toBeDefined();
    });
    
    test('should throw error with invalid email', () => {
        const userData = { name: 'John', email: 'invalid-email' };
        
        expect(() => {
            UserService.createUser(userData);
        }).toThrow('Invalid email format');
    });
});
```

---

## Reglas de Oro

1. **Código legible > Código inteligente**
2. **Funciona > Perfecto**
3. **Simple > Complejo**
4. **Testeable > Rápido**
5. **Consistente > Personal**

Las buenas prácticas no son restricciones - son **libertades**. Te liberan de bugs, de código legacy imposible de mantener, y de noches sin dormir debuggeando.

---

*Los ejemplos ya están incluidos*

[<small>(Para una mejor comprensión, ver las prácticas de buenas prácticas)</small>](javascript/practice/README.md)

[<small>Volver al Índice</small>](#índice)
