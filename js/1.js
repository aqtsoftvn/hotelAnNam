
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoPlay: true,
    autoPlay: 3000,
    navigation:true,
    items:4,
    navigationText: ["◀<strong></strong>","<strong></strong> ▶"],
    items: 4,
       itemsDesktop: [1000, 4],
       itemsDesktopSmall: [900, 2],
       itemsTablet: [600, 1],
       itemsMobile: false,
       pagination: false
});

 $(document).ready(function() {
     var owl = $("#slider-carousel");
     owl.owlCarousel({
       items: 4,
       itemsDesktop: [1000, 4],
       itemsDesktopSmall: [900, 2],
       itemsTablet: [600, 1],
       itemsMobile: false,
       pagination: false
     });
     $(".next").click(function() {
       owl.trigger('owl.next');
     })
     $(".prev").click(function() {
       owl.trigger('owl.prev');
     })
   });






