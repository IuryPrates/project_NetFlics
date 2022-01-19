$('.owl-carousel').owlCarousel({
  loop: true, //loop do carrossel
  margin: 10, // margem entre os filmes
  nav: false, //setas de navegação
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
