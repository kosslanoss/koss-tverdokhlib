$(function(){
  
  const cursor = document.querySelector('.cursor');
  const links = document.querySelectorAll('a, .cursor-zoom');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  })

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.classList.add('large');
    })
  })

  links.forEach(link => {
    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('large');
    })
  })



  $('.header__cursor-btn').on('click', function () {
    $('.cursor').toggleClass('cursor--hidden');
  });



  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
    $('.menu__btn').toggleClass('menu__btn--active');
  });



  $('.menu a').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.hero__link').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.btn-up').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });


  const tabHeaders = document.querySelectorAll('[data-tab]');
  const contentBoxes = document.querySelectorAll('[data-tab-content]');

  tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {

      contentBoxes.forEach(function (item) {
        item.classList.add('expertise-tab__content-hidden');
      });
      const contentBox = document.querySelector('#' + this.dataset.tab);
      contentBox.classList.remove('expertise-tab__content-hidden')
    })
  });


  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });



  

});



