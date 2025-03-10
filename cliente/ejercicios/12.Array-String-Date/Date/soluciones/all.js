// // Ej 00: En este ejercicio el usuario te dará su fecha de nacimiento y debes escribir la función que calcula el día de la semana en que nació. 
// // Se supone que el usuario introducirá los datos numéricos correctamente y en una fecha real. 
// // Por ejemplo, si la fecha de nacimiento es el 3 de febrero de 1990 (3, 2, 1990) la función debe decirte que nació en Sábado.
// // ********************************************************************************
// // Propuesta de solución:
// function diaDeLaSemana(dia, mes, anio) {
//   // Creamos la fecha (mes en JavaScript va de 0 a 11)
//   const fecha = new Date(anio, mes - 1, dia);
//   const indice = fecha.getDay(); // 0: Domingo, 1: Lunes, ..., 6: Sábado
//   let nombreDia = "";
//   switch (indice) {
//     case 0: nombreDia = "Domingo"; break;
//     case 1: nombreDia = "Lunes"; break;
//     case 2: nombreDia = "Martes"; break;
//     case 3: nombreDia = "Miércoles"; break;
//     case 4: nombreDia = "Jueves"; break;
//     case 5: nombreDia = "Viernes"; break;
//     case 6: nombreDia = "Sábado"; break;
//   }
//   return nombreDia;
// }

// // Ej 01: Vamos a por el tradicional ejercicio donde el ordenador te saluda con un "Buenos días", "Buenas tardes" o "Buenas noches" según la hora del día. 
// // De 6 de la mañana a 12 del mediodía serán "Buenos días", de 12 hasta las 20h "Buenas tardes" y de 20h hasta las 6 de la madrugada "Buenas noches".
// // Por ejemplo, si entras a la página a las 10am, te mostrará "Buenos días"; a las 14:30, "Buenas tardes"; y a las 23:00 o 1:00 de la madrugada, "Buenas noches".
// // ********************************************************************************
// // Propuesta de solución:
// function saludoSegunHora() {
//   const ahora = new Date();
//   const hora = ahora.getHours();
//   if (hora >= 6 && hora < 12) {
//     return "Buenos días";
//   } else if (hora >= 12 && hora < 20) {
//     return "Buenas tardes";
//   } else {
//     return "Buenas noches";
//   }
// }

// // Ej 02: En este ejercicio debes crear una función que reciba como argumento un objeto fecha y devuelva un objeto con cuatro propiedades: 
// // - un entero "dia" para el día del mes,
// // - un string "sem" para el nombre del día de la semana (en castellano),
// // - un string "mes" para el nombre del mes (en castellano),
// // - un entero "año" para el año con 4 dígitos.
// // Los nombres de día y mes deben comenzar con mayúsculas. Condición: intenta no utilizar arrays.
// // Por ejemplo, si se invoca la función con la fecha correspondiente al 27/03/2023, debe devolver el objeto: {dia: 27, sem: 'Lunes', mes: 'Marzo', año: 2023}.
// // ********************************************************************************
// // Propuesta de solución:
// function formatoFecha(fecha) {
//   const dia = fecha.getDate();
//   const anio = fecha.getFullYear();
  
//   // Obtener el nombre del día de la semana sin arrays:
//   let sem = "";
//   const d = fecha.getDay();
//   if (d === 0) sem = "Domingo";
//   else if (d === 1) sem = "Lunes";
//   else if (d === 2) sem = "Martes";
//   else if (d === 3) sem = "Miércoles";
//   else if (d === 4) sem = "Jueves";
//   else if (d === 5) sem = "Viernes";
//   else if (d === 6) sem = "Sábado";
  
//   // Obtener el nombre del mes sin arrays:
//   let mes = "";
//   const m = fecha.getMonth() + 1;
//   if (m === 1) mes = "Enero";
//   else if (m === 2) mes = "Febrero";
//   else if (m === 3) mes = "Marzo";
//   else if (m === 4) mes = "Abril";
//   else if (m === 5) mes = "Mayo";
//   else if (m === 6) mes = "Junio";
//   else if (m === 7) mes = "Julio";
//   else if (m === 8) mes = "Agosto";
//   else if (m === 9) mes = "Septiembre";
//   else if (m === 10) mes = "Octubre";
//   else if (m === 11) mes = "Noviembre";
//   else if (m === 12) mes = "Diciembre";
  
//   return { dia, sem, mes, año: anio };
// }

// // Ej 03: Crea una función "diferencia" que sea capaz de calcular el número de días transcurridos entre dos fechas dadas en la forma "año/mes/día". 
// // El resultado debe ser un valor absoluto. Por ejemplo, si se invoca diasEntre("2023/03/10", "2023/03/15") deberá devolver 5.
// // ********************************************************************************
// // Propuesta de solución:
// function diferencia(fechaStr1, fechaStr2) {
//   const fecha1 = new Date(fechaStr1);
//   const fecha2 = new Date(fechaStr2);
//   const diffTime = Math.abs(fecha2 - fecha1);
//   const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
//   return diffDays;
// }

// // Ej 04: Este ejercicio consiste en crear un objeto similar al objeto Date, al que llamaremos "MiDate", con los métodos "sumar" y "restar". 
// // Estos métodos sumarán o restarán un número de días a la fecha representada por el objeto.
// // Por ejemplo, si se crea el objeto "miFecha" (new MiDate()) para obtener el día de hoy, y se llama a miFecha.sumar(1), se obtendrá la fecha de mañana (hoy + 1 día).
// // ********************************************************************************
// // Propuesta de solución:
// function MiDate(fechaInicial) {
//   // Si no se pasa una fecha, usar la fecha actual
//   this.fecha = fechaInicial ? new Date(fechaInicial) : new Date();
// }

