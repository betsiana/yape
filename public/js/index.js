'use strict';
const render = (root) => {
  root.empty();
  const container = $('<div class="container"></div>');
  container.append(Header());
  root.append(container);
  $('.carousel.carousel-slider').carousel({fullWidth: true});
}

const state = {
  usuarios: null,
  selectedStation: null
};

$( _ => {
    const root = $('.root');
    render(root);
});
