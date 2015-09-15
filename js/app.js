// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, cfpLoadingBarProvider, $httpProvider) {

    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    //Turn the spinner on or off
    cfpLoadingBarProvider.includeSpinner = false;

    $stateProvider

        .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })

    .state('feature', {
        url: "/feature",
        templateUrl: "views/template.html",
        controller: 'FeatureCtrl'
    })

    
    .state('searchpro', {
        url: "/search-pro",
        templateUrl: "views/template.html",
        controller: 'SearchProCtrl'
    })

    .state('infinite', {
        url: "/infinite",
        templateUrl: "views/template.html",
        controller: 'InfiniteCtrl'
    })

    .state('pro', {
        url: "/pro",
        templateUrl: "views/template.html",
        controller: 'ProCtrl'
    })

    .state('history', {
        url: "/history",
        templateUrl: "views/template.html",
        controller: 'HistoryCtrl'
    })

    .state('checkout', {
        url: "/checkout",
        templateUrl: "views/template.html",
        controller: 'CheckoutCtrl'
    })

    .state('account', {
        url: "/account",
        templateUrl: "views/template.html",
        controller: 'AccountCtrl'
    })
     .state('qtsasked', {
        url: "/qtsasked",
        templateUrl: "views/template.html",
        controller: 'QuestionsCtrl'
    })

    .state('setting', {
        url: "/setting",
        templateUrl: "views/template.html",
        controller: 'SettingCtrl'
    })

    $urlRouterProvider.otherwise("/home");
});

firstapp.directive('img', function ($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});