// MiDate.prototype.sumar = function(dias) {
//   const nuevaFecha = new Date(this.fecha);
//   nuevaFecha.setDate(nuevaFecha.getDate() + dias);
//   this.fecha = nuevaFecha;
//   return this;
// };

// MiDate.prototype.restar = function(dias) {
//   const nuevaFecha = new Date(this.fecha);
//   nuevaFecha.setDate(nuevaFecha.getDate() - dias);
//   this.fecha = nuevaFecha;
//   return this;
// };

// // Ej 05: En este ejercicio vas a crear una función que determine el número de horas, minutos y segundos transcurridos entre dos horas de un mismo día. 
// // La función, que puedes llamar "intervalo", recibe dos argumentos en formato string "hh:mm:ss". 
// // Por ejemplo, si se invoca intervalo("12:20:30", "14:25:00") debería indicar que hay 2 horas, 4 minutos y 30 segundos de diferencia.
// // ********************************************************************************
// // Propuesta de solución:
// function intervalo(horaStr1, horaStr2) {
//   // Convertir las horas a segundos
//   const convertirASegundos = (horaStr) => {
//     const partes = horaStr.split(":");
//     return parseInt(partes[0], 10) * 3600 +
//            parseInt(partes[1], 10) * 60 +
//            parseInt(partes[2], 10);
//   };

//   const seg1 = convertirASegundos(horaStr1);
//   const seg2 = convertirASegundos(horaStr2);
//   let diff = Math.abs(seg2 - seg1);

//   const horas = Math.floor(diff / 3600);
//   diff %= 3600;
//   const minutos = Math.floor(diff / 60);
//   const segundos = diff % 60;

//   return { horas, minutos, segundos };
// }

// // Ej 06: Escribe una función que determine cuál de las dos horas, pasadas como argumentos, es menor. 
// // Se asume que ambos tiempos corresponden al mismo día y la solución debe realizarse utilizando el objeto Date.
// // Por ejemplo, al invocar menorHora("12:20:00", "11:10:00") se debería indicar que la segunda hora es menor que la primera.
// // ********************************************************************************
// // Propuesta de solución:
// function menorHora(horaStr1, horaStr2) {
//   const hoy = new Date().toISOString().split("T")[0]; // obtener la fecha actual en formato YYYY-MM-DD
//   const fecha1 = new Date(`${hoy}T${horaStr1}`);
//   const fecha2 = new Date(`${hoy}T${horaStr2}`);
  
//   if (fecha1 < fecha2) {
//     return `${horaStr1} es menor que ${horaStr2}`;
//   } else if (fecha2 < fecha1) {
//     return `${horaStr2} es menor que ${horaStr1}`;
//   } else {
//     return "Ambas horas son iguales";
//   }
// }

// // Ej 07: Esta función debe determinar si el año de una determinada fecha es bisiesto o no. 
// // Recuerda que un año es bisiesto si es múltiplo de 4, excepto aquellos años que son el primer año del siglo, 
// // que solo lo serán si además son divisibles por 400. 
// // Por ejemplo, esBisiesto('1984/1/1') y esBisiesto('1600/1/1') deberían indicar que sí lo es, mientras que esBisiesto('1800/1/1') debería indicar que no lo es.
// // ********************************************************************************
// // Propuesta de solución:
// function esBisiesto(fechaStr) {
//   const fecha = new Date(fechaStr);
//   const anio = fecha.getFullYear();
//   if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Ej 08: Crea una función para determinar el número de días de cada mes, sin utilizar arrays con los meses y sus días, sino usando el objeto Date. 
// // La función recibe como argumento una fecha. 
// // Por ejemplo, para diasMes("2000/2/1") (febrero de un año bisiesto) debería devolver 29, y para diasMes("2023/1/1") debería devolver 31.
// // ********************************************************************************
// // Propuesta de solución:
// function diasMes(fechaStr) {
//   const fecha = new Date(fechaStr);
//   const anio = fecha.getFullYear();
//   const mes = fecha.getMonth() + 1; // meses de 0 a 11
//   // Pasar al siguiente mes y poner el día en 0 para obtener el último día del mes anterior (que es el mes deseado)
//   const ultimoDia = new Date(anio, mes, 0);
//   return ultimoDia.getDate();
// }

// // Ej 09: En este ejercicio debes añadir un nuevo método al objeto Date, llamado getWeek, que devuelva el número de la semana para una fecha determinada, 
// // siguiendo la norma ISO 8601. Según esta norma, las semanas comienzan en lunes y, si el año comienza antes del viernes, esa es la semana 1; 
// // en caso contrario, se considera parte de la última semana del año anterior. Asimismo, si el año termina antes del jueves, esa última semana 
// // se cuenta como semana 1 del año siguiente. Por ejemplo, si se define fecha = new Date('2023/3/27'), entonces fecha.getWeek() deberá devolver 13. 
// // Para el 1 de enero de 2023 (domingo) se debería obtener que el número de semana es 52.
// // ********************************************************************************
// // Propuesta de solución:
// Date.prototype.getWeek = function() {
//   // Copia de la fecha
//   const fecha = new Date(this.getTime());
//   // Ajustar al jueves de la semana actual: ISO week date usa el jueves para determinar la semana
//   fecha.setDate(fecha.getDate() + 3 - ((fecha.getDay() + 6) % 7));
//   // Obtener el primer día del año
//   const primerDiaAno = new Date(fecha.getFullYear(), 0, 1);
//   // Calcular la diferencia en días y dividir entre 7
//   const diff = (fecha - primerDiaAno) / (1000 * 60 * 60 * 24);
//   return Math.floor(diff / 7) + 1;
// };
