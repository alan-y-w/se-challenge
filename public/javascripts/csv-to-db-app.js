  var app = angular.module('csv-to-db-app', [
                            'ui.router'
                            ]);
  app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      // Home page
      .state('home', {
        url: '/home',
        // templateUrl: 'templates/home/home.html',
        views: {
          '': {templateUrl: 'templates/home/home.html'},

          'upload@home': {
            templateUrl: 'templates/home/upload.html'
          },
          'table-display@home': {
            templateUrl: 'templates/home/table-display.html'
          }
        }
      })

    $urlRouterProvider.otherwise('/home');
  }]); // End of app.config
