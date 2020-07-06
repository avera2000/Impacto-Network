onePageScroll("#fondo", {
   sectionContainer: ".scene",
   easing: "ease",
   animationTime: 1000,
   pagination: true,
   updateURL: false,
   keyboard: true
});

var controller = new ScrollMagic.Controller();

var sc1 = new ScrollMagic.Scene({triggerElement: "#p1"})
		.setTween("#p1-inner", { marginTop: "0" })
		.addTo(controller);

var p2 = new TimelineMax().add([
  TweenMax.to('#no-scroll-indicator', 1, { opacity: 1 }),
  TweenMax.to('body',       0, { backgroundColor: '#ffffff' }),
  TweenMax.to('#ana-p1',    2, { opacity: 1, paddingTop: "0" }),
  TweenMax.to('#ana-intro', 2, { opacity: 1, top:"50%" }),
  TweenMax.to('#no-scroll-indicator', 0, { opacity: 0, delay: 2 }),
  TweenMax.to('#scroll-indicator', 2, { opacity: 1, delay: 2 })
]);

var sc2 = new ScrollMagic.Scene({triggerElement: "#p2" })
    .on('start', function (event) {
      p2.time(0)
    })
    .setTween(p2)
    .addTo(controller);

var p3 = new TimelineMax().add([
  TweenMax.to('#no-scroll-indicator', 1, { opacity: 1 }),
  TweenMax.to('body',       1, { backgroundColor: '#caeae9' }),
  TweenMax.to('#scroll-indicator', 0, { opacity: 0, delay: 0.1 }),
  TweenMax.to('#nubes-p3',  2, { opacity: 1 }),
  TweenMax.to('#ciudad-p3', 2, { paddingTop: "0" }),
  TweenMax.to('#ana-p3',    2, { marginTop: "0", delay: 1 }),
  TweenMax.to('#nino-p3',   2, { marginTop: "0", delay: 2 }),
  TweenMax.to('#nina-p3',   2, { marginTop: "0", delay: 2 }),
  TweenMax.to('#esposo-p3', 2, { paddingTop: "0", delay: 2 }),
  TweenMax.to('#texto1-p3', 2, { opacity: 1, top:"10%", delay: 3 }),
  TweenMax.to('body',       3, { backgroundColor: '#2e2e30', delay: 8 }),
  TweenMax.to('#texto1-p3', 1, { opacity: 0, delay: 9 }),
  TweenMax.to('#texto2-p3', 2, { opacity: 1, top:"10%", display: "block", delay: 9 }),
  TweenMax.to('#esposo-p3', 3, { marginTop: "-50%", opacity: 0, delay: 11 }),
  TweenMax.to('#dinero-p3', 3, { opacity: 1, delay: 12 }),
  TweenMax.to('#ana-p3',    0, { opacity: 0, delay: 12 }),
  TweenMax.to('#ana3-p3',   0, { opacity: 1, delay: 12 }),
  TweenMax.to('#nina-p3',   0, { opacity: 0, delay: 12 }),
  TweenMax.to('#nina2-p3',  0, { opacity: 1, delay: 12 }),
  TweenMax.to('#nino-p3',   0, { opacity: 0, delay: 12 }),
  TweenMax.to('#nino2-p3',  0, { opacity: 1, delay: 12 }),
  TweenMax.to('#nino2-p3',  2, { marginLeft: "-240px", delay: 13 }),
  TweenMax.to('#texto2-p3', 1, { display: 'none', delay: 15 }),
  TweenMax.to('#texto3-p3', 2, { opacity: 1, top:"10%", display: "block", delay: 15 }),
  TweenMax.to('#ana3-p3',   0, { opacity: 0, delay: 16 }),
  TweenMax.to('#ana2-p3',   0, { opacity: 1, delay: 16 }),
  TweenMax.to('#dinero-p3', 5, { marginTop: "-25%", opacity: 0, delay: 16 }),
  TweenMax.to('#texto3-p3', 1, { display: 'none', delay: 21 }),
  TweenMax.to('#texto4-p3', 2, { opacity: 1, top:"10%", display: "block", delay: 21 }),
  TweenMax.to('#no-scroll-indicator', 0, { opacity: 0, delay: 22 }),
  TweenMax.to('#scroll-indicator', 2, { opacity: 1, delay: 22 })
]);

var sc3 = new ScrollMagic.Scene({ triggerElement: "#p3" })
    .on('start', function (event) {
      p3.time(0)
    })
    .setTween(p3)
    .addTo(controller);

var p4 = new TimelineMax().add([
  TweenMax.to('#no-scroll-indicator', 1, { opacity: 1 }),
  TweenMax.to('body',           3, { backgroundColor: '#caeae9' }),
  TweenMax.to('#scroll-indicator', 0, { opacity: 0, delay: 0.1 }),
  TweenMax.to('#nubes-p4',      2, { opacity: 1 }),
  TweenMax.to('#texto1-p4',     2, { opacity: 1, top:"10%", delay: 1 }),
  TweenMax.to('#juan1-p4',      2, { marginTop: "0", delay: 1 }),
  TweenMax.to('#texto1-p4',     1, { opacity: 0, delay: 6 }),
  TweenMax.to('#texto2-p4',     2, { opacity: 1, top:"10%", display: "block", delay: 6 }),
  TweenMax.to('#emo-p4',        2, { paddingTop: "0", delay: 7 }),
  TweenMax.to('#empresaria-p4', 2, { paddingTop: "0", delay: 7 }),
  TweenMax.to('#moderno-p4',    2, { marginTop: "0", delay: 7 }),
  TweenMax.to('#empresario-p4', 2, { marginTop: "0", delay: 7 }),
  TweenMax.to('#juan1-p4',      0, { opacity: 0, delay: 9 }),
  TweenMax.to('#juan2-p4',      0, { opacity: 1, delay: 9 }),
  TweenMax.to('#no-scroll-indicator', 0, { opacity: 0, delay: 10 }),
  TweenMax.to('#scroll-indicator', 2, { opacity: 1, delay: 10 })
]);

