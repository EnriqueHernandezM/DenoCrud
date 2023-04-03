import { red, blue, bold } from "https://deno.land/std@0.179.0/fmt/colors.ts";

console.log(bold(blue("hola mundo")));
console.log(bold(red("ah la mierda el mundo")));

/* Esta es la forma que tiene Deno de levantar variables de entorno de la línea de comandos. Similar a process.env. Requiere adicionalmente ejecutar
 el programa con el flag: --allow-env. Deno.env nos devuelve un diccionario con un par clave-valor para cada variable de entorno cargada.  */
/* *primero agregar este import para que funcione el ejemplo: import "https://deno.land/x/dotenv@v3.2.2/load.ts"; y tambien agregar --allow-read
Ej: deno  run --allow-read --allow-env  dt.ts */

/* PARA CONSUMIR APIS COMANDO CON PERMISO DE RES

deno run --allow-net <name.ts>*/
