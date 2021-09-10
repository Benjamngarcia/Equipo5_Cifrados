window.addEventListener("load",inicio,true); //PARA ASEGURAR QUE CARGUE

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase(); //PARA CAMBIAR A LETRAS MAYÚSCULAS TODO LO QUE ESCRIBO
    }, true);
    
    document.getElementById("cifrar").addEventListener("click",function(){  //CLICK EN EL BOTÓN CIFRAR
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;               
        document.getElementById("mensaje2").value = cifrar(texto, desplazamiento);
    },true);
    document.getElementById("descifrar").addEventListener("click",function(){  //CLICK EN EL BOTÓN DESCIFRAR 
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;                               
        document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);
    },true);
}

function cifrar(texto, desplazamiento) {
    if (!texto) 
        return ''; // SI NO PONGO NADA IMPRIME VACIO
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    desplazamiento = (desplazamiento % 27); 
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + desplazamiento)]); //VA A IR RECORRIENDO LA CADENA DE LETRA E IR VIENDO SU POSICIÓN PARA SUMAR EL DESP.
}


function descifrar(texto, desplazamiento) {
    if (!texto) 
        return ''; 
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    desplazamiento = (desplazamiento % 27); 
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento)]);
}

