function cifrar(filename, text) {
    const mensaje = document.getElementById("Texto").value;
    const clave = document.getElementById("pass").value;
    if (clave.length != 16) {
        alert("Deben ser 16 caracteres");
        return;
    }
    else {
    }
    if (mensaje == "") {
        alert("Escribe un mensaje");
    }
    const cifrado = CryptoJS.AES.encrypt(mensaje, clave);
    document.getElementById("contenido").innerHTML = cifrado;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cifrado));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    document.getElementById("botonCifrar").addEventListener("click", function () {
        // Generate download of hello.txt file with some content
        var text = document.getElementById("contenido").value;
        var filename = "CifradoAES.txt";
        cifrar(filename, text);
    }, false);
}


function cifrar24(filename, text) {
    const mensaje = document.getElementById("Texto").value;
    const clave = document.getElementById("pass").value;
    if (clave.length != 24) {
        alert("Deben ser 24 caracteres");
        return;
    }
    else {
    }
    if (mensaje == "") {
        alert("Escribe un mensaje");
    }
    var cifrado = CryptoJS.AES.encrypt(mensaje, clave);
    document.getElementById("contenido").innerHTML = cifrado;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cifrado));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    document.getElementById("botonCifrar").addEventListener("click", function () {
        // Generate download of hello.txt file with some content
        var text = document.getElementById("contenido").value;
        var filename = "CifradoAES.txt";
        cifrar24(filename, text);
    }, false);

}


function cifrar32(filename, text) {
    const mensaje = document.getElementById("Texto").value;
    const clave = document.getElementById("pass").value;
    if (clave.length != 32) {
        alert("Deben ser 32 caracteres");
        return;
    }
    else {
    }
    if (mensaje == "") {
        alert("Escribe un mensaje");
    }
    var cifrado = CryptoJS.AES.encrypt(mensaje, clave);
    document.getElementById("contenido").innerHTML = cifrado;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(cifrado));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    document.getElementById("botonCifrar").addEventListener("click", function () {
        // Generate download of hello.txt file with some content
        var text = document.getElementById("contenido").value;
        var filename = "CifradoAES.txt";
        cifrar32(filename, text);
    }, false);
}