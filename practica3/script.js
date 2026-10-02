
function ejercicio4() {
    const n = parseInt(prompt("Ejercicio 4 - Ingrese un número:"));
        if (isNaN(n)) { 
            console.log("Ejercicio 4: número inválido"); 
            return; 
        }
    console.log("--- Ejercicio 4: FizzBuzz ---");
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) 
            console.log("FizzBuzz");
        else if (i % 3 === 0) 
            console.log("Fizz");
        else if (i % 5 === 0) 
            console.log("Buzz");
        else console.log(i);
    }
}
 





function ejercicio5() {
    const n = parseInt(prompt("Ejercicio 5 - Ingrese un número:"));
     if (isNaN(n)) { 
        console.log("Ejercicio 5: número inválido"); 
        return; 
    }
    console.log("--- Ejercicio 5: Números pares ---");
    let contador = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
        console.log(i);
        contador++;
        }
    }
    console.log("Cantidad de números pares " + contador);
}
 







 
function ejercicio6() {
    const n = parseInt(prompt("Ejercicio 6 - Ingrese un número:"));
    if (isNaN(n)) {
        console.log("Ejercicio 6: número inválido"); 
        return; 
    }
    console.log("--- Ejercicio 6 ---");
    if (esPrimo(n)) 
        console.log( n + " es primo");
    else 
        console.log( n + " no es primo");
}
function esPrimo(numero) {
    if (numero < 2) 
        return false;
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) 
            return false;
    }
    return true;
}
 





function ejercicio7() {
    const a = parseInt(prompt("Ejercicio 7 - Ingrese el primer número:"));
    const b = parseInt(prompt("Ejercicio 7 - Ingrese el segundo número:"));
    if (isNaN(a) || isNaN(b)) { 
        console.log("Ejercicio 7: número inválido"); 
        return; 
    }
    console.log("--- Ejercicio 7: Números entre " + a + " y " + b + " ---");
    const menor = Math.min(a, b);
    const mayor = Math.max(a, b);
    for (let i = menor + 1; i < mayor; i++) {
        console.log(i);
    }
}
 






 
function ejercicio8() {
    const texto = prompt("Ejercicio 8 - Ingrese vocales");
    if (texto === null) 
        return;
    console.log("--- Ejercicio 8---");
    console.log(" Vocales encontradas: " + contarVocales(texto));
}
function contarVocales(texto) {
    const vocales = "aeiou";
    let total = 0;
    for (let i = 0; i < texto.length; i++) {
        if (vocales.includes(texto[i].toLowerCase())) total++;
    }
    return total;
}
 






 
function ejercicio9() {
    const numeros = [12, 45, 7, 89, 23, 56, 3];
    console.log("--- Ejercicio 9------");
    console.log("Arreglo: " + numeros.join(", "));
    console.log("El número mayor es: " + encontrarMayor(numeros));
}
function encontrarMayor(arreglo) {
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) mayor = arreglo[i];
    }
    return mayor;
}
 






 
function ejercicio10() {
    const a = parseFloat(prompt("Ejercicio 10 - Ingrese el primer número:"));
    const b = parseFloat(prompt("Ejercicio 10 - Ingrese el segundo número:"));
    const op = prompt("Operación (+, -, *, /):");
    if (isNaN(a) || isNaN(b)) { 
        console.log("Ejercicio 10: número inválido"); 
        return; 
    }
    console.log("--- Ejercicio 10 ---");
 
    if (op === "+") 
        console.log("Resultado: " + sumar(a, b));
    else 
        if (op === "-") 
        console.log("Resultado: " + restar(a, b));
    else 
        if (op === "*") 
        console.log("Resultado: " + multiplicar(a, b));
    else 
        if (op === "/") {
            if (b === 0) 
            console.log("Error: no se puede dividir entre cero");
        else console.log("Resultado: " + dividir(a, b));
        } else {
        console.log("Operación no válida");
    }
}
function sumar(a, b) { 
    return a + b; 
}
function restar(a, b) { 
    return a - b; 
}
function multiplicar(a, b) { 
    return a * b; 
}
function dividir(a, b) {
     return a / b; 
    }
 

ejercicio4();
ejercicio5();
ejercicio6();
ejercicio7();
ejercicio8();
ejercicio9();
ejercicio10();