'use strict';
const Header = () => {
  const row = $('<div class="row"></div>');
  const cols1 = $('<div class="col s1"></div>');
  const cols10 = $('<div class="col s10"></div>');
  const contcarrusel = $('<div class="carousel carousel-slider center" data-indicators="true"></div>');
  const carrusel1 = $('<div class="carousel-item" href="#one"></div>');
  const imagen1 = $('<img src="img/icons/icon-people.png">');
  const titulo1 = $('<h2>Paga a tus amigos</h2>');
  const descrip1 =$('<p>Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');

  const carrusel2 = $('<div class="carousel-item" href="#two"></div>');
  const imagen2 = $('<img src="img/icons/happy-person.png">');
  const titulo2 = $('<h2>Sin número de cuenta</h2>');
  const descrip2 =$('<p>Elige a quién pagar desde tu lista de contactos.</p>');

  const carrusel3 = $('<div class="carousel-item" href="#three"></div>');
  const imagen3 = $('<img src="img/icons/group-people.png">');
  const titulo3 = $('<h2>Gratis y seguro</h2>');
  const descrip3 =$('<p>La transferencia es inmediata y gratuita de una cuenta a otra.</p>');
  const boton =$('<button type="button" class="boton-large waves-effect waves-light registrarse btn" name="button">REGISTRARME</button>')
  row.append(cols1);
  row.append(cols10);
  cols10.append(contcarrusel);
  contcarrusel.append(carrusel1);
  carrusel1.append(imagen1);
  carrusel1.append(titulo1);
  carrusel1.append(descrip1);
  contcarrusel.append(carrusel2);
  carrusel2.append(imagen2);
  carrusel2.append(titulo2);
  carrusel2.append(descrip2);
  contcarrusel.append(carrusel3);
  carrusel3.append(imagen3);
  carrusel3.append(titulo3);
  carrusel3.append(descrip3);
  cols10.append(boton);

  return row;

}

const ValidateNumero = () => {
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const cols1 = $('<div class="col s1"></div>');
  const cols10 = $('<div class="col s10 center"></div>');
  const imgTelefono = $('<img class="logoTelefono" src="img/icons/phone.png">');
  const titulo21 = $('<h2 class="titulo-tamano">Para comenzar validemos tu número</h2>');
  const descrip21 = $('<p>Recibirás un SMS con un código de validación</p>');

  const validacion =$('<form class="center validacion"></form>');
  const input21 = $('<input id="numero" class="center numeroTelefono" pattern="[9]{1}[0-9]{8}" type="text" maxlength="9" name="" value="">');
  const icontelefono = $('<img class="icon" src="img/icons/phoneandnumber.png">');
  const contenedorP = $('<p></p>');
  const condiciones = $('<input type="checkbox" class="filled-in" id="filled-in-box"/>');
  const label = $('<label for="filled-in-box">Acepto los <span class="textoturquesa">Términos y condiciones</span></label>');
  const boton1 =$('<button type="button" class="disabled waves-effect waves-light validarnumero btn" name="button">CONTINUAR</button>')

  container.append(row);
  row.append(cols1);
  row.append(cols10);
  cols10.append(imgTelefono);
  cols10.append(titulo21);
  cols10.append(descrip21);
  cols10.append(validacion);
  validacion.append(input21);
  validacion.append(icontelefono);
  validacion.append(contenedorP);
  contenedorP.append(condiciones);
  contenedorP.append(label);
  cols10.append(boton1);
  return container;

}

const ValidateCode = () =>{
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const cols1 = $('<div class="col s1"></div>');
  const cols10 = $('<div class="col s10 center"></div>');
  const imgmessage = $('<img class="logoTelefono" src="img/icons/message.png">');
  const titulo31 = $('<h2 class="titulo-tamano">Ahora ingresa tu código</h2>');
  const descrip31 = $('<p>Enviamos un código con de validación al número ------- </p>');

  const codigoMensaje =$('<form class="center contInput"></form>');
  const input31 = $('<input id="codigo" class="center negrita" type="text" maxlength="6" name="" value="">');
  const iconlock = $('<img class="iconLock" src="img/icons/lock.png">');

  container.append(row);
  row.append(cols1);
  row.append(cols10);
  cols10.append(imgmessage);
  cols10.append(titulo31);
  cols10.append(descrip31);
  cols10.append(codigoMensaje);
  codigoMensaje.append(input31);
  codigoMensaje.append(iconlock);
  return container;
}

