/*
*  Splash Controller -  City Data is controlled by here. Page Movement is initalized in controller 
*/
angular.module('splashMain', ['storedData', 'globalMethods', 'famous.angular'])
.controller('SplashController', function ($scope, StoredData, GlobalMethods) {

  // initiateMovement(); 

>>>>>>> consoling data from flickr
  $('body').on('mousemove', '.a_splashHome', function(event) {
    checkMovement([event.pageX, event.pageY]);
  });
  $scope.data = {
    boxes: StoredData.cities
  };
});