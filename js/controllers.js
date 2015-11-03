var tabvalue = '1';

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'ngSocial', 'valdr', 'ui.select', 'angular-flexslider', 'mwl.calendar'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("home");
	$scope.menutitle = NavigationService.makeactive("Home");
	TemplateService.header = "views/header-login.html";
	$scope.menutitle = NavigationService.makeactive("Home");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.mySlides1 = [
		{
		src: 'img/slider/user-normal.jpg',
		tagline: "Find an expert to assist you",
		subline: "The only platform which has best experts on any field."
   },
		{
			src: 'img/slider/user-normal1.jpg',
			tagline: "Start looking for an expert now",
			subline: "The only platform which has best experts on any field."
    }];
	$scope.mySlides2 = [
//		{
//		src: 'img/slider/slider1.jpg',
//		tagline: "Earn money sitting at home"
//    },
		{
			src: 'img/slider/user-expert.jpg',
			tagline: "Earn money sitting at home",
			subline: "Become an expert on the website now."
    }];
})

.controller('CalendarCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, $modal, ngDialog) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("calendar");
	$scope.menutitle = NavigationService.makeactive("Calendar");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	$scope.vm = this;
	//These variables MUST be set as a minimum for the calendar to work
	$scope.vm.calendarView = 'month';
	$scope.vm.calendarDay = new Date();
	$scope.vm.events = [{
		title: 'An event',
		type: 'warning',
		startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
		endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
		draggable: true,
		resizable: true
  }, {
		title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
		type: 'info',
		startsAt: moment().subtract(1, 'day').toDate(),
		endsAt: moment().add(5, 'days').toDate(),
		draggable: true,
		resizable: true
  }, {
		title: 'This is a really long event title that occurs on every year',
		type: 'important',
		startsAt: moment().startOf('day').add(7, 'hours').toDate(),
		endsAt: moment().startOf('day').add(19, 'hours').toDate(),
		recursOn: 'year',
		draggable: true,
		resizable: true
  }];

	/*
	 var currentYear = moment().year();
	 var currentMonth = moment().month();

	function random(min, max) {
	  return Math.floor((Math.random() * max) + min);
	}

	for (var i = 0; i < 1000; i++) {
	  var start = new Date(currentYear,random(0, 11),random(1, 28),random(0, 24),random(0, 59));
	 vm.events.push({
	    title: 'Event ' + i,
	    type: 'warning',
	    startsAt: start,
	    endsAt: moment(start).add(2, 'hours').toDate()
	  })
	}*/

	function showModal(action, event) {
		//				$modal.open({
		//					templateUrl: 'views/content/modal-login.html',
		//					controller: function () {
		//						$scope.vm = this;
		//						$scope.vm.action = action;
		//						$scope.vm.event = event;
		//					},
		//					controllerAs: 'CalendarCtrl'
		//				});
		ngDialog.open({
			scope: $scope,
			template: 'views/content/modal-login.html'
		});
	}

	$scope.eventClicked = function (event) {
		console.log("sjnkjndv0");
		showModal('Clicked', event);
	};

	$scope.eventEdited = function (event) {
		showModal('Edited', event);
	};

	$scope.eventDeleted = function (event) {
		showModal('Deleted', event);
	};

	$scope.eventTimesChanged = function (event) {
		showModal('Dropped or resized', event);
	};

	$scope.toggle = function ($event, field, event) {
		$event.preventDefault();
		$event.stopPropagation();
		event[field] = !event[field];
	};


})

.controller('NormalUserCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
	$scope.template = TemplateService.changecontent("normal-user");
	$scope.menutitle = NavigationService.makeactive("How-works");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.showAmature = false;
})

.controller('ExpertCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
	$scope.template = TemplateService.changecontent("expert");
	$scope.menutitle = NavigationService.makeactive("Expert");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.showAmature = false;
	//	$scope.myClass = "test";
})

