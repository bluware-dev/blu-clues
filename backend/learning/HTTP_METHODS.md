# HTTP Methods – Conceptos Generales

| Método      | Propósito principal                                                            | Idempotente | Seguro | Comentarios                                                                                     |
| ----------- | ------------------------------------------------------------------------------ | ----------- | ------ | ----------------------------------------------------------------------------------------------- |
| **GET**     | Recuperar información de un recurso sin modificarlo.                           | Sí          | Sí     | La request puede repetirse sin afectar el estado del servidor. Se usa para leer datos.          |
| **POST**    | Enviar datos al servidor para crear un recurso nuevo o procesar información.   | No          | No     | Cada request puede generar un efecto diferente (nuevo ID, acción en base de datos).             |
| **PUT**     | Actualizar completamente un recurso existente o crearlo si no existe.          | Sí          | No     | Reemplaza todo el recurso; repetir la request produce el mismo resultado.                       |
| **PATCH**   | Modificar parcialmente un recurso existente.                                   | No\*        | No     | No siempre idempotente; depende de cómo el servidor maneje la actualización parcial.            |
| **DELETE**  | Eliminar un recurso existente.                                                 | Sí          | No     | Repetir DELETE sobre el mismo recurso normalmente no cambia el resultado (404 si ya no existe). |
| **OPTIONS** | Consultar los métodos HTTP permitidos y capacidades del servidor para una URL. | Sí          | Sí     | Útil para CORS y descubrimiento de API.                                                         |
| **HEAD**    | Obtener solo las cabeceras de un recurso, sin el body.                         | Sí          | Sí     | Similar a GET, pero solo devuelve metadata.                                                     |
| **TRACE**   | Prueba de loop-back del request en el servidor.                                | Sí          | Sí     | Raramente usado, puede ser riesgoso por seguridad.                                              |
| **CONNECT** | Establece un túnel hacia un recurso remoto (usado en proxies).                 | No          | No     | Principalmente usado para HTTPS a través de un proxy.                                           |

---

## Notas generales

1. **Idempotencia:** Repetir la misma request produce el mismo efecto en el servidor (importante para PUT, GET, DELETE).
2. **Seguridad:** Métodos “seguros” no deben modificar recursos; GET y HEAD son ejemplos.
3. **Convenciones REST:**

    - GET → lectura
    - POST → creación
    - PUT/PATCH → actualización
    - DELETE → eliminación
    - OPTIONS/HEAD → soporte y metadata

---

## Extra: CORS (Cross-Origin Resource Sharing)

CORS es un mecanismo de seguridad del **navegador** que regula si un frontend puede hacer requests
a una API que está en un **origen distinto** (otro dominio, puerto o protocolo).

---

**Ejemplo:**

-   **Frontend:** `https://example.com`
-   **API:** `https://api.example.com`

1. El navegador detecta que son orígenes distintos → dispara una **preflight request (OPTIONS)**.
2. La API responde con cabeceras que indican qué orígenes y métodos están permitidos:

```http

Access-Control-Allow-Origin: [https://example.com](https://example.com)
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: Content-Type, Authorization

```

3. Si el origen está autorizado (`https://example.com`), el navegador permite la request real.
4. Si no lo está, el navegador bloquea la respuesta.

---

### Puntos clave

-   ✅ **Sirve para controlar qué frontends en navegador pueden usar tu API.**
-   ✅ Protege contra **uso indebido desde sitios web ajenos**.
-   ⚠️ **No protege contra accesos directos** con `curl`, Postman o backends externos.
-   ⚠️ **No reemplaza la autenticación** ni la autorización en tu API.

👉 En resumen: **CORS = política del navegador**. Es un filtro extra que evita que cualquiera
monte un frontend externo y use tu API sin permiso.