const CrearCuenta = () =>{
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const cols1 = $('<div class="col s1"></div>');
  const cols10 = $('<div class="col s10 center"></div>');
  const imgcrear = $('<img class="logoTelefono" src="img/icons/lockone.png">');
  const titulo41 = $('<h2 class="titulo-tamano">Crea tu usuario Yape</h2>');
  const descrip41 = $('<p>Ingresa un nombre, email y clave de usuario.</p>');

  const formulario =$('<form class="center contInput"></form>');
  const nombre = $('<input id="codigo" class="center negrita" type="text" placeholder="Nombre" name="" value="">');
  const iconname = $('<img class="nameicon" src="img/icons/user.png">');

  const email = $('<input id="codigo" class="center negrita" type="text" placeholder="correo@ejemplo.com" name="" value="">');
  const iconemail = $('<img class="menssageicon" src="img/icons/message-gray.png">');

  const contrass = $('<input id="codigo" class="center negrita" type="text" placeholder="Ingresa clave de 6 digitos" name="" value="">');
  const iconpassword = $('<img class="lockicon" src="img/icons/lock.png">');
  const spanmensaje = $('<span>Cuida esta clave como oro, es tu acceso a Yape.</span>');
  const boton2 =$('<button type="button" class="waves-effect waves-light crearcuenta btn" name="button">CREAR CUENTA</button>')

  container.append(row);
  row.append(cols1);
  row.append(cols10);
  cols10.append(imgcrear);
  cols10.append(titulo41);
  cols10.append(descrip41);
  cols10.append(formulario);
  formulario.append(nombre);
  formulario.append(iconname);
  formulario.append(email);
  formulario.append(iconemail);
  formulario.append(contrass);
  formulario.append(iconpassword);
  formulario.append(spanmensaje);
  cols10.append(boton2);

  return container;
}

const Confirmacion = () =>{
  const container = $('<div class="container center fondo-confirmacion"></div>');
  const checkLogo = $('<img class="logo-tamano" src="img/icons/check.png">');
  const titulo51 = $('<p class="negrita confirmacion-tamano">!Bien¡</p>');
  const titulo52 = $('<p class="negrita confirmacion-tamano">Ahora puedes usar Yape</p>');
  container.append(checkLogo);
  container.append(titulo51);
  container.append(titulo52);

  return container;
}

const RegistrarTarjeta = () =>{
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const cols1 = $('<div class="col s1"></div>');
  const cols10 = $('<div class="col s10 center"></div>');
  const imgtarjeta = $('<img class="logoTelefono" src="img/icons/bcp-logo.png">');
  const titulo61 = $('<h2 class="titulo-tamano">Registra tu tarjeta de débito BCP</h2>');
  const descrip61 = $('<p>Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles</p>');

  const tarjeta =$('<form class="center margininput"></form>');
  const input61 = $('<input id="tarjeta" class="center negrita" type="text" maxlength="6" name="" value="">');
  const icontarjeta = $('<img class="nameicon" src="img/icons/card.png">');
  const iconscan = $('<img class="iconscan" src="img/icons/scan.png">');
  const span1 = $('<span for="filled-in-box" class="textoturquesa">Escanear tarjeta</span>');

  const contFecha = $('<div class=" "></div>');
    const texto = $('<span class="margintexto">Fecha de vencimiento</span>');
    const mes = $('<input id="mes"  placeholder="Mes" class="center" type="text" maxlength="2" name="" value="">');
    const slach = $('<span class=" ">/</span>');
    const year = $('<input id="year" placeholder="Año" class="center" type="text" maxlength="2" name="" value="">');

  const botoncontinuar =$('<button type="button" class="waves-effect waves-light registrotarjeta btn" name="button">CONTINUAR</button>');
  container.append(row);
  row.append(cols1);
  row.append(cols10);
  cols10.append(imgtarjeta);
  cols10.append(titulo61);
  cols10.append(descrip61);
  cols10.append(tarjeta);
  tarjeta.append(input61);
  tarjeta.append(icontarjeta);
  cols10.append(iconscan);
  cols10.append(span1);
  cols10.append(contFecha);
  contFecha.append(texto);
  contFecha.append(mes);
  contFecha.append(slach);
  contFecha.append(year);
  cols10.append(botoncontinuar);
  return container;
}