.controller('ProCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, ngDialog) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("pro");
	$scope.menutitle = NavigationService.makeactive("Pro");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.showAmature = false;
	$scope.profile = {
		name: "Amar Chhetri",
		current: "Sr. Web Developer at WNS",
		company: "Global Services",
		location: "Mumbai City, India",
		skills: "Service Orientation , Time Management , Instructing  , Monitoring , Management of Personnel Resources , Management of Material Resources , Judgment and Decision Making",
		websites: [{
			link: "www.india.com"
    }, {
			link: "www.wohlig.com"
    }, {
			link: "www.magicmirror.com"
    }, {
			link: "www.auraart.com"
    }],
		videos: [{
			src: "img/video.jpg"
    }, {
			src: "img/video.jpg"
    }, {
			src: "img/video.jpg"
    }, {
			src: "img/video.jpg"
    }],
		honors: {
			name: "ICICI Lombard - Project Manager",
			desc: "Project developed & completed with good presentation in absence of Team Leader along with half of actual timelines"
		},
		experience: "12",
		country: "India",
		city: "Mumbai",
		gender: "Male",
		phone: "878784654",
		email: "amit@gmail.com",
		age: "35",
		cost: "500/-",
		consultcount: "5"

	};
	$scope.amature = {
		jobs: [{
			title: "Singer",
			weblinks: [{
				link: "https://www.youtube.com/watch?v=fA29WPCJVMY"
      }, {
				link: "https://www.youtube.com/watch?v=fA29WPCJVMY"
      }]

    }],
		followercount: "500",
		cost: "250",
		consultcount: "50"

	};
	$scope.toggle = function () {
		$scope.showAmature = !$scope.showAmature;
	}
})

.controller('BookingCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("booking");
	$scope.menutitle = NavigationService.makeactive("Booking");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.tab = {
		left: true,
		center: false,
		right: false
	};
	$scope.history = [{
		name: "Rohan Cheddha",
		img: "img/info/info4.jpg",
		designation: "Travel",
		date: "12 November 2015",
		cost: "500/-"
  }, {
		name: "Dr. Sourabh Joshi",
		img: "img/info/info3.jpg",
		designation: "Health",
		date: "15 November 2015",
		cost: "500/-"
  }];

	$scope.history1 = [{
		name: "Aman Chhetri",
		img: "img/info/info1.jpg",
		date: "13 November 2015",
		cost: "500/-"
  }, {
		name: "Jagruti Patil",
		img: "img/info/info2.jpg",
		date: "14 November 2015",
		cost: "500/-"
  }];
	$scope.historytab = 1;
	$scope.activate = true;
	$scope.changeTab = function (tab) {
		$scope.historytab = tab;
		$scope.activate = $scope.activate === true ? false : true;
		$scope.tab = {
			left: false,
			center: false,
			right: false
		};
		if (tab === 1)
			$scope.tab.left = true;
		else if (tab === 2)
			$scope.tab.center = true;
		else
			$scope.tab.right = true;
		console.log($scope.tab);
	};


	//calendar

	$scope.vm = this;
	//These variables MUST be set as a minimum for the calendar to work
	$scope.vm.calendarView = 'month';
	$scope.vm.calendarDay = new Date();
	$scope.vm.events = [{
		title: 'An event',
		type: 'warning',
		startsAt: moment().startOf('week').subtract(2, 'days').add(8, 'hours').toDate(),
		endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
		draggable: true,
		resizable: true
  }, {
		title: '<i class="glyphicon glyphicon-asterisk"></i> <span class="text-primary">Another event</span>, with a <i>html</i> title',
		type: 'info',
		startsAt: moment().subtract(1, 'day').toDate(),
		endsAt: moment().add(5, 'days').toDate(),
		draggable: true,
		resizable: true
  }, {
		title: 'This is a really long event title that occurs on every year',
		type: 'important',
		startsAt: moment().startOf('day').add(7, 'hours').toDate(),
		endsAt: moment().startOf('day').add(19, 'hours').toDate(),
		recursOn: 'year',
		draggable: true,
		resizable: true
  }];

	/*
	 var currentYear = moment().year();
	 var currentMonth = moment().month();

	function random(min, max) {
	  return Math.floor((Math.random() * max) + min);
	}

	for (var i = 0; i < 1000; i++) {
	  var start = new Date(currentYear,random(0, 11),random(1, 28),random(0, 24),random(0, 59));
	 vm.events.push({
	    title: 'Event ' + i,
	    type: 'warning',
	    startsAt: start,
	    endsAt: moment(start).add(2, 'hours').toDate()
	  })
	}*/

	function showModal(action, event) {
		//				$modal.open({
		//					templateUrl: 'views/content/modal-login.html',
		//					controller: function () {
		//						$scope.vm = this;
		//						$scope.vm.action = action;
		//						$scope.vm.event = event;
		//					},
		//					controllerAs: 'CalendarCtrl'
		//				});
		ngDialog.open({
			scope: $scope,
			template: 'views/content/modal-login.html'
		});
	}

	$scope.eventClicked = function (event) {
		showModal('Clicked', event);
	};

	$scope.eventEdited = function (event) {
		showModal('Edited', event);
	};

	$scope.eventDeleted = function (event) {
		showModal('Deleted', event);
	};

	$scope.eventTimesChanged = function (event) {
		showModal('Dropped or resized', event);
	};

	$scope.toggle = function ($event, field, event) {
		$event.preventDefault();
		$event.stopPropagation();
		event[field] = !event[field];
	};


})

