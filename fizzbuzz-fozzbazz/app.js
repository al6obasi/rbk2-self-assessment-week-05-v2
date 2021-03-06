angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */
.factory('counter', function(){
  // counter.count = 0;
  // return {
  //   increment:function(){
      // counter.count ++ ;
  //   }
  // }
  // I forget how can use the variables and method  in each controller
  // so i make it as show  
})
.controller('fizzbuzzCtrl', function($scope){
  var count =0;
  $scope.display = count
  $scope.increment =function(){
    count++;
    $scope.display = count
    if(count % 3 === 0  && count % 5 ===0 ){
      $scope.display = "FIZZBUZZ"
    }else if(count % 3 === 0){
      $scope.display = "FIZZ"
    }else if(count % 5=== 0){
      $scope.display = "BUZZ"
   }else{
    $scope.display = count
   }
 }
})
.controller('fozzbazzCtrl', function($scope){
  var count =0;
  $scope.display = count
  $scope.increment =function(){
    count++;
    $scope.display = count
    if(count % 4 === 0  && count % 6 ===0 ){
      $scope.display = "FOZZBAZZ"
    }else if(count % 4 === 0){
      $scope.display = "FOZZ"
    }else if(count % 6=== 0){
      $scope.display = "BAZZ"
   }else{
    $scope.display = count
   }
 }
});