var sc4 = new ScrollMagic.Scene({ triggerElement: "#p4" })
    .on('start', function (event) {
      p4.time(0)
    })
    .setTween(p4)
    .addTo(controller);

var p5 = new TimelineMax().add([
  TweenMax.to('#no-scroll-indicator', 1, { opacity: 1 }),
  TweenMax.to('body',           3, { backgroundColor: '#ffffff' }),
  TweenMax.to('#scroll-indicator', 0, { opacity: 0, delay: 0.1 }),
  TweenMax.to('#escritorio-p5', 2, { marginTop: "0", delay: 1 }),
  TweenMax.to('#telefono-p5',   2, { marginTop: "0", delay: 2 }),
  TweenMax.to('#papeles1-p5',   2, { marginTop: "0", delay: 3 }),
  TweenMax.to('#papeles2-p5',   2, { marginTop: "0", delay: 4 }),
  TweenMax.to('#cerdito-p5',    2, { marginTop: "0", delay: 5 }),
  TweenMax.to('#monedas1-p5',   2, { marginTop: "0", delay: 6 }),
  TweenMax.to('#monedas2-p5',   2, { marginTop: "0", delay: 6 }),
  TweenMax.to('#monedas3-p5',   2, { marginTop: "0", delay: 6 }),
  TweenMax.to('#juan-p5',       2, { marginTop: "0", delay: 7 }),
  TweenMax.to('#texto1-p5',     2, { opacity: 1, top:"10%", delay: 8 }),
  TweenMax.to('#no-scroll-indicator', 0, { opacity: 0, delay: 9 }),
  TweenMax.to('#scroll-indicator', 2, { opacity: 1, delay: 9 })
]);

var sc5 = new ScrollMagic.Scene({ triggerElement: "#p5" })
    .on('start', function (event) {
      p5.time(0)
    })
    .setTween(p5)
    .addTo(controller);

var p6 = new TimelineMax().add([
  TweenMax.to('#no-scroll-indicator', 1, { opacity: 1 }),
  TweenMax.to('body',          3,   { backgroundColor: '#ebffb3' }),
  TweenMax.to('#scroll-indicator', 0, { opacity: 0, delay: 0.1 }),
  TweenMax.to('#donadores-p6', 2.5, { marginTop: "0", delay: 1.5 }),
  TweenMax.to('#juan-p6',      2.5, { marginTop: "0", delay: 3 }),
  TweenMax.to('#personas1-p6', 2.5, { marginTop: "0", delay: 4.5 }),
  TweenMax.to('#personas2-p6', 2.5, { marginTop: "0", delay: 6 }),
  TweenMax.to('#texto1-p6',    3,   { opacity: 1, top:"10%", delay: 7.5 }),
  TweenMax.to('#no-scroll-indicator', 0, { opacity: 0, delay: 8.5 }),
  TweenMax.to('#scroll-indicator', 2, { opacity: 1, delay: 8.5 })
]);

var sc6 = new ScrollMagic.Scene({ triggerElement: "#p6" })
    .on('start', function (event) {
      p6.time(0)
    })
    .setTween(p6)
    .addTo(controller);

var p7 = new TimelineMax().add([
  TweenMax.to('#no-scroll-indicator', 1, { opacity: 1 }),
  TweenMax.to('body',         3, { backgroundColor: '#caeae9' }),
  TweenMax.to('#scroll-indicator', 0, { opacity: 0, delay: 0.1 }),
  TweenMax.to('#nubes-p7',    2, { opacity: 1 }),
  TweenMax.to('#ciudad-p7',   2, { marginTop: "0", delay: 1 }),
  TweenMax.to('#juan-p7',     2, { marginTop: "0", delay: 3 }),
  TweenMax.to('#donador-p7',  2, { paddingTop: "0", delay: 5 }),
  TweenMax.to('#donadora-p7', 2, { marginTop: "0", delay: 5 }),
  TweenMax.to('#texto1-p7',   3, { opacity: 1, top:"10%", delay: 7 }),
  TweenMax.to('#no-scroll-indicator', 0, { opacity: 0, delay: 8 }),
  TweenMax.to('#scroll-indicator', 2, { opacity: 1, delay: 8 })
]);

var sc7 = new ScrollMagic.Scene({ triggerElement: "#p7" })
    .on('start', function (event) {
      p7.time(0)
    })
    .setTween(p7)
    .addTo(controller);

var p8 = new TimelineMax().add([
  TweenMax.to('#no-scroll-indicator', 1, { opacity: 1 }),
  TweenMax.to('body',      3, { backgroundColor: '#f9d27a' }),
  TweenMax.to('#no-scroll-indicator', 0, { opacity: 0, delay: 0.1 }),
  TweenMax.to('#scroll-indicator', 0, { opacity: 0, delay: 0.1 }),
  TweenMax.to('#texto-p8', 4, { opacity: 1 }),
]);

var sc8 = new ScrollMagic.Scene({ triggerElement: "#p8" })
    .on('start', function (event) {
      p8.time(0)
    })
    .setTween(p8)
    .addTo(controller);