.controller('CheckoutCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
		//Used to name the .html file
		$scope.template = TemplateService.changecontent("checkout");
		$scope.menutitle = NavigationService.makeactive("Checkout");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})
	.controller('AccountCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
		//Used to name the .html file
		$scope.template = TemplateService.changecontent("account");
		$scope.menutitle = NavigationService.makeactive("Account");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})
	.controller('WithdrawalCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
		//Used to name the .html file
		$scope.template = TemplateService.changecontent("withdrawal");
		$scope.menutitle = NavigationService.makeactive("Withdrawal");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
	})
	.controller('SettingCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, ngDialog, $timeout) {
		//Used to name the .html file
		$scope.template = TemplateService.changecontent("setting");
		$scope.menutitle = NavigationService.makeactive("Setting");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		$scope.tabs = [{
			title: 'Personal',
			url: 'views/content/personal.html',
			myclass: "active"
        }, {
			title: 'Professional',
			url: 'views/content/professional.html',
			myclass: "active"
        }, {
			title: 'Amateur',
			url: 'views/content/amature.html',
			myclass: "active"
    }];

		$scope.currentTab = 'views/content/personal.html';

		$scope.onClickTab = function (tab) {
			$scope.currentTab = tab.url;
		}

		$scope.isActiveTab = function (tabUrl) {
			return tabUrl == $scope.currentTab;
		}
		$scope.showHelp = function () {
			ngDialog.open({
				scope: $scope,
				template: 'views/content/modal-help.html'
			});
		};

		//
		//    $scope.uljson = [{
		//      name: "Personal",
		//      active: true,
		//      class: "active"
		//    }, {
		//      name: "Professional",
		//      active: false,
		//      class: ""
		//    }, {
		//      name: "Amateur (Musician)",
		//      active: false,
		//      class: ""
		//    }, {
		//      name: "Calendar",
		//      active: false,
		//      class: ""
		//    }]
		//
		//    $scope.changetab = function(name) {
		//      console.log(name);
		//      _.each($scope.uljson, function(n) {
		//        if (n.name === name) {
		//          n.active = true;
		//          n.class = "active";
		//        } else {
		//          n.active = false;
		//          n.class = "";
		//        }
		//      })
		//    }
		//    $scope.uiConfig = {
		//      calendar: {
		//        height: 450,
		//        editable: true,
		//        header: {
		//          left: 'month basicWeek basicDay agendaWeek agendaDay',
		//          center: 'title',
		//          right: 'today prev,next'
		//        },
		//        dayClick: $scope.alertEventOnClick,
		//        eventDrop: $scope.alertOnDrop,
		//        eventResize: $scope.alertOnResize
		//      }
		//    };

	})