const IngresaClave = () =>{
  const container = $('<div class="container"></div>');
  const row = $('<div class="row"></div>');
  const cols1 = $('<div class="col s1"></div>');
  const cols10 = $('<div class="col s10 center"></div>');
  const imgtarjeta = $('<img class="logoTelefono" src="img/icons/bcp-logo.png">');
  const titulo61 = $('<h2 class="titulo-tamano">Ingresa la clave de tu tarjeta</h2>');
  const descrip61 = $('<p>Tarjet ********</p>');
  const tarjeta =$('<form class="center margininput"></form>');
  const input61 = $('<input id="clavetarjeta" class="center negrita" type="text" maxlength="12" name="" value="">');
  const iconlock = $('<img class="lock" src="img/icons/lock.png">');
  const botonregistrar =$('<button type="button" class="waves-effect waves-light registrar btn" name="button">REGISTRAR</button>');


  container.append(row);
  row.append(cols1);
  row.append(cols10);
  cols10.append(imgtarjeta);
  cols10.append(titulo61);
  cols10.append(descrip61);
  cols10.append(tarjeta);
  tarjeta.append(input61);
  tarjeta.append(iconlock);
  cols10.append(botonregistrar);
  return container;

}

const Transaccion = () => {
  const container = $('<div class="container center area-completa text-white"></div>');
  const row1 = $('<div class="row center fondo-morado-ligth"></div>');
  const tuerca = $('<img class="logo-tuerca" src="img/icons/engine.png">');
  const carafeliz = $('<img class="logo-cara" src="img/icons/happy-face.png">');
  const hola = $('<h1 class="negrita titulo-blanco">Hola</h1>');
  const ojo = $('<img class="logo-ojo" src="img/icons/eye.png">');
  const spanMostrar = $('<p class="texto-mostrar textoturquesa">Mostrar saldo</p>');

  const row2 = $('<div class="row center fondo-morado"></div>');
  const movcont = $('<div class="col s12"></div>');
  const textomov = $('<span>ÚLTIMOS MOVIMIENTOS</span>');
  const iconderecha = $('<img class="icondireccion" src="img/icons/right-arrow-circular-button.png">')
  const hr =$('<hr>');

  const row3 = $('<div class="row center fondo-morado"></div>');
  const imgcont = $('<div class="col s6"></div>');
  const imgcatus = $('<img class="icon-cactus" src="img/icons/icon.png">');

  const textocont = $('<div class="col s6"></div>');
  const spantexto = $('<h4 class="pregunta">¿Aún no realizas tu primer pago?</h4>');
  const span2texto = $('<span>Es rápido y sencillo</span>');

  const row4 = $('<div class="row padding-bottom center fondo-morado"></div>');
  const enviar = $('<div class="col s6"></div>');
  const imgenviar = $('<img class="code-icon" src="img/icons/send.png">');
  const textoenviar = $('<p>ENVIAR PAGO</p>');

  const recibir = $('<div class="col s6"></div>');
  const imgrecibir = $('<img class="code-icon" src="img/icons/code-qr.png">');
  const textorecibir = $('<p>RECIBIR PAGO</p>');

  container.append(row1);
  container.append(row2);
  container.append(row3);
  container.append(row4);
  row1.append(tuerca);
  row1.append(carafeliz);
  row1.append(hola);
  row1.append(ojo);
  row1.append(spanMostrar);
  row2.append(movcont);
  row2.append(textomov);
  row2.append(iconderecha);
  row2.append(hr);
  row3.append(imgcont);
  imgcont.append(imgcatus);
  row3.append(textocont);
  textocont.append(spantexto);
  textocont.append(span2texto);
  row4.append(enviar);
  enviar.append(imgenviar);
  enviar.append(textoenviar);
  row4.append(recibir);
  recibir.append(imgrecibir);
  recibir.append(textorecibir);

  return container;
}
