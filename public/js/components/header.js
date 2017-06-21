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
  const boton =$('<button type="button" class="boton-large waves-effect waves-light registrarse btn" name="button">Registrarme</button>')
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
  const imgTelefono =$('<img class="logoTelefono" src="img/icons/phone.png">');

  container.append(row);
  row.append(cols1);
  row.append(cols10);
  cols10.append(imgTelefono);
  return container;

}
