/**
 * Ej 01
 * 
 * Este ejercicio solo te pide que crees un array de nombre diasSemana para contener 7 elementos. 
 * 
 * Luego rellena el array con los nombres de los días comenzando por Lunes hasta Domingo.
* 
Muestra el array en la consola del inspector de código (F12) con 

console.table(diasSemana)

* Ej 02

* Crea un objeto Array con los días laborables de la semana (Lunes a Viernes) y utiliza un método del objeto para recorrer el array y convertir cada elemento de ese array a mayúsculas. 

Usa console.table para ver el resultado.

No se trata de usar un bucle, debes usar un método del objeto Array.

No debes copiar el array en otro nuevo.

Los objetos string tienen el método toUpperCase() para cambiar a mayúsculas

* Ej 03

Crea un array para albergar al menos 10 números enteros cualesquiera, 
luego rellena el array (o créalo ya con los valores). 

El ejercicio trata de crear a partir de este array otros dos uno con los números 
pares y otro con los impares. 

- No debes usar bucles, usa el método del array qe creas más apropiado.
- No debes usar bucles, mira el método más apropiado para crear un array a partir de otro.

- Un número es par si al dividirlo por 2 el resto es 0 (num%2 es 0)

* Ej 04

Crea un array de al menos 10 elementos para guardar números enteros. 

Usa un método para obtener la suma de los números pares y la de los números impares.

Se trata de reducir el array a un número obtenido como suma de los pares en un caso y delos impares en el otro.

* Ej 05

Crea un array bidimensional para almacenar nombre y calificación de un grupo de asistentes a un curso. Una vez creado rellénalo con al menos 4 elementos y luego ordénalos por orden crecientes de las calificaciones. 
Por ejemplo: Juan 5,Luisa 7, Ana 4, Pedro 3. al ordenarlo debe quedar: Luisa 7, Juan 7, Ana 4, Pedro 3.  

* Ej 06

En este ejercicio debes crear dos arrays para representar dos equipos de trabajo. Al primer array le llamaremos ocupados y al segundo libres. Ambos están llenos con 5 nombres.

Debes crear una función rotar(lst1, lst2) que pase el primer nombre de la lista lst1 a l final de lst2, y luego el primero de la lst2 a l final de lst1.

Para ver que funciona escribe los arrays antes y después de usar esta función.

Por ejemplo: Inicialmente tenemos ocupados: Pedro, Luisa, Juan, Ana y libres Marina, Jose, Alba, Felipe.
Tras llamar a la función de ocupados sale Pedro y entra Marina. Y de libres sale Marina y entra Pedro.
Quedarán en ocupados Luisa, Juan, Ana , Marina y en libres Jose, Alba, Felipe, Pedro.

* Ej 07

Tenemos dos listas de asistentes a dos cursos: html y css. Queremos obtener una lsita de los asistentes a ambos cursos. La lista estará ordenada.
Por ejemplo html = ['Pedro','Juan','Ana'], y css=['Luis','Juan', 'Ana','María'] la lista obtenida sería ['Juan', 'Ana'].

* Ej 08

Tienes que crear un script que gestione una lista de la compra. Para ello tienes dos listas de artículos: compra, pendiente. Cada elemento de la lista compra es un objeto con dos propiedades: nombre del artículo y estado. Estado es un booleano true si el artículo se compró, false en caso contrario. Pendiente es una lista con los nombres de los artículos que faltan por comprar. La función que debes crear recibe como argumento la lista de compra y devuelve la lista de pendientes.
Por ejemplo tienes la lista compra con Naranjas: false, Manzanas:true, Peras:false, Plátanos: true. La lista pendientes contendrá Naranjas y Peras.

* Ej 09

En este ejercicio partimos de dos arrays: artículos que contiene nombres de artículos y precios que contiene lo precios correspondientes de cada artículo. Se trata de crear una función precio(art) que lleva como argumento el nombre de un artículo y devuelve el precio correspondiente. si el artículo no existe devolverá -1.
Una lista podría ser Naranjas, Peras, Bananas y la de precios sería 10, 12, 15. La llamada precios('Peras') deberá devolver 12 para el precio de las peras..

* Ej 10

Tienes una lista de objetos con los nombres de los miembros de una familia. Este script debe devolver dos objetos con los datos (nombre y edad) del miembro de mayor edad y del de menor edad.
Por ejemplo si la familia está compeusta por Juan: 34, Pepa: 40, Ana: 12 y Luis: 14, lel script dirá "Miembro mayor Pepa de 40  añños y Miembro más joven Ana 12 años.
 */