.controller('SearchProCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, ngDialog) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("search-pro");
	$scope.menutitle = NavigationService.makeactive("search-pro");
	$scope.menutitle = NavigationService.makeactive("Search");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	//	$scope.reload = function () {
	//		cfpLoadingBar.start();
	$scope.professional = [{
		img: 'img/info/info1.jpg',
		ispro: true,
		name: 'Nishant Rathod',
		tech: 'Travel',
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
		price: '500',
		consultcount: '36',
  }, {
		img: 'img/info/info2.jpg',
		ispro: true,
		name: 'Rani Chhetri',
		tech: 'Travel',
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
		price: '500',
		consultcount: '30',
  }, {
		img: 'img/info/info3.jpg',
		ispro: false,
		name: 'Aman Verma',
		tech: 'Travel',
		desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
		price: '250',
		consultcount: '8',
  }];

	$scope.profile = {
		name: "Amar Chhetri",
		current: "Travel",
		company: "Global Services",
		location: "Mumbai City, India",
		skills: "Service Orientation , Time Management , Instructing  , Monitoring , Management of Personnel Resources , Management of Material Resources , Judgment and Decision Making",
		websites: [{
			link: "www.india.com"
    }, {
			link: "www.wohlig.com"
    }, {
			link: "www.magicmirror.com"
    }, {
			link: "www.auraart.com"
    }],
		honors: {
			name: "ICICI Lombard - Project Manager",
			desc: "Project developed & completed with good presentation in absence of Team Leader along with half of actual timelines"
		},
		experience: "12",
		country: "India",
		city: "Mumbai",
		age: "35",
		cost: "500/-",
		consultcount: "171"

	};

	$scope.showQuickview = function () {
		ngDialog.open({
			scope: $scope,
			template: 'views/content/modal-quickview.html'
		});
	};
})

.controller('FeatureCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, toaster, ngDialog, valdr) {
	$scope.template = TemplateService.changecontent("feature");
	$scope.menutitle = NavigationService.makeactive("Features");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	//Angular Loader Example
	//Start loader
	$scope.showLoader = function () {
			cfpLoadingBar.start();
		}
		//Complete loader
	$scope.hideLoader = function () {
		cfpLoadingBar.complete();
	}

	//Angular toaster
	$scope.showToaster = function () {
		toaster.pop({
			type: 'success',
			title: 'Success!',
			body: 'Huraaay!',
			showCloseButton: true
		});
	};

	//Tags input
	$scope.tags = [{
		text: 'Chintan'
  }, {
		text: 'Saloni'
  }, {
		text: 'Sohan'
  }, {
		text: 'Mahesh'
  }, {
		text: 'Jagruti'
  }];

	//ngDialog
	$scope.showPopup = function () {
		ngDialog.open({
			template: 'demopop'
		});
	};

	//Valdr
	valdr.addConstraints({
		'Person': {
			'firstName': {
				'size': {
					'min': 3,
					'max': 20,
					'message': 'First name is required to be between 3 and 20 characters.'
				},
				'required': {
					'message': 'First name is required.'
				}
			}
		}
	});

	//Colours for ui-select
	$scope.availableColors = ['Red', 'Green', 'Blue', 'Yellow', 'Magenta', 'Maroon', 'Umbra', 'Turquoise'];

	//MomentJS
	$scope.today = new Date();
	$scope.dateformat = "medium";

	/*reCaptcha*/
	$scope.response = null;
	$scope.widgetId = null;

	$scope.setResponse = function (response) {
		$scope.response = response;
		console.log($scope.response);
	};
	$scope.setWidgetId = function (widgetId) {
		console.info('Created widget ID: %s', widgetId);
		$scope.widgetId = widgetId;
	};
	$scope.cbExpiration = function () {
		console.info('Captcha expired. Resetting response object');
		$scope.response = null;
	};
	$scope.submit = function () {
		var valid;
		/**
		 * SERVER SIDE VALIDATION
		 *
		 * You need to implement your server side validation here.
		 * Send the reCaptcha response to the server and use some of the server side APIs to validate it
		 * See https://developers.google.com/recaptcha/docs/verify
		 */
		console.log('sending the captcha response to the server', $scope.response);
		if (valid) {
			console.log('Success');
		} else {
			console.log('Failed validation');
			// In case of a failed validation you need to reload the captcha
			// because each response can be checked just once
			vcRecaptchaService.reload($scope.widgetId);
		}
	};

})

