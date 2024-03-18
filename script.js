//encriptador de texto

document.getElementById('btn1').addEventListener('click', function() 
{ 
    var texto = document.getElementById('texto').value;
    var textoEncriptado = encriptarTexto(texto);
    var resultado = document.getElementsByClassName('text-result')[0];
    resultado.innerHTML = textoEncriptado;
    var parrafo = document.getElementsByClassName('container-paragraph-img')[0];
    parrafo.style.display = "none";
    var disposicion = document.getElementsByClassName('section2')
    [0];
    disposicion.style.justifyContent = "space-between";
    document.getElementsByClassName('container-result')[0].style.display= 'block';
    let mostrarBtn = document.getElementsByClassName('container-copy')[0];
    mostrarBtn.style.display = "block";

})

function encriptarTexto(texto) {
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    return texto;
}

// desencriptador de texto

document.getElementById('btn2').addEventListener('click', function() 
{ 
    var textoAdesencriptar = document.getElementById('texto').value;
    var textoDesencriptado = desencriptarTexto(textoAdesencriptar);
    var resultado = document.getElementsByClassName('text-result')[0];
    resultado.innerHTML = textoDesencriptado;
    var parrafo = document.getElementsByClassName('container-paragraph-img')[0];
    parrafo.style.display = "none";
    var disposicion = document.getElementsByClassName('section2')
    [0];
    disposicion.style.justifyContent = "space-between";
    document.getElementsByClassName('container-result')[0].style.display= 'block';
    let mostrarBtn = document.getElementsByClassName('container-copy')[0];
    mostrarBtn.style.display = "block";
})

function desencriptarTexto(textoAdesencriptar) {
    textoAdesencriptar = textoAdesencriptar.replace(/enter/g, 'e');
    textoAdesencriptar = textoAdesencriptar.replace(/imes/g, 'i');
    textoAdesencriptar = textoAdesencriptar.replace(/ai/g, 'a');
    textoAdesencriptar = textoAdesencriptar.replace(/ober/g, 'o');
    textoAdesencriptar = textoAdesencriptar.replace(/ufat/g, 'u');
    return textoAdesencriptar;
}

// boton copiar

document.querySelector('.btn-copy').addEventListener('click', function() {
    var textToCopy = document.querySelector('.text-result').textContent;
    navigator.clipboard.writeText(textToCopy).then(function() {
        console.log('Texto copiado al portapapeles');
    }).catch(function(error) {
        console.error('Error al copiar el texto: ', error);
    });
});