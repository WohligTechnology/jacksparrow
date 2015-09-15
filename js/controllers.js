var tabvalue = '1';

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar', 'infinite-scroll', 'toaster', 'ngAnimate', 'ngAutocomplete', 'ngTagsInput', 'ngDialog', 'ngSocial', 'valdr', 'ui.select', 'angular-flexslider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.header = "views/header-login.html";
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.mySlides = [
          'img/slider/slider1.jpg',
         'img/slider/slider2.jpg'
    ];
})

.controller('ProCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
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
        skills: "HTML , CSS , Javascript , Jquery , Drupal , Magento , PL/SQL , C++ , C",
        websites: [
            {
                link: "Panic.com"
            }, {
                link: "wohlig.com"
            }, {
                link: "magicmirror.com"
            }, {
                link: "auraart.com"
            }
        ],
        honors: {
            name: "ICICI Lombard - Project Manager",
            desc: "Project developed & completed with good presentation in absence of Team Leader along with half of actual timelines"
        },
        experience: "12",
        country: "India",
        city: "Mumbai",
        age: "35",
        cost: "20000/-",
        consultcount: "171"

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
        followercount:"500",
            cost:"500",
            consultcount:"50"

    };
    $scope.toggle = function () {
        $scope.showAmature = !$scope.showAmature;
    }
})

.controller('HistoryCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("history");
    $scope.menutitle = NavigationService.makeactive("History");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.history = [{
            name: "Aman Chhetri",
            designation: "Web developer",
            date: "13/06/1970",
            cost: "5000/-"
        },
        {
            name: "Mahesh Maurya",
            designation: "Web developer",
            date: "13/06/1970",
            cost: "5000/-"
        }];
    $scope.historytab = 1;
    $scope.activate = true;
    $scope.changeTab = function (tab) {
        $scope.historytab = tab;
        $scope.activate = $scope.activate === true ? false : true;
    }
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
    .controller('SettingCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("setting");
        $scope.menutitle = NavigationService.makeactive("Setting");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.uljson = [{
            name: "Personal",
            active: true,
            class: "active"
        }, {
            name: "Professional",
            active: false,
            class: ""
        }, {
            name: "Amateur",
            active: false,
            class: ""
        }]

        $scope.changetab = function (name) {
            console.log(name);
            _.each($scope.uljson, function (n) {
                if (n.name === name) {
                    n.active = true;
                    n.class = "active";
                } else {
                    n.active = false;
                    n.class = "";
                }
            })
        }

    })

.controller('SearchProCtrl', function ($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("search-pro");
    $scope.menutitle = NavigationService.makeactive("search-pro");
    $scope.menutitle = NavigationService.makeactive("Search");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    $scope.professional = [{
            img: 'img/info/info1.jpg',
            name: 'Nishant Rathod',
            companylink: 'azzaroco',
            tech: 'Javascript/miscellaneous',
            desc: 'High Resolution: Yes, Compatible Browsers: IE9, IE10, IE11, Firefox, Safari, Opera, Chrome, jQuery',
            price: '7000',
            consultcount: '256',
        },
        {
            img: 'img/info/info1.jpg',
            name: 'Amar Chhetri',
            companylink: 'jdktrml',
            tech: 'Javascript/miscellaneous',
            desc: 'High Resolution: Yes, Compatible Browsers: IE9, IE10, IE11, Firefox, Safari, Opera, Chrome, jQuery',
            price: '5000',
            consultcount: '300',
                    },
        {
            img: 'img/info/info1.jpg',
            name: 'Aman Verma',
            companylink: 'jdktrml',
            tech: 'Javascript/miscellaneous',
            desc: 'High Resolution: Yes, Compatible Browsers: IE9, IE10, IE11, Firefox, Safari, Opera, Chrome, jQuery',
            price: '4000',
            consultcount: '210',
                    },
        {
            img: 'img/info/info1.jpg',
            name: 'Aman Sharma',
            companylink: 'jdktrml',
            tech: 'Javascript/miscellaneous',
            desc: 'High Resolution: Yes, Compatible Browsers: IE9, IE10, IE11, Firefox, Safari, Opera, Chrome, jQuery',
            price: '4000',
            consultcount: '100',
            }];
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
    .controller('QuestionsCtrl', function ($scope, TemplateService, NavigationService) {
        $scope.template = TemplateService.changecontent("qts-asked");
        $scope.menutitle = NavigationService.makeactive("Home");

        $scope.menutitle = NavigationService.makeactive("Home");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.historytab = 1;
        $scope.activate = true;
        $scope.youasked = [{
            name: "Aman Chhetri",
            expertice: "Professional",
            buttons: {
                yes: true,
                no: false,
                waiting: false
            }
        }, {
            name: "Mahesh Maurya",
            expertice: "Amatuer",
            buttons: {
                yes: false,
                no: true,
                waiting: false
            }
        }, {
            name: "Amit Verma",
            expertice: "Professional",
            buttons: {
                yes: false,
                no: false,
                waiting: true
            }
        }];
        $scope.askedyou = [{
            name: "Mahesh Maurya",
            questiontag: "Music(Amateur)",
            question: "Do you know about cords in a guitar?"
    }, {
            name: "Aman Chhetri",
            questiontag: "Web Developer(Pro)",
            question: "Do you know how to translate css?"
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

    //    $scope.showsignup = function () {
    //        ngDialog.open({
    //            template: 'views/content/signup.html'
    //        });
    //    };

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

;