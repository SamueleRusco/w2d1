/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let n1 =
  "numero"; /* indica una variabile di valore numerico che puo' essere inserito in funzioni matematiche più complesse (divisioni e moltiplicazioni)*/
let n2 =
  "stringa"; /*puo' indicare una variabile di un valore alfanumerico, è sempre contenuto in virgolette " " */
let n3 = "boolean"; /*indica una variabile binaria (true or false)  */
let n4 =
  "null"; /* è un nome in codice utilizzato quando manca la variabile di un oggetto */
let n5 =
  "undefined"; /*è un nome in codice utilizzato quando non è stato assegnata la variabile ad un oggetto */
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
 
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "samuele";
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let number1 = 12;
let number2 = 20;
let risultato = number1 + number2;
console.log("la somma è =" + risultato);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
/*let name = rusco;
SyntaxError: Identifier 'name' has already been declared*/
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4;
let risultato2 = x - y;
console.log("il risultato è " + risultato2);

/* ESERCIZIO 7
 ,
 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log(name1 !== name2);
console.log(name1.toLowerCase() === name2.toLowerCase());
/*console.log(name1.toUpperCase() === name2.toUpperCase());*/
