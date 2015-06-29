// // Ionic Starter App

// // angular.module is a global place for creating, registering and retrieving Angular modules
// // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// // the 2nd parameter is an array of 'requires'
// var app = angular.module('starter', ['ionic'])

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// });

angular.module('mySuperApp', ['ionic'])
.controller('ActionSheetCtrl', function($scope, $ionicActionSheet, $timeout) {

 // Triggered on a button click, or some other target
 $scope.show = function() {

   // Show the action sheet
   var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: '<b>Share</b> This' },
       { text: 'Move' }
     ],
     destructiveText: 'Delete',
     titleText: 'Modify your album',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       return true;
     }
   });

   // For example's sake, hide the sheet after two seconds
   $timeout(function() {
     hideSheet();
   }, 2000);

 };

 $scope.onSwipeRight = function() {
  console.log("SWIPED!");
 }

 $scope.items = [

   {
      title: "hello",
      description: "item1"

   },

   {
      title: "hello",
      description: "item2"


   },
   {
      title: "hello",
      description: "item3"


   },
   {
      title: "hello",
      description: "item4"


   },
      {
      title: "hello",
      description: "item1"

   },

   {
      title: "hello",
      description: "item2"


   },
   {
      title: "hello",
      description: "item3"


   },
   {
      title: "hello",
      description: "item4"


   },
      {
      title: "hello",
      description: "item1"

   },

   {
      title: "hello",
      description: "item2"


   },
   {
      title: "hello",
      description: "item3"


   },
   {
      title: "hello",
      description: "item4"


   },
      {
      title: "hello",
      description: "item1"

   },

   {
      title: "hello",
      description: "item2"


   },
   {
      title: "hello",
      description: "item3"


   },
   {
      title: "hello",
      description: "item4"


   },
   {
      title: "hello",
      description: "item5"


   }];

  $scope.shouldShowDelete = false;
 $scope.shouldShowReorder = false;
 $scope.listCanSwipe = true;

});