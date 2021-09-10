window.addEventListener("load", inicio, true); //PARA ASEGURAR QUE CARGUE

function inicio() {
    document.getElementById("mensaje").addEventListener("keyup", function () {
        this.value = this.value.toUpperCase(); //PARA CAMBIAR A LETRAS MAYÚSCULAS TODO LO QUE ESCRIBO
    }, true);

    document.getElementById("cifrar").addEventListener("click", function () {  //CLICK EN EL BOTÓN CIFRAR
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);
    }, true);
    document.getElementById("descifrar").addEventListener("click", function () {  //CLICK EN EL BOTÓN DESCIFRAR 
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);
    }, true);
}


function cifrar(texto, desplazamiento) {
    let resultado='';
    let letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    
    desplazamiento = (desplazamiento % 27 + 27) % 27; //PA QUE SIEMPRE QUEDE POSITIVO 

    if (texto){
        for (let i=0; i<texto.length; ++i){
            //SI LA LETRA ES UNA LETRA YA MARCADA O SI ES UN CARACTER ESPECIAL
            if (letras.indexOf(texto[i])!=-1)
            { 
                //almacenamos en c la posición de la letra más el desplazamiento y le aplicamos el módulo
                let posicion=((letras.indexOf(texto[i])+desplazamiento) % 27);
                resultado+=letras[posicion];
            }
            else
                resultado+=texto[i]; // CARACTERES ESPECIALES
        }
    }
    return resultado;
} 


function descifrar(texto, desplazamiento) {
    let resultado = '';
    let letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    
    desplazamiento = (desplazamiento % 27 - 27) % 27;

    if (texto) {
        for (let i = 0; i < texto.length; ++i) {
            
            if (letras.indexOf(texto[i]) != -1) {
                
                let posicion = ((letras.indexOf(texto[i]) - desplazamiento) % 27);
                resultado += letras[posicion];
            }
            else
                resultado += texto[i]; 
        }
    }
    return resultado;
}

