// Probamos el API de Temporal con Node 22

// Nota: cambiamos la extensión de .js a .mjs para indicar a Node que esto es un
// módulo de Javascript

// importamos el polyfill de Temporal:
import { Temporal } from "@js-temporal/polyfill";

console.log("\nObtener la fecha y hora actual en formato ISO:\n")

const ahora = Temporal.Now.plainDateTimeISO();

console.log(ahora) // vemos el objeto Temporal.PlainDateTime
console.log(ahora.toString()); // yyyy-mm-ddThh:mm:ss.(decimales)

console.log("\nFecha y hora actual:\n");

const fechaActual = Temporal.Now.plainDateISO();
const horaActual = Temporal.Now.plainTimeISO();

// Date -> new Date().toLocaleDateString() => "dd-mm-yyyy"
// Date -> new Date().toLocaleTimeString() => "hh:mm:ss"

console.log(fechaActual) // el objeto es más detallado que en el caso de Date
console.log(fechaActual.toString()); // Ejemplo: 2022-08-15
console.log(horaActual)
console.log(horaActual.toString());  // Ejemplo: 17:27:51.688660566

// Cambiamos la representación a español:
// Identificadores de zonas horarias:
// https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

console.log("\nZona horaria:\n");
console.log(Temporal.Now.timeZoneId()); // "America/<ciudad, país, región>", etc...

// Representamos fecha y hora en local (notación en español):
console.log("\nFecha y hora en local:\n");
console.log(fechaActual.toLocaleString());
console.log(horaActual.toLocaleString());

// Trabajar con una fecha concreta:

const fecha = new Temporal.PlainDate(2025, 12, 31);
console.log("\nNoche vieja de 2025:");
console.log(fecha.toString()); // "2022-12-31"
console.log("\nNoche vieja de 2025 en local:");
console.log(fecha.toLocaleString());

console.log("\nFecha con zona horaria:");
const fechaZonificada = Temporal.ZonedDateTime.from({
  year: 2022,
  month: 8,
  day: 8,
  timeZone: "America/New_York",
});

console.log(fechaZonificada.toString());
console.log("Zona horaria:", fechaZonificada.timeZoneId)

console.log("\nOperaciones aritméticas con fechas:");
console.log("1 día:\n");
const hoy = Temporal.Now.plainDateISO();
const manana = hoy.add({ days: 1 });
const ayer = hoy.subtract({ days: 1 });
console.log(`  Ayer:   ${ayer.toString()}
  Hoy:    ${hoy.toString()} 
  Mañana: ${manana.toString()}`
);

console.log("\n1 semana:\n");
const enUnaSemana = hoy.add({ weeks: 1 });
const haceUnaSemana = hoy.subtract({ weeks: 1 });
console.log(`  Hace una semana:   ${haceUnaSemana.toString()}
  Hoy:               ${hoy.toString()} 
  En una semana:     ${enUnaSemana.toString()}`
);

console.log("\nTiempo transcurrido entre fechas:\n");
const fecha1 = Temporal.Now.plainDateISO();
const fecha2 = new Temporal.PlainDate(2024, 3, 10);
console.log(fecha1.since(fecha2).toString()); // Ejemplo: "P365D"
console.log(fecha1.since(fecha2));

console.log("\nPeriodo de tiempo desde objeto:\n");
const duracion = Temporal.Duration.from({ years: 1, days: 1, months: 0, hours: 2, minutes: 75 });
console.log(duracion.toString()); // "P1Y1DT2H75M"

console.log("\nPeriodo de tiempo en unidades determinadas:\n");
const duracionMinutos = Temporal.Duration.from({ hours: 12, minutes: 30 });
console.log(duracionMinutos.total("hours")); // Ejemplo: 750 (minutos) o 12.5 (horas)

console.log("\nPeriodo de tiempo en horas de un año entero:\n")
const duracionDias = Temporal.Duration.from({ years: 1});
console.log(duracionDias.total({ unit: "hours", relativeTo: Temporal.PlainDate.from("2024-03-10") }), "h"); // 8760 h

