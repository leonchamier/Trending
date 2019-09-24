var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
    on: {
      pageBeforeOut: function (event, page) {
        console.log('index before out ');
        swiper.autoplay.stop();
      },
        pageBeforeIn: function (event, page) {
        // do something before page gets into the view           
      },
      pageAfterIn: function (event, page) {
        console.log('index after in ');
        console.log(swiper.slides);     
        swiper.autoplay.start();
      },
      pageInit: function (event, page) {
        // do something when page initialized
        console.log('index init page ');
      },
      pageBeforeRemove: function (event, page) {
        console.log('index page Before remove ');
      },
    }
  },
  // About page
  {
    path: '/about/',
    url: './pages/about.html',
    name: 'about',
  },
  {
    path: '/user_events/',
    componentUrl: './pages/user_events.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/location/:index/',
    componentUrl: './pages/location.html',
},{
  path: '/login/',
  componentUrl: './pages/login.html',
},{
  path: '/advert_img/:index/',
  componentUrl: './pages/advert_img.html',
},
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];

