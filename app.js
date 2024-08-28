//Funciones
function encriptar(){
    //Captura el texto
    let textoUsuario= (document.getElementById('textoUsuario').value);
    //Mapa de sustituciones
    let sustituciones ={
        'e':'enter',
        'i':'imes',
        'a':'ai',
        'o':'ober',
        'u':'ufat'
    };
    //Encripta el texto
    let palabraEncrip= textoUsuario.split('').map(caracter=>{return sustituciones[caracter]||caracter;}).join('');
    //Muestra el resultado
    document.getElementById('resultado').textContent = `Texto encriptado: ${palabraEncrip}`;
}

function desencriptar(){
     //Captura el texto
    let textoUsuario= (document.getElementById('textoUsuario').value);
    //Mapa de sustituciones
    let sustituciones ={
        'enter':'e',
        'imes':'i',
        'ai':'a',
        'ober':'o',
        'ufat':'u'
    };
    //Ordena las claves de sustitucion por longitud en orden descendente
    let claves = Object.keys(sustituciones).sort((a,b)=>b.length-a.length);
    //Desencripta el texto
    let palabraDes= textoUsuario;
    claves.forEach(clave=>{
        const valor=sustituciones[clave];
        const regex= new RegExp(clave,'g');
        palabraDes=palabraDes.replace(regex,valor);
    });
    //Muestra el resultado
    document.getElementById('resultado').textContent = `Texto desencriptado: ${palabraDes}`;
}