// Dom7
var $ = Dom7;

// Theme
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
  theme = document.location.search.split('theme=')[1].split('&')[0];
}

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: theme,
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
      swiper:{},
      e_slides:[]
    };
  },
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    },
  },
  routes: routes,
  popup: {
    closeOnEscape: true,
  },
  sheet: {
    closeOnEscape: true,
  },
  popover: {
    closeOnEscape: true,
  },
  actions: {
    closeOnEscape: true,
  },
  vi: {
    placementId: 'pltd4o7ibb9rc653x14',
  },
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/',
  stackPages:true
});

/************
 * SWIPER HANDLER
 */
 e_slides=[];
 var swiper = new Swiper('.demo-swiper', {
   zoom:true,
  spaceBetween: 5,
  centeredSlides: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      if (swiper.slides.length < 7 || (swiper.slides.length < 7 && swiper.realIndex == (swiper.slides.length - 2))) {        
        loadSlides(swiper);
      }
      //console.log(swiper.realIndex+'  of  '+swiper.slides.length);

    },
    init: function () { }

  }

});
app.data.swiper = swiper;
$(document).on('page:afterin', '.page[data-name="home"]', function (e) {
  //swiper.autoplay.start();
});

$(document).on('page:beforeout', '.page[data-name="home"]', function (e) {
  //swiper.autoplay.stop();
});
console.log(swiper.slides.length);
if (swiper.slides.length < 7 || swiper.realIndex == (swiper.slides.length - 2)) { 
  loadSlides(swiper);
}

function loadSlides(my_swiper) {
  
  var page = $('.page[data-name="home"]')[0].f7Page;

  console.log(page.app.data);
  page.app.preloader.show();
  if (my_swiper.slides.length == 0) {
    var slides = slidesFromAjaxCall();
    console.log(slides);
    for (var i = 0; i < slides.length; i++) {
      my_swiper.appendSlide(createSlides(slides[i].likes,slides[i].index, slides[i].src, slides[i].geo.lat, slides[i].geo.long, slides[i].comments));

    }
  } else {
    my_swiper.appendSlide('<div class="swiper-slide">Slide ' + swiper.slides.length + '"</div>');
  }
 page.app.preloader.hide();
}

function createSlides(likes,id, src, lat, long, comments) {
  var slide = ' <div  class="swiper-slide" data-id="' + id + '" >';
  slide += '  <div class="card demo-facebook-card" style="width:100%; height:100%">';

  slide += '       <div class="card-content " style="  display: flex; align-items: center;height:100%;">';
  slide += '                <div class="swiper-zoom-container">';
  slide += '                 <img src="' + src + '" style=" display: block;margin: auto;" />';
  slide += '                </div>';
  slide += '              </div>';
  slide += '              <div class="card-footer" style="font-size:16px;;;;width:100%; position: absolute; bottom: 0;">';
  slide += '                <a href="#" class="link">';
  slide += '                  <i class="fa fa-thumbs-o-up"> ' + likes + '</i>';
  slide += '                </a>';
  slide += '                <a href="#" class="link" onclick=\'window.open("geo:0,0?q=' + lat + ',' + long + '" , "_system")\'>';
  slide += '                     <i class="fa fa-map-marker"></i>';
  slide += '                </a>';
  slide += '                <a href="#" >';
  slide += '                  <i class="fa fa-comments-o"> ' + comments + '</i>';
  slide += '                </a>';

  slide += '                <a href="/location/123/">';
  slide += '                  <i class="fa fa-calendar"></i>';
  slide += '                </a>';
  slide += '              </div>';
  slide += '            </div>';

  slide += '          </div>';
  return slide;
}

function slidesFromAjaxCall() {
 // var e_slides = [];
  var lat = 18.0041225; var long = -76.7926586;
  for (var i = 0; i < 5; i++) {
    var obj = {};
    obj.src = 'e_img/e0' + (i + 1) + '.png';
    obj.index = i;
    obj.geo = { lat: lat + getRandom(.0001, .0009, 7), long: (long - getRandom(-.0926586, -.0001, 7)) };
    obj.comments = getRandom(0, 157, 0);
    obj.likes = getRandom(0, 15700, 0);
    //obj.geo={lat:lat,long:long};
    e_slides.push(obj);
  }
  return e_slides;
}


function getRandom(min, max, fix) {
    if (!fix) { var fix = 0; }
    var num = Math.random() * (+max - +min) + +min;
    var rand = Number(num.toFixed(fix));
    return rand;
}

function getUserEvents() {
  var obj = [];
  obj.push(e_slides[2]);
  obj.push(e_slides[4]);
  return obj;
}

