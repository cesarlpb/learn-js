# Introducción a la API Temporal

La API Temporal es un reemplazo moderno para el objeto Date en JavaScript. Resuelve muchos de los problemas y limitaciones del objeto Date ofreciendo:

- **Soporte nativo para zonas horarias:** Maneja zonas horarias sin necesidad de librerías externas.
- **Inmutabilidad:** Todas las operaciones devuelven nuevos objetos, evitando efectos secundarios indeseados.
- **Parseo y aritmética confiable:** Parseo estricto en formato ISO 8601 y operaciones de fecha/hora sencillas.
- **Soporte para calendarios no gregorianos:** Permite trabajar con diferentes calendarios culturales.
- **Estructura clara de la API:** Tipos separados para fechas simples, horas, duraciones y fechas con zona horaria.

---

# Pasos para Probar la API Temporal

## 1. Configuración del Proyecto

1. **Crear un nuevo directorio para el proyecto:**

```bash
mkdir temporal-api
cd temporal-api
```

Inicializar npm e instalar el polyfill:

```bash
npm init -y
npm install @js-temporal/polyfill
```

Instalar Snowpack (o tu empaquetador preferido) como dependencia de desarrollo:

```bash
npm install --save-dev snowpack
```

Crear los archivos del proyecto:

`index.html`

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>API Temporal</title>
    <script src="temporal.js" type="module"></script>
  </head>
  <body></body>
</html>
```

`temporal.js`

```javascript
import { Temporal } from "@js-temporal/polyfill";
```

```javascript
// Ejemplo: Obtener la fecha y hora actual en formato ISO
const ahora = Temporal.Now.plainDateTimeISO();
console.log(ahora.toString());
Principales Casos de Uso y Ventajas Respecto al Objeto Date
Temporal.Now
```
Obtener la fecha y hora actual:
Obtener la fecha y hora completa con precisión:

```javascript
const ahora = Temporal.Now.plainDateTimeISO();
console.log(ahora.toString()); // Ejemplo: 2022-08-15T17:26:43.63340363
```
Obtener la fecha y la hora por separado:

```javascript
const fechaActual = Temporal.Now.plainDateISO();
const horaActual = Temporal.Now.plainTimeISO();
console.log(fechaActual.toString()); // Ejemplo: 2022-08-15
console.log(horaActual.toString());  // Ejemplo: 17:27:51.688660566
Temporal.PlainDate y Temporal.ZonedDateTime
```

Trabajar con fechas específicas:
Crear una fecha simple:

```javascript
const fecha = new Temporal.PlainDate(2022, 8, 8);
console.log(fecha.toString()); // "2022-08-08"
```

Crear una fecha a partir de una cadena:

```javascript
const fechaDesdeStr = Temporal.PlainDate.from("2022-08-08");
console.log(fechaDesdeStr.toString());
```

Manejo de zonas horarias de forma sencilla:
Crear una fecha con zona horaria:

```javascript
const fechaZonificada = Temporal.ZonedDateTime.from({
  year: 2022,
  month: 8,
  day: 8,
  timeZone: Temporal.Now.timeZone(),
});
console.log(fechaZonificada.toString());
```

Aritmética de Fechas con Inmutabilidad
Suma y resta de intervalos:
Añadir o restar días sin modificar el objeto original:

```javascript
const hoy = Temporal.Now.plainDateISO();
const manana = hoy.add({ days: 1 });
const ayer = hoy.subtract({ days: 1 });
console.log(hoy.toString(), manana.toString(), ayer.toString());
```

Cálculo de duración entre fechas:
Calcular la duración entre dos fechas:

```javascript
const fecha1 = Temporal.Now.plainDateISO();
const fecha2 = new Temporal.PlainDate(2022, 1, 1);
console.log(fecha1.since(fecha2).toString()); // Ejemplo: "P226D"
Temporal.Duration
```

Representación de períodos de tiempo:
Crear y manipular duraciones:

```javascript
const duracion = Temporal.Duration.from({ days: 2, months: 8 });
console.log(duracion.toString()); // "P8M2D"
```

Calcular duración total en una unidad específica:

```javascript
const duracionMinutos = Temporal.Duration.from({ hours: 12, minutes: 30 });
console.log(duracionMinutos.total("minutes")); // Ejemplo: 750
Temporal.TimeZone
```

Manejo de zonas horarias:
Especificar una zona horaria concreta:

```javascript
const zonaHoraria = Temporal.TimeZone.from("America/Chicago");
console.log(zonaHoraria.toString()); // "America/Chicago"
```

Obtener la zona horaria local:

```javascript
const zonaLocal = Temporal.Now.timeZone();
console.log(zonaLocal.toString()); // Ejemplo: "Asia/Karachi"
```

## Características Avanzadas de la API Temporal
Soporte para calendarios no gregorianos:
Permite trabajar con diferentes calendarios culturales usando el objeto Temporal.Calendar.

Precisión con Temporal.Instant:
Trabaja con marcas de tiempo precisas hasta nanosegundos, ideal para aplicaciones que requieren alta precisión, como el registro de eventos o datos en tiempo real.

Manejo robusto de zonas horarias con Temporal.ZonedDateTime:
Permite convertir fechas y horas entre diferentes zonas horarias de manera sencilla, lo que resulta esencial para aplicaciones globales.

Métodos auxiliares para operaciones con fechas:
Métodos como with, add, subtract, since y until simplifican la aritmética de fechas y garantizan inmutabilidad.

## ¿Por Qué Temporal es Mejor que Date?
Diseño Moderno de la API:
Temporal ofrece una API más limpia e intuitiva para la gestión de fechas y horas.

Inmutabilidad:
Las operaciones no modifican el objeto original, lo que reduce la posibilidad de errores y efectos secundarios.

Manejo Integral de Zonas Horarias:
A diferencia de Date, Temporal tiene soporte nativo para zonas horarias, lo que simplifica el desarrollo de aplicaciones internacionales.

Parseo Estricto ISO 8601:
Temporal evita las inconsistencias del objeto Date al usar un formato estricto, eliminando errores comunes en el parseo de fechas.

Operaciones de Aritmética de Fechas:
Sumar, restar y comparar fechas es más sencillo y confiable con Temporal.

Recomendaciones
Utiliza Temporal en Nuevos Proyectos:
Si necesitas manejar fechas y horas de forma robusta y precisa, especialmente con conversiones de zonas horarias o cálculos complejos, Temporal es la opción ideal.

Emplea el Polyfill Hasta que el Soporte Nativo sea Generalizado:
Temporal se encuentra en fase experimental (Stage 3) y aún no es soportado por todos los navegadores. Utiliza @js-temporal/polyfill para comenzar a trabajar con la API de inmediato.

Explora la Documentación:
Familiarízate con los distintos tipos de datos y métodos que ofrece Temporal para aprovechar al máximo sus capacidades.

Piensa en la Evolución del Proyecto:
Adoptar Temporal ahora te ayudará a reducir la deuda técnica y a estar preparado para el futuro, cuando se convierta en parte del estándar ECMAScript.

