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
            templateUrl:'/templates/httpRequest.html',
            controller:'MyApp.HttpRequestController'
            })
    }
])

//Create a home page controller.
app.controller ('MyApp.HomeController',[
    //list the dependecies for this controller.
    '$scope',

    //Provide a callback to run once all the dependecies have been created
    function($scope){
        console.log('The home controller has loaded');
        // The scope object acts as a public area that is avaiable to the markup
        // page and other objects or services.
        $scope.name = 'bob';
        $scope.age= 32;

        $scope.addListItem = function () {
           console.log ('Add List Item');
           $scope.nameList.push ('bob');
       }

        $scope.nameList = ['susan', 'jane', 'larry', 'joe','frank']

        $scope.increaseAge = function () {
            console.log('increasing the Age');
            $scope.age = $scope.age+1;
        }
    }
]);

app.controller ('MyApp.HttpRequestController',[
    //list the dependecies for this controller.
    '$scope', '$http',

    // The scope object acts as a public area that is avaiable to the markup
    // page and other objects or services.
    function($scope, $http){
        console.log('The HTTP request controller has loaded');

        // Post object to store post info.
        $scope.post= {};
        $scope.postList = [];

        $scope.create = function (){
            console.log('Trying to create a post: ', $scope.post);

            //make a call to a server
            $http({
                url:'http://localhost:3000/posts',

                // use the 'POST' method because we want to post/create data on the server
                method : 'POST',
                data: $scope.post
            })
            .success (function(response){
                console.log('This is the response: ',response)
            })
            .error (function(response){
                console.log('This is the error: ',response)
            })
        }

        $scope.readAll = function (){
            console.log (' Trying to read a post');

            // Make a call to grab all the posts objects
            $http({
                url: 'http://localhost:3000/posts',

                method:'GET'
                })

                .success (function(response){
                    console.log('This is a response',response)
                    $scope.postList=response;
                })
                .error (function(response){
                    console.log('This is a response', response)
                })
        }

        $scope.updatePost = function (){
            console.log (' Updating the post');

            // Make a call to update all the posts objects
            $http({
                url: 'http://localhost:3000/posts/' +$scope.post.id,

                method:'PUT',
                data:$scope.post
                })

                .success (function(response){
                    console.log('This is a response',response)
                    $scope.postList=response;
                })
                .error (function(response){
                    console.log('This is a response', response)
                })
        }

        $scope.deletePost = function (){
            console.log (' Deleting the post');

        $http({
            url: 'http://localhost:3000/posts/' +$scope.post.id,
            
            method:'DELETE',
            data:$scope.post
            })

            .success (function(response){
                console.log('This is a response',response)
                $scope.postList=response;
            })
            .error (function(response){
                console.log('This is a response', response)
            })
        }
    }
]);
