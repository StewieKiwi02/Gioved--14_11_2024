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

/* 

STRINGA: caratteri compresi o tra doppi o tra singoli apici
NUMBER: sono valori numerici che hanno o no la virgola 
BOOLEAN: sono valori TRUE o FALSE 
BIGINT: fa riferimento a numeri esponenzialmente grandi
SYMBOL: indica valori univoci (identificatori)
UNDEFINE: indica una variabile dichiarata ma a cui non è stato attribuito alcun valore
NULL: indica una variabile che è stata dichiarata da noi vuota (null)
ARRAY: è un oggetto utilizzato per la memorizzazione di valori in ordine

*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* 

un oggetto in js è una struttra di dati associativa che aiuta nella memorizzazione di coppie chiave-valore

la sezione chiave è sostituita da una o più stringhe
la sezione valore è sostituita da qualsiasi tipologia di valore

*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 

let somma = 12 + 20

console.log(somma)

*/

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* 

let x = 12

console.log(x)

*/

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* 

let name = "Steven"

console.log(name)

*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 

let x = 12
let differenza = x - 4

console.log(differenza)

*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* 

let name1 = "john"
let name2 = "John"

console.log(name1 === name2)  --> da false perchè js è case-sensitive 

---------------------------------------------------

let name1 = "john"
let name2 = "john"

console.log(name1 === name2) --> da true perchè sono uguali sia per tipo che per valore

*/
