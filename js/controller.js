MyApp.controller('MyController', ['$scope', 'MyService', '$uibModal', function($scope, MyService, $uibModal) {
  $scope.greeting = 'Hola!';
    // get store and cart from service
  $scope.store = MyService.store;
  $scope.cart = MyService.cart;

    // use routing to pick the selected product
    // if ($routeParams.productSku != null) {
    //     $scope.product = $scope.store.getProduct($routeParams.productSku);
    // }
    $scope.open = function (Id) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'shopping_cart/myModalContent.html',
        controller: 'ModalInstanceCtrl',

        resolve: {
          item: function () {
            return Id;
          }
        }
      });
    }
}]);


MyApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, MyService, item) {
 $scope.store = MyService.store;
 $scope.cart = MyService.cart;
  $scope.seclectedProd = $scope.store.getProduct(item);

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  // $scope.cancel = function () {
  //   $uibModalInstance.dismiss('cancel');
  // };
});

// function MyController($scope, $routeParams, MyService) {

    
// }
// var app = angular.module('myApp', []);
// app.controller('validateCtrl', function($scope) {
//     $scope.user = 'John Doe';
//     $scope.email = 'john.doe@gmail.com';
// });

