'use strict';

/**
 * @ngdoc overview
 * @name munsnApp
 * @description
 * # munsnApp
 *
 * Main module of the application.
 */
angular
  .module('munsnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    // TODO(Vey) set up redirect to landing if not logged in
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/messenger', {
        templateUrl: 'views/messenger.html',
        controller: 'MessengerCtrl',
        controllerAs: 'messenger'
      })
      .when('/friends', {
        templateUrl: 'views/friends.html',
        controller: 'FriendsCtrl',
        controllerAs: 'friends'
      })
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'account'
      })
      .when('/landing', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      })
      .when('/schedule', {
        templateUrl: 'views/schedule.html',
        controller: 'ScheduleCtrl',
        controllerAs: 'schedule'
      })
      .when('/lostandfound', {
        templateUrl: 'views/lostandfound.html',
        controller: 'LostandfoundCtrl',
        controllerAs: 'lostandfound'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl',
        controllerAs: 'resume'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
