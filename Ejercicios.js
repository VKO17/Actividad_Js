/* Lonely Integer */

// Given an array of integers, where all elements but one occur twice, find the unique element.

function lonelyinteger(a) {
    let unique = 0;
    for (let i = 0; i < a.length; i++) { // Aqui recorre el array
        unique ^= a[i];  // Aqui compara todos los elementos que son iguales con el operador XOR ' ^= ' y solamente deja almacenado en la variable el unico que queda. 
    }
    return unique;
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Grading Students */

/* HackerLand University has the following grading policy:
- Every student receives a grade in the inclusive range from 0 to 100 .
- Any grade less than 40 is a failing grade.
Sam is a professor at the university and likes to round each student's grade according to these rules:
- If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
- If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade. */

function gradingStudents(grades) {
    const roundedGrades = [];                   // Aqui se almacenará las calificaciones redondeadas
    for (let i = 0; i < grades.length; i++) {   // Inicia un ciclo for que recorrerá todas las calificaciones
        const grade = grades[i];                // En cada iteración del ciclo for, se asigna la calificación actual a la variable grade.
        if (grade < 38) {                       // Se verifica si la calificación actual es menor que 38. Si es así, no se redondea y se agrega al arreglo roundedGrades sin cambios.
            roundedGrades.push(grade);
        } else {
            const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
            const difference = nextMultipleOf5 - grade;
            if (difference < 3) {
                roundedGrades.push(nextMultipleOf5);
            } else {
                roundedGrades.push(grade);
            }
        }
    }

    // Si la calificación actual es mayor o igual a 38, 
    // se calcula el próximo múltiplo de 5 para la calificación actual utilizando la fórmula Math.ceil(grade / 5) * 5. Luego, se encuentra la diferencia entre la calificación actual y el próximo múltiplo de 5. 
    // Si la diferencia es menor que 3, se redondea la calificación al próximo múltiplo de 5 y se agrega al arreglo roundedGrades. De lo contrario, la calificación actual no se redondea y se agrega al arreglo roundedGrades sin cambios. 

    return roundedGrades;
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Flipping bits */

/* You will be given a list of 32 bit unsigned integers. Flip all the bits (0→1 and 1→0 ) and return the result as an unsigned integer. */

function flippingBits(n) {
    // Primero, convertimos el número a una cadena binaria con 32 bits.
    // Utilizamos el método padStart para asegurarnos de que la cadena
    // tenga exactamente 32 caracteres.
    const binaryString = n.toString(2).padStart(32, '0');

    // Luego, invertimos todos los bits de la cadena utilizando el
    // método replace con una expresión regular que reemplaza cada
    // 0 con un 1 y cada 1 con un 0.
    const invertedString = binaryString.replace(/[01]/g, bit => bit === '0' ? '1' : '0');

    // Finalmente, convertimos la cadena binaria invertida a un número
    // entero sin signo utilizando el método parseInt con la base 2.
    return parseInt(invertedString, 2);
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Diagonal Difference. */

/* Given a square matrix, calculate the absolute difference between the sums of its diagonals. */

function diagonalDifference(arr) {

    // Inicializamos las variables para las sumas de las diagonales.
    let diagonal1Sum = 0;
    let diagonal2Sum = 0;

    // Recorremos la matriz y sumamos los elementos de las diagonales.
    for (let i = 0; i < arr.length; i++) {
        diagonal1Sum += arr[i][i];
        diagonal2Sum += arr[i][arr.length - 1 - i];
        // diagonal1Sum = diagonal1Sum + matrix[i][i];
        // diagonal2Sum = diagonal2Sum + matrix[i][matrix.length - 1 - i];


    }

    // Calculamos la diferencia absoluta entre las sumas de las diagonales.
    const difference = Math.abs(diagonal1Sum - diagonal2Sum);

    return difference;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Counting Sort 1. */

/* El código dado es una implementación del algoritmo de ordenamiento por conteo (Counting Sort). 
El algoritmo toma una matriz 'arr' como entrada y crea una matriz de frecuencia 'freq' de tamaño 100, inicializada con todos los valores en 0. Luego itera a través de los elementos de 'arr' e incrementa la frecuencia del elemento correspondiente en 'freq'. 
Finalmente, devuelve la matriz de frecuencia 'freq'.
En esencia, Counting Sort es un algoritmo de ordenamiento que funciona contando el número de ocurrencias de cada elemento único en la matriz, y luego calculando la posición de inicio y fin de cada elemento en una matriz de salida ordenada. 
La complejidad temporal de Counting Sort es O(n+k), donde n es el número de elementos en la matriz y k es el rango de los valores de entrada. */

function countingSort(arr) {
    // Crea una matriz de frecuencia 'freq' con 100 elementos, inicializados en 0.
    const freq = new Array(100).fill(0);

    // iterate through the input array and increment the corresponding element in the frequency array
    for (let i = 0; i < arr.length; i++) {
        // Itera a través de la matriz de entrada 'arr' e incrementa el elemento correspondiente en la matriz de frecuencia.
        freq[arr[i]]++;
    }

    // Devuelve la matriz de frecuencia 'freq'.
    return freq;
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Counting Valleys. */

/* An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

Example
steps = 8 path = [DDUUUUDD]
The hiker first enters a valley 2 units deep. Then they climb out and up onto a mountain 2 units high. Finally, the hiker returns to sea level and ends the hike.

Function Description
Complete the countingValleys function in the editor below.
countingValleys has the following parameter(s):

int steps: the number of steps on the hike string path: a string describing the path
Returns
int: the number of valleys traversed
Input Format
The first line contains an integer , the number of steps in the hike.
The second line contains a single string , of characters that describe the path. */

function countingValleys(steps, path) {
    let altitude = 0;  // nivel de altitud actual
    let valleyCount = 0;  // contador de valles
    let inValley = false;  // indica si el excursionista está actualmente en un valle

    for (let i = 0; i < steps; i++) {
        if (path[i] === "U") {
            altitude++;  // subir un nivel de altitud
        } else {
            altitude--;  // bajar un nivel de altitud
        }

        // Si el excursionista acaba de salir de un valle (en el paso anterior) y está ahora al nivel del mar,
        // aumentamos el contador de valles
        if (inValley && altitude === 0) {
            valleyCount++;
            inValley = false;  // el excursionista ya no está en un valle
        }

        // Si el excursionista está actualmente por debajo del nivel del mar, indica que está en un valle
        if (altitude < 0) {
            inValley = true;
        }
    }

    return valleyCount;
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Pangrams. */

/* Roy quiere mejorar su velocidad de escritura en máquina para concursos de programación. Su amigo le dijo que escribiera la oración "The quick brown fox jumps over the lazy dog" repetidamente porque es un pangrama. (pangramas son oraciones construidas usando todas las letras del alfabeto, por lo menos una vez.)
Después de escribir la oración muchas veces, Roy se aburrió. Entonces comenzó a buscar otros pangramas.
Dada una oración S , dile a Roy si es un pangrama o no. */

function pangrams(s) {
    // Convertimos la cadena a minúsculas para simplificar la comparación de caracteres
    s = s.toLowerCase();

    // Creamos un objeto para almacenar las letras que ya hemos encontrado
    let letrasEncontradas = {};

    // Recorremos la cadena
    for (let i = 0; i < s.length; i++) {
        let caracterActual = s.charAt(i);
        // Si el caracter actual es una letra, lo añadimos al objeto de letras encontradas
        if (/[a-z]/.test(caracterActual)) {
            letrasEncontradas[caracterActual] = true;
        }
    }

    // Si hemos encontrado 26 letras distintas (todas las del alfabeto), es un pangrama
    if (Object.keys(letrasEncontradas).length === 26) {
        return "pangram";
    } else {
        return "not pangram";
    }
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

/* Mars Exploration. */

/* Letters in some of the SOS messages are altered by cosmic radiation during transmission.
 Given the signal received by Earth as a string, , 's' determine how many letters of the SOS message have been changed by radiation. */

function marsExploration(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (i % 3 === 0 || i % 3 === 2) {
            if (s[i] !== 'S') {
                count++;
            }
        } else if (i % 3 === 1) {
            if (s[i] !== 'O') {
                count++;
            }
        }
    }
    return count;
}
