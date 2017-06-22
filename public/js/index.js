'use strict';
const render = (root) => {
  root.empty();
  var telefono ="";
  const container = $('<div class="container"></div>');
  container.append(Header());
  root.append(container);
  $('.carousel.carousel-slider').carousel({fullWidth: true});

  $('.registrarse').on('click',function(){
    root.empty();
    root.append(ValidateNumero());
    telefono = $('.numeroTelefono').val();
    $('#filled-in-box').on('change', function() {
      $('#validarNumero').attr('disabled', false);
      $( '#validarNumero' ).removeClass( "disabled" );

      $.post('api/registerNumber',{
        "phone": $('.numeroTelefono').val(),
        "terms": $('#filled-in-box')[0].checked
      },  function(response){
          console.log(response.data.code);
          state.usuarios = response.data.phone;
          state.codigo = response.data.code;
          });
      $('.validarnumero').on('click', function(){
        root.empty();
        root.append(ValidateCode());
        $('#codigo').keyup(function(){
          if($('#codigo').val() == state.codigo){
            root.empty();
            root.append(CrearCuenta());
            $('#crearcuenta').on('click',function(){
                root.empty();
                root.append(Confirmacion());
                setTimeout(function(){
                  root.empty();
                  root.append(RegistrarTarjeta());
                  $('#registrartarjeta').on('click',function(){
                    root.empty();
                    root.append(IngresaClave());
                    $('#registrarfinal').on('click',function(){
                      root.empty();
                      root.append(Transaccion());
                    });
                  });


              }, 3000);
            })
          }
        });
        setTimeout(function(){$.post('api/resendCode',{"phone": state.usuarios}, function(resp){ console.log(resp.data); }); }, 21000);
      });

      if (!this.checked) {
        $('#validarNumero').attr('disabled', true);
      }
    });
  });

}

const state = {
  usuarios: null,
  seleccion: null,
  codigo:null
};

$( _ => {
    const root = $('.root');
    render(root);
});



  $('#registrarfinal').on('click',function(){
    root.empty();
    root.append(Transaccion());
  });
