// Ejercicios de Métodos de objeto Date

// Ej 00: En este ejercicio el usuario te dará su fecha de nacimiento y debes escribir la función que calcula el día de la semana en que nació. Se supone que el usuario introducirá los datos numéricos correctamente y en una fecha real. Por ejemplo, si la fecha de nacimiento es el 3 de febrero de 1990 (3, 2, 1990) la función debe decirte que nació en Sábado.
// ********************************************************************************

// Ej 01: Vamos a por el tradicional ejercicio donde el ordenador te saluda con un "Buenos días", "Buenas tardes" o "Buenas noches" según la hora del día. De 6 de la mañana a 12 del mediodía serán "Buenos días", de 12 hasta las 20h serán "Buenas tardes" y de 20h hasta las 6 de la madrugada serán "Buenas noches". Por ejemplo, si entras en la página a las 10am te mostrará "Buenos días", a las 14:30 "Buenas tardes" y a las 23:00 o 1:00 de la madrugada "Buenas noches".
// ********************************************************************************

// Ej 02: En este ejercicio debes crear una función que reciba como argumento un objeto fecha y devuelva un objeto con cuatro propiedades: 
// - un entero "dia" para el día del mes,
// - un string "sem" para el nombre del día de la semana (en castellano),
// - un string "mes" para el nombre del mes (en castellano),
// - un entero "año" para el año con 4 dígitos.
// Los nombres de día y mes deben comenzar con mayúsculas. Condición: intenta no utilizar arrays. Por ejemplo, si se invoca la función con la fecha correspondiente al 27/03/2023, debe devolver el objeto: {dia: 27, sem: 'Lunes', mes: 'Marzo', año: 2023}.
// ********************************************************************************

// Ej 03: Crea una función "diferencia" que sea capaz de calcular el número de días transcurridos entre dos fechas dadas en la forma "año/mes/día". El resultado debe ser un valor absoluto, es decir, sin importar el orden de las fechas, el resultado será el número de días transcurridos sin signo. Por ejemplo, si se invoca diasEntre("2023/03/10", "2023/03/15") deberá devolver 5.
// ********************************************************************************

// Ej 04: Este ejercicio consiste en crear un objeto similar al objeto Date, al que llamaremos "MiDate", con los métodos "sumar" y "restar". Estos métodos sumarán o restarán un número de días a la fecha representada por el objeto. Por ejemplo, si se crea el objeto "miFecha" (new MiDate()) para obtener el día de hoy, y se llama a miFecha.sumar(1), se obtendrá la fecha de mañana (hoy + 1 día).
// ********************************************************************************

// Ej 05: En este ejercicio vas a crear una función que determine el número de horas, minutos y segundos transcurridos entre dos horas de un mismo día. La función, que puedes llamar "intervalo", recibe dos argumentos en formato string "hh:mm:ss". Por ejemplo, si se invoca intervalo("12:20:30", "14:25:00") debería indicar que hay 2 horas, 4 minutos y 30 segundos de diferencia.
// ********************************************************************************

// Ej 06: Escribe una función que determine cuál de las dos horas, pasadas como argumentos, es menor. Se asume que ambos tiempos corresponden al mismo día y la solución debe realizarse utilizando el objeto Date. Por ejemplo, al invocar menorHora("12:20:00", "11:10:00") se debería indicar que la segunda hora es menor que la primera.
// ********************************************************************************

// Ej 07: Esta función debe determinar si el año de una determinada fecha es bisiesto o no. Recuerda que un año es bisiesto si es múltiplo de 4, excepto aquellos años que son el primer año del siglo (por ejemplo, 1500, 1600, etc.), que solo lo serán si además son divisibles por 400. Por ejemplo, esBisiesto('1984/1/1') y esBisiesto('1600/1/1') deberían indicar que sí lo es, mientras que esBisiesto('1800/1/1') debería indicar que no lo es.
// ********************************************************************************

// Ej 08: Crea una función para determinar el número de días de cada mes, sin utilizar arrays con los meses y sus días, sino usando el objeto Date. La función recibe como argumento una fecha. Por ejemplo, para diasMes("2000/2/1") (febrero de un año bisiesto) debería devolver 29, y para diasMes("2023/1/1") debería devolver 31.
// ********************************************************************************

// Ej 09: En este ejercicio debes añadir un nuevo método al objeto Date, llamado getWeek, que devuelva el número de la semana para una fecha determinada, siguiendo la norma ISO 8601. Según esta norma, las semanas comienzan en lunes y, si el año comienza antes del viernes, esa es la semana 1; en caso contrario, se considera parte de la última semana del año anterior. Asimismo, si el año termina antes del jueves, esa última semana se cuenta como semana 1 del año siguiente. Por ejemplo, si se define fecha = new Date('2023/3/27'), entonces fecha.getWeek() deberá devolver 13. Para el 1 de enero de 2023 (domingo) se debería obtener que el número de semana es 52.
// ********************************************************************************
