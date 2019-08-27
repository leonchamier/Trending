var routes = [
  // Index page
  {
    path: '/',
    templateUrl: './pages/events.html',
    name: 'home',
  },
  // About page
  {
    path: '/about/',
    url: './pages/about.html',
    name: 'about',
  },
  

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
