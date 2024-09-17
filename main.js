let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789[!@#$%^&*(),.?":{}|<>]';

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);
    
    if (numeroDigitado < 6){
        alert("El número de letras debe ser mayor a 6");
        return;
    }

    let password = '';
    for(let i=0; i < numeroDigitado; i++){
        
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }

    contrasena.value = password;

    if (esContrasenaDebil(password)) {
        return;
    }
    
}

function esContrasenaDebil(password){
    const tieneNumero = /\d/;
    const tieneMayuscula = /[A-Z]/;
    const tieneSimbolo = /[!@#$%^&*(),.?":{}|<>]/

    if (!tieneNumero.test(password)) {
        alert("La contraseña es débil: no contiene números.");
        return true;
    }

    if (!tieneMayuscula.test(password)) {
        alert("La contraseña es débil: no contiene letras mayúsculas.");
        return true;
    }

    if (!tieneSimbolo.test(password)) {
        alert("La contraseña es débil: no contiene símbolos especiales.");
        return true;
    }

        alert("La contraseña es segura.");
        return false;

    }

    function limpiarCampo() {
        contrasena.value = '';
    }