.controller('InfiniteCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService.changecontent("infinite");
		$scope.menutitle = NavigationService.makeactive("Infinite Scroll");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();

		//Infinite scroll
		$scope.images = [1, 2, 3, 4, 5, 6, 7, 8];
		$scope.loadMore = function () {
			var last = $scope.images[$scope.images.length - 1];
			for (var i = 1; i <= 8; i++) {
				$scope.images.push(last + i);
			}
		};
	})
	.controller('QuestionsCtrl', function ($scope, TemplateService, NavigationService, ngDialog) {
		$scope.template = TemplateService.changecontent("qts-asked");
		$scope.menutitle = NavigationService.makeactive("Questions");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
		$scope.historytab = 1;
		$scope.activate = true;
		$scope.profile = {
			name: "Amar Chhetri",
			current: "Travel",
			company: "Global Services",
			location: "Mumbai City, India",
			skills: "Service Orientation , Time Management , Instructing  , Monitoring , Management of Personnel Resources , Management of Material Resources , Judgment and Decision Making",
			websites: [{
				link: "www.india.com"
    }, {
				link: "www.wohlig.com"
    }, {
				link: "www.magicmirror.com"
    }, {
				link: "www.auraart.com"
    }],
			honors: {
				name: "ICICI Lombard - Project Manager",
				desc: "Project developed & completed with good presentation in absence of Team Leader along with half of actual timelines"
			},
			experience: "12",
			country: "India",
			city: "Mumbai",
			age: "35",
			cost: "500/-",
			consultcount: "171"

		};

		$scope.showQuickview = function () {
			ngDialog.open({
				scope: $scope,
				template: 'views/content/modal-quickview.html'
			});
		};
		$scope.youasked = [{
			name: "Aman Chhetri",
			expertice: "Professional",
			img: "img/info/info1.jpg",
			answer: 'yes'
    }, {
			name: "Mahesh Maurya",
			expertice: "Amatuer",
			img: "img/info/info3.jpg",
			answer: 'no'
    }, {
			name: "Rani Verma",
			expertice: "Professional",
			img: "img/info/info2.jpg",
			answer: 'wait'
    }];

		$scope.askedyou = [{
			name: "Mahesh Maurya",
			img: "img/info/info1.jpg",
			questiontag: "Travel (Amateur)",
			question: "Do you know about new places to travel?"
    }, {
			name: "Aman Chhetri",
			img: "img/info/info3.jpg",
			questiontag: "Life Style (Pro)",
			question: "Can you help me with life style?"
    }];
		$scope.changeTab = function (tab) {
			$scope.historytab = tab;
			$scope.activate = $scope.activate === true ? false : true;
		}
	})

.controller('headerctrl', function ($scope, TemplateService, ngDialog) {
	$scope.template = TemplateService;
	$scope.logintab = {};
	$scope.logintab.tab = tabvalue;

	$scope.showLogin = function () {
		tabvalue = '1';
		ngDialog.open({
			scope: $scope,
			template: 'views/content/modal-login.html'
		});
	};
	$scope.changeTab = function (tab) {
		$scope.logintab.tab = tab;
	}

	$scope.showSignup = function () {
		tabvalue = '2';
		ngDialog.open({
			scope: $scope,
			template: 'views/content/modal-login.html'
		});
	}
})


//.controller('ProfessionalCtrl', function ($scope, TemplateService, NavigationService) {
//	$scope.template = TemplateService.changecontent("professional");
//	$scope.menutitle = NavigationService.makeactive("Professional");
//	TemplateService.title = $scope.menutitle;
//	$scope.navigation = NavigationService.getnav();
//})
//
//.controller('PersonalCtrl', function ($scope, TemplateService, NavigationService) {
//		$scope.template = TemplateService.changecontent("personal");
//		$scope.menutitle = NavigationService.makeactive("Personal");
//		TemplateService.title = $scope.menutitle;
//		$scope.navigation = NavigationService.getnav();
//	})
//	.controller('AmatureCtrl', function ($scope, TemplateService, NavigationService) {
//		$scope.template = TemplateService.changecontent("amature");
//		$scope.menutitle = NavigationService.makeactive("Amature");
//		TemplateService.title = $scope.menutitle;
//		$scope.navigation = NavigationService.getnav();
//	});
