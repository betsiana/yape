'use strict';
const render = (root) => {
  root.empty();
  const container = $('<div class="container"></div>');
  container.append(Header());
  root.append(container);
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.registrarse').on('click',function(){
    root.empty();
    root.append(ValidateNumero());
    $('.validarnumero').on('click', function(){
      root.empty();
      // root.append(ValidateCode());
      // root.append(CrearCuenta());/*Probando*/
      // root.append(Confirmacion());/*Probando*/
      // root.append(RegistrarTarjeta());/*Probando*/
      // root.append(IngresaClave());/*Probando*/
      root.append(Transaccion());/*Probando*/
    })
  });
}

const state = {
  usuarios: null,
  selectedStation: null
};

$( _ => {
    const root = $('.root');
    render(root);
});
