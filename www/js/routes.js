var routes = [
  // Index page
  {
    path: '/',
    url: './index.html',
    name: 'home',
    on: {
      pageBeforeOut: function (event, page) {
        console.log('before out ');
        swiper.autoplay.stop();
      },
        pageBeforeIn: function (event, page) {
        // do something before page gets into the view        
        swiper.autoplay.start();
      },
      pageAfterIn: function (event, page) {
        console.log('after in ');
      },
      pageInit: function (event, page) {
        // do something when page initialized
        console.log('init page ');
      },
      pageBeforeRemove: function (event, page) {
        console.log('page Before remove ');
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
},
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
