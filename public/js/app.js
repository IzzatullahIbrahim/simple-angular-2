'use strict'

var app = angular.module ('MyApp',['ui.router']);

app.config([
    '$stateProvider',
    function ($stateProvider){
        $stateProvider
            .state('home',{
            url:'/',
            templateUrl:'/templates/home.html',
            controller:'MyApp.HomeController'
            })
            .state('about',{
            url:'/about',
            templateUrl:'/templates/about.html'
            })
            .state('contact',{
            url:'/contact',
            templateUrl:'/templates/contact.html'
            })
            .state('httpRequest',{
            url:'/httpRequest',
            templateUrl:'/templates/httpRequest.html'
            })
    }
])

//Create a home page controller.
app.controller ('MyApp.HomeController',[
    //list the dependecies for this controller.
    '$scope',

    //Provide a callback to run once all the dependecies have been created
    function($scope){
        console.log('The home controller has loaded')
        // The scope object acts as a public area that is avaiable to the markup
        // page and other objects or services.
        $scope.name = 'bob';
        $scope.age= 32;

        $scope.nameList = ['susan', 'jane', 'larry', 'joe','frank']

        $scope.increaseAge = function () {
            console.log('increasing the Age');
            $scope.age = $scope.age+1;
        }
    }
]);
