window.onload = function() {
  (function() {
    var humburger = document.querySelector('.hamburger');
    var menuHidden = document.querySelector('.menu-hidden');
    humburger.addEventListener('click', function(e) {
      console.log(e);
      document.body.classList.toggle('body-hidden')
      this.classList.toggle("is-active");
      menuHidden.classList.toggle("animate-hidden-open");
    }, false)
  })();
  $('.slick-category').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{
      breakpoint: 451,
      settings: {
        slidesToShow: 2,
      },
    }]
  });
  // (function() {
  //   var jobcards = document.querySelectorAll('.jobs-card');
  //   var a;
  //   jobcards.forEach(function(elem) {
  //     var a = elem.querySelector('.jobs-card__slide');
  //     console.log(this);
  //   })
  // })();
  (function() {
    var shema = document.querySelectorAll('.shema-svg svg path');
    var pointer = document.querySelector('.pointer');
    shema.forEach(function(element) {
      if (element.dataset.imgBack) {
        element.addEventListener('mousemove', mouseover, false);
        element.addEventListener('mouseleave', mouseleave, false)
      }
    });

    function mouseover(e) {
      pointer.style.display = "block";
      pointer.children[0].src = this.dataset.imgBack;
      pointer.children[1].src = this.dataset.imgAvatar;
      pointer.children[2].innerHTML = this.dataset.title;
      pointer.children[3].innerHTML = this.dataset.time;
      pointer.style.top = e.clientY - 190 + 'px';
      pointer.style.left = e.clientX - 75 + 'px';
    }

    function mouseleave() {
      pointer.style.display = "none";
    }
  })();
  $('select').niceSelect();

};
