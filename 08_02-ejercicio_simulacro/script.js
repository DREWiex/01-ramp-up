// Solicita al usuario 3 palabras, de la primera debes mostrar su segunda letra, de la segunda su tamaño y de la tercera las vocales que se encuentren en posiciones impares.

// PARTE I

function word1(){
    let word1 = prompt("Indica una palabra:");
    let cont1;

    cont1 = word1[1]
    alert("La segunda letra de " + word1 + " es " + cont1 + ".");
    console.log(cont1);
}

//word1()

// PARTE II

function word2(){
    let word2 = prompt("Indica otra palabra:")
    let cont2;

    cont2 = word2.length;
    alert("Tu palabra tiene " + cont2 + " letras en total.")
    console.log(cont2);
}

//word2()

// PARTE III

function word3(){
    let word3 = prompt("Indica una última letra:");
    let vocales = ["a", "e", "i", "o", "u"];
    let cont3;

    for (let i = 0; i < word3.length; i++) {
        if(i == vocales){
            cont3++
            console.log(cont3);
        }
    }
}

word3();