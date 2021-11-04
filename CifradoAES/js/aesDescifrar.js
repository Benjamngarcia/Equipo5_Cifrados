function descifrar(){
    const mensaje = document.getElementById("Texto").value;
    const clave = document.getElementById("pass").value;
    if(clave.length != 16){
        alert("Deben ser 16 caracteres");
        return;
    }
    else{
            
    }
    if(mensaje == ""){
        alert("Escribe un mensaje para descifrar");
    } else{
        var descifrado = CryptoJS.AES.decrypt(mensaje, clave);
        document.getElementById("txtPlano").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(descifrado.toString(CryptoJS.enc.Utf8)));
        element.setAttribute('download', filename);
        var filename = "CifradoAES.txt";
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        document.getElementById("botonCifrar").addEventListener("click", function(){
            // Generate download of hello.txt file with some content
            var text = document.getElementById("txtPlano").value;
            cifrar(filename, text);
        }, false);
    }
}

function descifrar24(){
    const mensaje = document.getElementById("Texto").value;
    const clave = document.getElementById("pass").value;
    if(clave.length != 24){
        alert("Deben ser 24 caracteres");
        return;
    }
    else{
        
    }
    if(mensaje == ""){
        alert("Escribe un mensaje para descifrar");
    } else{
        var descifrado = CryptoJS.AES.decrypt(mensaje, clave);
        document.getElementById("txtPlano").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(descifrado.toString(CryptoJS.enc.Utf8)));
        element.setAttribute('download', filename);
        var filename = "CifradoAES.txt";
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        document.getElementById("botonDescifrar").addEventListener("click", function(){
            // Generate download of hello.txt file with some content
            var text = document.getElementById("txtPlano").value;
            var filename = "CifradoAES.txt";
            descifrar24(filename, text);
        }, false);
    }
}

function descifrar32(filename, text){
    const mensaje = document.getElementById("Texto").value;
    const clave = document.getElementById("pass").value;
    if(clave.length != 32){
        alert("Deben ser 32 caracteres");
        return;
    }
    else{
        
    }
    if(mensaje == ""){
        alert("Escribe un mensaje para descifrar");
    } else{
        var descifrado = CryptoJS.AES.decrypt(mensaje, clave);
        document.getElementById("txtPlano").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(descifrado.toString(CryptoJS.enc.Utf8)));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        document.getElementById("botonDescifrar").addEventListener("click", function(){
            // Generate download of hello.txt file with some content
            var text = document.getElementById("txtPlano").value;
            var filename = "CifradoAES.txt";
            descifrar32(filename, text);
        }, false);
    }
}