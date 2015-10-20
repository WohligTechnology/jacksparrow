// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

//.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
//	cfpLoadingBarProvider.includeSpinner = false;
//  }])

firstapp.config(function ($stateProvider, $urlRouterProvider, cfpLoadingBarProvider, $httpProvider) {
	cfpLoadingBarProvider.includeSpinner = true;
	cfpLoadingBarProvider.spinnerTemplate = '<div class="loadingcfp"><div class="in-box"><div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>Please wait...</div></div>';
	cfpLoadingBarProvider.includeBar = false;

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

	.state('booking', {
			url: "/booking",
			templateUrl: "views/template.html",
			controller: 'BookingCtrl'
		})
		.state('calendar', {
			url: "/calendar",
			templateUrl: "views/template.html",
			controller: 'CalendarCtrl'
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

	.state('withdrawal', {
		url: "/withdrawal",
		templateUrl: "views/template.html",
		controller: 'WithdrawalCtrl'
	})

	.state('setting', {
		url: "/setting",
		templateUrl: "views/template.html",
		controller: 'SettingCtrl'
	})

	.state('how-works', {
		url: "/how-works",
		templateUrl: "views/template.html",
		controller: 'HowWorksCtrl'
	})

	.state('expert', {
		url: "/expert",
		templateUrl: "views/template.html",
		controller: 'ExpertCtrl'
	})

	.state('personal', {
			url: "/setting/personal",
			templateUrl: "views/template.html",
			controller: 'PersonalCtrl'
		})
		.state('professional', {
			url: "/professional",
			templateUrl: "views/template.html",
			controller: 'ProfessionalCtrl'
		})
		.state('amature', {
			url: "/amature",
			templateUrl: "views/template.html",
			controller: 'AmatureCtrl'
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