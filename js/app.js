'use strict';

// App Module: the name AngularStore matches the ng-app attribute in the main <html> tag
// the route provides parses the URL and injects the appropriate partial page
var MyApp = angular.module('MyStore', ['ngRoute', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/store', {
        templateUrl: 'shopping_cart/store.html',
         controller: 'MyController'
      }).
      when('/prod/:productSku', {
        templateUrl: 'shopping_cart/product.html',
         controller: 'MyController'
      }).
      when('/cart', {
        templateUrl: 'shopping_cart/shoppingCart.html',
         controller: 'MyController'
      }).
      when('/check', {
        templateUrl: 'shopping_cart/checkOut.html',
         controller: 'MyController'
      }).
      otherwise({
        redirectTo: '/store'
      });
}]);

// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
MyApp.factory("MyService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("MyStore");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});