// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

/* Primeramente creo un nuevo array para no modificiar el original, luego creo un loop for para separar las propiedades
buscadas dentro del array y almacenarlas con push en la nueva. Por último elimino los elementos duplicados, devuelvo el
resultado aplicándole la función set, que conjuntamente con [...(array)] y new, que crea un nuevo array usando el original de molde.*/

function getAllDirectors(movies) {
    let directorArray = [];
    for (let i = 0; i < movies.length; i++) {
        const element = movies[i].director;
         directorArray.push(element)
        }
        return [...new Set(directorArray)];
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

/* Devuelvo la aplicación del método filter e includes (anidado) al array original. Filter genera un string sacando del array los
elementos que cumplan con la regla: que sea la propiedad director sea "Steven Spielberg" y al mismo tiempo, que la propiedad genre
incluya "Drama". Por último, se aplica .length para que indique cuantos elementos hay en este array. */

    return moviesArray
    .filter(movie => movie.director === "Steven Spielberg" && movie.genre
    .includes("Drama")).length
}

    /*    if(!moviesArray.length) return 0;
    let totalDramaSS = 0;
    for (let i = 0; i < moviesArray.length; i++) {
        if (moviesArray[i].director === "Steven Spielberg") {
            let isDrama = false;
        for (let e = 0; e < moviesArray[i].genre.length; e++) {
            if (moviesArray[i].genre[e] === "Drama") {
                isDrama = true;
                break;
            }            
        }
        if (isDrama) {
            totalDramaSS++;
        }
    }
}
    return totalDramaSS 
}

*/

// Iteration 3: All scores average - Get the average of all scores with 2 decimals


/* Compruebo que el array tenga datos, si no devuelve 0.
declaro una variable para poder operar en dos fases ya que en una me daba problemas
mediante el method chaining que conocí haciendo la iteración 6.
map crea un array nuevo con la propiedad score o, si está vacío, con 0
reduce suma todos los valores del nuevo array, y luego los divido por el total de elementos
para sacar la media. Por último al resultado le aplico la función number que revierte el
funcionamiento del method .toFixed, el cual convierte de typeOf number a string. 
Vi otra solución, colocar el operador + delante de scoreArray.toFixed(2), convierte a number.*/

function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0 ;

    let scoreArray = moviesArray
    .map(movie => movie.score || 0)
    .reduce((acc ,scoresAct) => acc + scoresAct) / moviesArray.length;

    return Number(scoreArray.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies

/* Primero creo un array vacío donde push los elementos que, tras la prueba lógica if, dentro de un
loop for coinciden (includes) con un propiedades Drama en género. Resto similar a la iteration 3,
aquí si usé el recurso + para convertir en typeOf el string que devuelve toFixed.
La función no es perfecta aún, contabiliza los campos vacíos como 0 y desvirtúan la media real.
*/
function dramaMoviesScore(moviesArray) {
    
    const dramaScores = [];
    for (let i = 0; i < moviesArray.length; i++) {
        const element = moviesArray[i];
        if(element.genre.includes("Drama")) {
            dramaScores.push(element.score);
        }
        if (!dramaScores.length) return 0
    }
        let result = dramaScores.reduce((a,b) => a + b)/ dramaScores.length
        return +result.toFixed(2)
            
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

    function orderByYear(moviesArray) {

/* Creo un array nuevo para no modificar el original con la fórmula [...(array)]
al nuevo array le aplico el method sort que ordena comparando elementos uno a uno
le doy las reglas de ordenación, con un if..else. si el año no es el mismo
estale al valor comprobado el valor del comparado. Si resulta negativo;
a es menor que b y si es positivo a es mayor. En caso de que sean iguales
else ordena las películas por orden alfabético del título.*/

    let moviesYear = [...moviesArray].sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
    }
    else { return a.title.localeCompare(b.title); }
});
    return moviesYear;
}


/*
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

/* Por el "method chaining" uso el method map, que extrae elementos de un array a
partir de una propiedad indicada (title) y lo almacena en una nueva array. Luego el
method sort, que ya se aplicó en la iteración 5 y por último .slice que vuelve a
crear un nuevo array a partir del creado por map, con los parámetros: desde la
posición 0, extrae 20. */

function orderAlphabetically(moviesArray) {

    return moviesArray
    .map(movie => movie.title)
    .sort((a, b) => a.localeCompare(b))
    .slice(0,20)
    return moviesTitles
}

 /*   Versión anterior, declaré dos variables funcionaba pero era raro, por lo que
 conocí el method chaining. Además no hacía falta crear un nuevo array porque con .map
 y .slice se crea una nueva de facto.
 
    let moviesTitles = [...moviesArray].map(movie => movie.title);
    let ordenTitles = moviesTitles.sort((a, b) => a.localeCompare(b));
    return ordenTitles.slice(0,20);
}
*/


/* Los bonus los dejo parra*/


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
}
