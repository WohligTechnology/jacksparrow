var tabvalue = '1';
var uploadres = [];
window.uploadUrl = 'http://localhost/jacknowsbackend/index.php/json/uploadImage';
// window.uploadUrl = 'http://wohlig.co.in/jacknowsbackend/index.php/json/uploadImage';
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'cfp.loadingBar','ngTagsInput', 'infinite-scroll', 'ngAnimate', 'ngDialog', 'ui.select', 'angular-flexslider', 'mwl.calendar', 'angularFileUpload'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, $state, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    // TemplateService.header = "views/header-login.html";
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.search = {};

    $scope.mySlides1 = [{
        src: 'img/slider/user-normal.jpg',
        tagline: "Find an expert to assist you",
        subline: "The only platform which has best experts on any field."
    }, {
        src: 'img/slider/user-normal1.jpg',
        tagline: "Start looking for an expert now",
        subline: "The only platform which has best experts on any field."
    }];
    $scope.mySlides2 = [{
        src: 'img/slider/user-expert.jpg',
        tagline: "Earn money sitting at home",
        subline: "Become an expert on the website now."
    }];

    $scope.registerAsExpert = function() {
        $.jStorage.set("isExpert", true);
        $state.go("setting");
    }

    $scope.getSearchResults = function() {
        console.log($scope.search);
        if ($scope.search.searchquery) {
            $state.go("searchpro", {
                "search": $scope.search.searchquery
            })
        }
    }

})

.controller('CalendarCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, $modal, ngDialog) {
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
        //              $modal.open({
        //                  templateUrl: 'views/content/modal-login.html',
        //                  controller: function () {
        //                      $scope.vm = this;
        //                      $scope.vm.action = action;
        //                      $scope.vm.event = event;
        //                  },
        //                  controllerAs: 'CalendarCtrl'
        //              });
        ngDialog.open({
            scope: $scope,
            template: 'views/content/modal-login.html'
        });
    }

    $scope.eventClicked = function(event) {
        console.log("sjnkjndv0");
        showModal('Clicked', event);
    };

    $scope.eventEdited = function(event) {
        showModal('Edited', event);
    };

    $scope.eventDeleted = function(event) {
        showModal('Deleted', event);
    };

    $scope.eventTimesChanged = function(event) {
        showModal('Dropped or resized', event);
    };

    $scope.toggle = function($event, field, event) {
        $event.preventDefault();
        $event.stopPropagation();
        event[field] = !event[field];
    };


})

.controller('NormalUserCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    $scope.template = TemplateService.changecontent("normal-user");
    $scope.menutitle = NavigationService.makeactive("How-works");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.showAmature = false;

    $scope.worksImg = "works1.png";
})

.controller('ExpertCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
    $scope.template = TemplateService.changecontent("expert");
    $scope.menutitle = NavigationService.makeactive("Expert");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.showAmature = false;
    //  $scope.myClass = "test";

    $scope.worksImg = "works5.png";
})

.controller('ProCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, ngDialog, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("pro");
    $scope.menutitle = NavigationService.makeactive("Pro");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.video = {};
    $scope.video.id = "A_SESWG5c1g";
    NavigationService.getUserDetails($stateParams.id, function(data) {
        if (data) {
            console.log(data);
            $scope.profile = data;
        }
    }, function(err) {
        if (err) {
            console.log(err);
        }
    })

    $scope.showAmature = false;
    // $scope.profile = {
    //     name: "Amar Chhetri",
    //     current: "Sr. Web Developer at WNS",
    //     company: "Global Services",
    //     location: "Mumbai City, India",
    //     // skills: "Service Orientation , Time Management , Instructing  , Monitoring , Management of Personnel Resources , Management of Material Resources , Judgment and Decision Making",
    //     websites: [{
    //         link: "www.india.com"
    //     }, {
    //         link: "www.mytrip.com"
    //     }],
    //     videos: [{
    //         src: "img/video.jpg"
    //     }, {
    //         src: "img/video.jpg"
    //     }, {
    //         src: "img/video.jpg"
    //     }, {
    //         src: "img/video.jpg"
    //     }],
    //     honors: {
    //         name: "ICICI Lombard - Project Manager",
    //         desc: "Project developed & completed with good presentation in absence of Team Leader along with half of actual timelines"
    //     },
    //     experience: "12",
    //     country: "India",
    //     city: "Mumbai",
    //     gender: "Male",
    //     phone: "878784654",
    //     email: "amit@gmail.com",
    //     age: "35",
    //     cost: "500/-",
    //     consultcount: "5"

    // };
    // $scope.amature = {
    //     jobs: [{
    //         title: "Singer",
    //         weblinks: [{
    //             link: "https://www.youtube.com/watch?v=fA29WPCJVMY"
    //         }, {
    //             link: "https://www.youtube.com/watch?v=fA29WPCJVMY"
    //         }]

    //     }],
    //     followercount: "500",
    //     cost: "250",
    //     consultcount: "50"

    // };
    $scope.toggle = function() {
        $scope.showAmature = !$scope.showAmature;
    }
    $scope.showVideo = function(url) {
        $scope.videourl = url.videos;
        ngDialog.open({
            scope: $scope,
            template: 'views/content/modal-videos.html'
        });
    };
})


.controller('EditProfessionalCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, ngDialog) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("edit-professional");
    $scope.menutitle = NavigationService.makeactive("Edit Professional");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.showAmature = false;
    $scope.profile = {
        name: "Amar Chhetri",
        current: "Sr. Web Developer at WNS",
        company: "Global Services",
        location: "Mumbai City, India",
        // skills: "Service Orientation , Time Management , Instructing  , Monitoring , Management of Personnel Resources , Management of Material Resources , Judgment and Decision Making",
        websites: [{
            link: "www.india.com"
        }, {
            link: "www.mytrip.com"
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
    $scope.toggle = function() {
        $scope.showAmature = !$scope.showAmature;
    }
})


.controller('BookingCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
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
    $scope.changeTab = function(tab) {
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
        //              $modal.open({
        //                  templateUrl: 'views/content/modal-login.html',
        //                  controller: function () {
        //                      $scope.vm = this;
        //                      $scope.vm.action = action;
        //                      $scope.vm.event = event;
        //                  },
        //                  controllerAs: 'CalendarCtrl'
        //              });
        ngDialog.open({
            scope: $scope,
            template: 'views/content/modal-login.html'
        });
    }

    $scope.eventClicked = function(event) {
        showModal('Clicked', event);
    };

    $scope.eventEdited = function(event) {
        showModal('Edited', event);
    };

    $scope.eventDeleted = function(event) {
        showModal('Deleted', event);
    };

    $scope.eventTimesChanged = function(event) {
        showModal('Dropped or resized', event);
    };

    $scope.toggle = function($event, field, event) {
        $event.preventDefault();
        $event.stopPropagation();
        event[field] = !event[field];
    };


})

.controller('CheckoutCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("checkout");
        $scope.menutitle = NavigationService.makeactive("Checkout");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('AccountCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("account");
        $scope.menutitle = NavigationService.makeactive("Account");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('WithdrawalCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("withdrawal");
        $scope.menutitle = NavigationService.makeactive("Withdrawal");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })

.controller('SettingCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, ngDialog, $timeout, $filter, $http, $upload, $state, cfpLoadingBar) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("setting");
    $scope.menutitle = NavigationService.makeactive("Setting");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.user = {};
    $scope.user.personal = {};
    $scope.user.personal.image = "";
    $scope.user.professional = {};
    $scope.user.hobbies = {};
    $scope.user.professional.photos = [];
    $scope.user.hobbies.photos = [];
    $scope.showCategoryInput = false;
    $scope.showExpertMsg = true;
    $scope.showProfessionalWait = false;
    $scope.showHobbyWait = false;
    $scope.invalidContact = false;
    $scope.alreadyRegistered = false;
    $scope.passwordMismatch = false;
    $scope.selectCategoryErr = false;
    $scope.enterSkillErr = false;
    $scope.enterSkillHobbyErr = false;

    $scope.getUserData = function() {
        if (NavigationService.getUser()) {
            cfpLoadingBar.start();
            NavigationService.getAllUserDetails(function(data) {
                if (data) {
                    console.log(data);
                    cfpLoadingBar.complete();
                    manipulateData(data);
                }
            }, function(err) {
                if (err) {
                    console.log(err);
                }
            });
        } else {
            defineProfessionalArrays();
            defineHobbiesArrays();
        }
    }

    $scope.getUserData();

    if ($.jStorage.get("isExpert")) {
        if ($.jStorage.get("isExpert") == true) {
            $scope.showExpertMsg = false;
            $scope.user.personal.isexpert = "1";
        } else {
            $scope.showExpertMsg = true;
            $scope.user.personal.isexpert = "2";
        }
    }

    $scope.becomeExpert = function() {
        $.jStorage.set("isExpert", true);
        $scope.user.personal.isexpert = "1";
        $scope.showExpertMsg = false;
    }

    $scope.categoryJson = [{
        name: "Career Counselling",
        icon: "fa fa-graduation-cap fa-2x",
        activeclass: ""
    }, {
        name: "Travel",
        icon: "fa fa-suitcase fa-2x",
        activeclass: ""
    }, {
        name: "Health",
        icon: "fa fa-heartbeat fa-2x",
        activeclass: ""
    }, {
        name: "Life style",
        icon: "fa fa-child fa-2x",
        activeclass: ""
    }, {
        name: "Others",
        icon: "fa fa-plus fa-2x",
        activeclass: ""
    }];

    $scope.makeActiveIcon = function(index) {
        $scope.user.professional.category = $scope.categoryJson[index].name;
        var i = 0;
        _.each($scope.categoryJson, function(n) {
            if (i == index) {
                n.activeclass = "active";
            } else {
                n.activeclass = "";
            }
            i++;
        })
        if ($scope.categoryJson[index].name == "Others") {
            $scope.showCategoryInput = true;
            $scope.user.professional.category = "";
        } else {
            $scope.showCategoryInput = false;
        }
    }

    function defineProfessionalArrays() {
        //professional
        $scope.user.professional.qualification = [{
            "degree": "",
            "institute": "",
            "year": ""
        }];

        $scope.user.professional.experience = [{
            "companyname": "",
            "jobtitle": "",
            "jobdesc": "",
            "startdate": "",
            "enddate": "",
            "logo": ""
        }];

        $scope.user.professional.awards = [{
            "awards": ""
        }];

        $scope.user.professional.websites = [{
            "websites": ""
        }];

        $scope.user.professional.videos = [{
            "videos": ""
        }];
        //professional
    }

    function defineHobbiesArrays() {
        //hobbies
        $scope.user.hobbies.qualification = [{
            "degree": "",
            "institute": "",
            "year": ""
        }];

        $scope.user.hobbies.awards = [{
            "awards": ""
        }];

        $scope.user.hobbies.websites = [{
            "websites": ""
        }];

        $scope.user.hobbies.videos = [{
            "videos": ""
        }];
        //hobbies
    }

    if (NavigationService.getUser()) {
        $scope.user.personal = NavigationService.getUser();
        if ($scope.user.personal.name) {
            var split = $scope.user.personal.name.split(" ");
            if (split[0]) {
                $scope.user.personal.firstname = split[0];
            }
            if (split[1]) {
                $scope.user.personal.lastname = split[1];
            }
        }
    }

    $scope.tabs = [{
        title: 'PERSONAL DETAILS',
        url: 'views/content/personal.html',
        myclass: "active"
    }, {
        title: 'PROFESSIONAL DETAILS',
        url: 'views/content/professional.html',
        myclass: "active"
    }, {
        title: 'HOBBY DETAILS',
        url: 'views/content/amature.html',
        myclass: "active"
    }];
    $scope.currentTab = 'views/content/personal.html';

    $scope.onClickTab = function(tab) {
        $scope.currentTab = tab.url;
    }

    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
    $scope.showHelp = function() {
        ngDialog.open({
            scope: $scope,
            template: 'views/content/modal-help.html'
        });
    };

    $scope.gotoProfessional = function() {
        $.jStorage.set("isExpert", true);
        $scope.showExpertMsg = false;
        $scope.user.personal.isexpert = "1";
        ngDialog.closeAll();
        $scope.currentTab = 'views/content/professional.html';
    }

    $scope.gotoHobbies = function() {
        ngDialog.closeAll();
        $scope.currentTab = 'views/content/amature.html';
    }

    $scope.gotoHome = function() {
        ngDialog.closeAll();
        $state.go("home");
    }

    $scope.gotoFinish = function() {
        ngDialog.closeAll();

        NavigationService.editHobbyVerification("1", function(data) {
            if (data) {
                console.log(data);
                if (data == "true") {
                    $scope.showHobbyWait = true;
                }
            }
        }, function(err) {
            if (err) {
                console.log(err);
            }
        });

        NavigationService.editProfessionVerification("1", function(data) {
            if (data) {
                ngDialog.open({
                    scope: $scope,
                    template: 'views/content/modal-success.html'
                });
                console.log(data);
                if (data == "true") {
                    $scope.showProfessionalWait = true;
                }
            }
        }, function(err) {
            if (err) {
                console.log(err);
            }
        });

    }

    $scope.addQualification = function(obj) {
        if (obj[obj.length - 1].degree != "") {
            obj.push({
                "degree": "",
                "institute": "",
                "year": ""
            });
        }
    };

    $scope.deleteQualification = function(obj, index) {
        obj.splice(index, 1);
    }

    $scope.addExperience = function(obj) {
        if (obj[obj.length - 1].companyname != "") {
            obj.push({
                "companyname": "",
                "jobtitle": "",
                "jobdesc": "",
                "startdate": "",
                "enddate": "",
                "logo": ""
            });
        }
    };

    $scope.deleteExperience = function(obj, index) {
        obj.splice(index, 1);
    }

    $scope.addAwards = function(obj) {
        if (obj[obj.length - 1].awards != "") {
            obj.push({
                "awards": ""
            });
        }
    };

    $scope.deleteAwards = function(obj, index) {
        obj.splice(index, 1);
    }

    $scope.addWebsites = function(obj) {
        if (obj[obj.length - 1].websites != "") {
            obj.push({
                "websites": ""
            });
        }
    };

    $scope.deleteWebsites = function(obj, index) {
        obj.splice(index, 1);
    }

    $scope.addVideos = function(obj) {
        if (obj[obj.length - 1].videos != "") {
            obj.push({
                "videos": ""
            });
        }
    };

    $scope.deleteVideos = function(obj, index) {
        obj.splice(index, 1);
    }

    $scope.savePersonal = function() {
        if ($scope.user.personal.contact.toString().length == 10) {
            $scope.invalidContact = false;
            if ($scope.showExpertMsg == false) {
                if ($scope.user.personal.password === $scope.user.personal.confirmpassword) {
                    $scope.passwordMismatch = false;
                    var userData = {};
                    userData.name = $scope.user.personal.firstname + " " + $scope.user.personal.lastname;
                    userData.email = $scope.user.personal.email;
                    userData.password = $scope.user.personal.password;
                    userData.isexpert = "1";
                    //call register
                    cfpLoadingBar.start();
                    NavigationService.register(userData, function(data) {
                        if (data) {
                            console.log(data);
                            if (data != "false") {
                                NavigationService.setUser(data);
                                console.log($scope.user.personal);
                                //call edit profile
                                $scope.user.personal.isexpert = "1";
                                NavigationService.editPersonalDetails($scope.user.personal, function(successdata) {
                                    if (successdata) {
                                        console.log(successdata);
                                        cfpLoadingBar.complete();
                                        manipulateData(successdata);
                                        ngDialog.open({
                                            scope: $scope,
                                            template: 'views/content/modal-dialogue.html'
                                        });
                                    }
                                }, function(error) {
                                    if (error) {
                                        console.log(error);
                                    }
                                });
                            } else {
                                if (NavigationService.getUser()) {
                                    $scope.alreadyRegistered = false;
                                    console.log($scope.user.personal);
                                    $scope.user.personal.isexpert = "1";
                                    NavigationService.editPersonalDetails($scope.user.personal, function(successdata) {
                                        if (successdata) {
                                            console.log(successdata);
                                            cfpLoadingBar.complete();
                                            ngDialog.open({
                                                scope: $scope,
                                                template: 'views/content/modal-dialogue.html'
                                            });
                                            manipulateData(successdata);
                                        }
                                    }, function(error) {
                                        if (error) {
                                            console.log(error);
                                        }
                                    });
                                } else {
                                    $scope.alreadyRegistered = true;
                                    $scope.passwordMismatch = false;
                                    $scope.invalidContact = false;
                                }
                            }
                        }
                    }, function(err) {
                        if (err) {
                            console.log(err);
                        }
                    })
                } else {
                    $scope.passwordMismatch = true;
                    $scope.invalidContact = false;
                    $scope.alreadyRegistered = false;
                }
                console.log("check both password");
            } else {
                console.log($scope.user.personal);
                //call edit profile
                cfpLoadingBar.start();
                $scope.user.personal.isexpert = "2";
                NavigationService.editPersonalDetails($scope.user.personal, function(successdata) {
                    if (successdata) {
                        console.log(successdata);
                        cfpLoadingBar.complete();
                        manipulateData(successdata);
                        ngDialog.open({
                            scope: $scope,
                            template: 'views/content/modal-dialogue.html'
                        });
                    }
                }, function(error) {
                    if (error) {
                        console.log(error);
                    }
                });
            }
        } else {
            $scope.invalidContact = true;
            $scope.alreadyRegistered = false;
            $scope.passwordMismatch = false;
        }
    }

    $scope.saveProfessional = function() {
        if ($scope.user.professional.category != "" && $scope.user.professional.skills.length > 0) {
            cfpLoadingBar.start();
            _.each($scope.user.professional.experience, function(n) {
                n.startdate = new Date(n.sdate);
                n.startdate = $filter('date')(n.startdate, "dd-MM-yyyy");
                n.enddate = new Date(n.edate);
                n.enddate = $filter('date')(n.enddate, "dd-MM-yyyy");
            })
            $scope.user.professional.id = NavigationService.getUser().id;
            console.log($scope.user.professional);
            NavigationService.editProfessionalDetails($scope.user.professional, function(data) {
                if (data) {
                    console.log(data);
                    cfpLoadingBar.complete();
                    manipulateData(data);
                    // $scope.showProfessionalWait = true;
                    ngDialog.open({
                        scope: $scope,
                        template: 'views/content/modal-dialogue2.html'
                    });
                    // $timeout(function() {
                    //     ngDialog.closeAll();
                    //     $scope.currentTab = 'views/content/amature.html';
                    // }, 2500);
                }
            }, function(error) {
                if (error) {
                    console.log(error);
                }
            });
        } else {
            if ($scope.user.professional.category == "")
                $scope.selectCategoryErr = false;
            if ($scope.user.professional.skills.length == 0)
                $scope.enterSkillErr = false;
        }
    }

    $scope.saveHobbies = function() {
        if ($scope.user.hobbies.length > 0) {
            $scope.enterSkillHobbyErr = false;
            cfpLoadingBar.start();
            $scope.user.hobbies.id = NavigationService.getUser().id;
            console.log($scope.user.hobbies);
            NavigationService.editHobbiesDetails($scope.user.hobbies, function(data) {
                if (data) {
                    console.log(data);
                    cfpLoadingBar.complete();
                    manipulateData(data);
                    // $scope.showHobbyWait = true;
                    ngDialog.open({
                        scope: $scope,
                        template: 'views/content/modal-success.html'
                    });
                    // $timeout(function() {
                    //     ngDialog.closeAll();
                    // }, 2500);
                }
            }, function(error) {
                if (error) {
                    console.log(error);
                }
            });
        } else {
            $scope.enterSkillHobbyErr = true;
        }
    }

    //imageupload
    var imagejstupld = "";
    $scope.usingFlash = FileAPI && FileAPI.upload != null;
    $scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);
    $scope.uploadRightAway = true;
    $scope.changeAngularVersion = function() {
        window.location.hash = $scope.angularVersion;
        window.location.reload(true);
    };
    $scope.hasUploader = function(index) {
        return $scope.upload[index] != null;
    };
    $scope.abort = function(index) {
        $scope.upload[index].abort();
        $scope.upload[index] = null;
    };
    $scope.angularVersion = window.location.hash.length > 1 ? (window.location.hash.indexOf('/') === 1 ?
        window.location.hash.substring(2) : window.location.hash.substring(1)) : '1.2.20';

    $scope.onFileSelect = function($files, whichone) {
        $scope.selectedFiles = [];
        $scope.progress = [];
        console.log($files);
        if ($scope.upload && $scope.upload.length > 0) {
            for (var i = 0; i < $scope.upload.length; i++) {
                if ($scope.upload[i] != null) {
                    $scope.upload[i].abort();
                }
            }
        }
        $scope.upload = [];
        $scope.uploadResult = uploadres;
        $scope.selectedFiles = $files;
        $scope.dataUrls = [];
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            if ($scope.fileReaderSupported && $file.type.indexOf('image') > -1) {
                var fileReader = new FileReader();
                fileReader.readAsDataURL($files[i]);
                var loadFile = function(fileReader, index) {
                    fileReader.onload = function(e) {
                        $timeout(function() {
                            $scope.dataUrls[index] = e.target.result;
                        });
                    }
                }(fileReader, i);
            }
            $scope.progress[i] = -1;
            if ($scope.uploadRightAway) {
                $scope.start(i, whichone);
            }
        }
    };

    $scope.onFileSelectCompany = function($files, obj) {
        $scope.selectedFiles = [];
        $scope.progress = [];
        console.log($files);
        if ($scope.upload && $scope.upload.length > 0) {
            for (var i = 0; i < $scope.upload.length; i++) {
                if ($scope.upload[i] != null) {
                    $scope.upload[i].abort();
                }
            }
        }
        $scope.upload = [];
        $scope.uploadResult = uploadres;
        $scope.selectedFiles = $files;
        $scope.dataUrls = [];
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            if ($scope.fileReaderSupported && $file.type.indexOf('image') > -1) {
                var fileReader = new FileReader();
                fileReader.readAsDataURL($files[i]);
                var loadFile = function(fileReader, index) {
                    fileReader.onload = function(e) {
                        $timeout(function() {
                            $scope.dataUrls[index] = e.target.result;
                        });
                    }
                }(fileReader, i);
            }
            $scope.progress[i] = -1;
            if ($scope.uploadRightAway) {
                $scope.startCompany(i, obj);
            }
        }
    };

    $scope.startCompany = function(index, obj) {
        cfpLoadingBar.start();
        $scope.progress[index] = 0;
        $scope.errorMsg = null;
        $scope.howToSend = 1;
        if ($scope.howToSend == 1) {
            $scope.upload[index] = $upload.upload({
                url: uploadUrl,
                method: "POST",
                headers: {
                    'Content-Type': 'Content-Type'
                },
                data: {
                    myModel: $scope.myModel
                },
                file: $scope.selectedFiles[index],
                fileFormDataName: 'image'
            });
            $scope.upload[index].then(function(response) {
                console.log(response.data)
                $timeout(function() {
                    cfpLoadingBar.complete();
                    $scope.uploadResult.push(response.data);
                    imagejstupld = response.data;
                    if (imagejstupld != "") {
                        imagejstupld = imagejstupld.split('"').join("");
                        obj.companylogo = imagejstupld;
                    }
                });
            }, function(response) {
                if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
            }, function(evt) {
                $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
            $scope.upload[index].xhr(function(xhr) {});
        } else {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                $scope.upload[index] = $upload.http({
                    url: uploadUrl,
                    headers: {
                        'Content-Type': $scope.selectedFiles[index].type
                    },
                    data: e.target.result
                }).then(function(response) {
                    $scope.uploadResult.push(response.data);
                }, function(response) {
                    if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
                }, function(evt) {
                    $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            }
            fileReader.readAsArrayBuffer($scope.selectedFiles[index]);
        }
    };

    $scope.start = function(index, whichone) {
        cfpLoadingBar.start();
        $scope.progress[index] = 0;
        $scope.errorMsg = null;
        $scope.howToSend = 1;
        if ($scope.howToSend == 1) {
            $scope.upload[index] = $upload.upload({
                url: uploadUrl,
                method: "POST",
                headers: {
                    'Content-Type': 'Content-Type'
                },
                data: {
                    myModel: $scope.myModel
                },
                file: $scope.selectedFiles[index],
                fileFormDataName: 'image'
            });
            $scope.upload[index].then(function(response) {
                console.log(response.data)
                $timeout(function() {
                    cfpLoadingBar.complete();
                    $scope.uploadResult.push(response.data);
                    imagejstupld = response.data;
                    if (imagejstupld != "") {
                        imagejstupld = imagejstupld.split('"').join("");
                        if (whichone == 1) {
                            $scope.user.personal.image = imagejstupld;
                            imagejstupld = "";
                        } else if (whichone == 2) {
                            $scope.user.professional.photos.push(imagejstupld);
                            imagejstupld = "";
                        } else if (whichone == 3) {
                            $scope.user.hobbies.photos.push(imagejstupld);
                            imagejstupld = "";
                        }
                    }
                });
            }, function(response) {
                if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
            }, function(evt) {
                $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
            $scope.upload[index].xhr(function(xhr) {});
        } else {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                $scope.upload[index] = $upload.http({
                    url: uploadUrl,
                    headers: {
                        'Content-Type': $scope.selectedFiles[index].type
                    },
                    data: e.target.result
                }).then(function(response) {
                    $scope.uploadResult.push(response.data);
                }, function(response) {
                    if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
                }, function(evt) {
                    $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            }
            fileReader.readAsArrayBuffer($scope.selectedFiles[index]);
        }
    };

    $scope.dragOverClass = function($event) {
        var items = $event.dataTransfer.items;
        var hasFile = false;
        if (items != null) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].kind == 'file') {
                    hasFile = true;
                    break;
                }
            }
        } else {
            hasFile = true;
        }
        return hasFile ? "dragover" : "dragover-err";
    };
    //imageupload

    $scope.showQuickview = function() {
        ngDialog.open({
            scope: $scope,
            template: 'views/content/modal-dialogue.html'
        });
    };

    function manipulateData(data) {
        $scope.user.personal = data.user;

        if ($scope.user.personal.isexpert == "1") {
            $.jStorage.set("isExpert", true);
            $scope.showExpertMsg = false;
        } else if ($scope.user.personal.isexpert == "2") {
            $.jStorage.set("isExpert", false);
            $scope.showExpertMsg = true;
        }

        if ($scope.user.personal.hobbyverification == "1") {
            $scope.showHobbyWait = true;
        } else if ($scope.user.personal.hobbyverification == "2") {
            $scope.showHobbyWait = false;
        }

        if ($scope.user.personal.professionverification == "1") {
            $scope.showProfessionalWait = true;
        } else if ($scope.user.personal.professionverification == "2") {
            $scope.showProfessionalWait = false;
        }

        $scope.user.professional = data.profession;
        $scope.user.hobbies = data.hobby;
        if (!$scope.user.professional.awards) {
            // $scope.showProfessionalWait = false;
            $scope.user.professional = {};
            defineProfessionalArrays();
        }
        if (!$scope.user.hobbies.awards) {
            // $scope.showHobbyWait = false;
            $scope.user.hobbies = {};
            defineHobbiesArrays();
        }

        //professional
        if ($scope.user.professional.category) {
            var i = 0;
            _.each($scope.categoryJson, function(n) {
                if (n.name == $scope.user.professional.category) {
                    n.activeclass = "active";
                    i++;
                } else {
                    n.activeclass = "";
                }
            })
            if (i == 0) {
                $scope.categoryJson[4].activeclass = "active";
                $scope.showCategoryInput = true;
            }
        }

        _.each($scope.user.professional.experience, function(n) {
            if (n.startdate) {
                n.sdate = new Date(n.startdate);
            }
            if (n.enddate) {
                n.edate = new Date(n.enddate);
            }
        })

        var arr = [];
        _.each($scope.user.professional.photos, function(n) {
            arr.push(n.image);
        })
        $scope.user.professional.photos = arr;

        var hobarr = [];
        _.each($scope.user.hobbies.photos, function(n) {
            hobarr.push(n.image);
        })
        $scope.user.hobbies.photos = hobarr;

        if ($scope.user.professional.awards.length == 0) {
            $scope.user.professional.awards = [{
                "awards": ""
            }];
        }
        if ($scope.user.professional.experience.length == 0) {
            $scope.user.professional.experience = [{
                "companyname": "",
                "jobtitle": "",
                "jobdesc": "",
                "startdate": "",
                "enddate": "",
                "companylogo": ""
            }];
        }
        if ($scope.user.professional.qualification.length == 0) {
            $scope.user.professional.qualification = [{
                "degree": "",
                "institute": "",
                "year": ""
            }];
        }
        if ($scope.user.professional.videos.length == 0) {
            $scope.user.professional.videos = [{
                "videos": ""
            }];
        }
        if ($scope.user.professional.websites.length == 0) {
            $scope.user.professional.websites = [{
                "websites": ""
            }];
        }

        //professional

        //hobbies

        if ($scope.user.hobbies.awards.length == 0) {
            $scope.user.hobbies.awards = [{
                "awards": ""
            }];
        }
        if ($scope.user.hobbies.qualification.length == 0) {
            $scope.user.hobbies.qualification = [{
                "degree": "",
                "institute": "",
                "year": ""
            }];
        }
        if ($scope.user.hobbies.videos.length == 0) {
            $scope.user.hobbies.videos = [{
                "videos": ""
            }];
        }
        if ($scope.user.hobbies.websites.length == 0) {
            $scope.user.hobbies.websites = [{
                "websites": ""
            }];
        }

        //hobbies
        console.log($scope.user);
    }

})

.controller('SearchProCtrl', function($scope, TemplateService, NavigationService, cfpLoadingBar, $timeout, ngDialog, $stateParams) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("search-pro");
    $scope.menutitle = NavigationService.makeactive("search-pro");
    $scope.menutitle = NavigationService.makeactive("Search");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.noData = false;

    //  $scope.reload = function() {
    cfpLoadingBar.start();
    $scope.professional = [];
    NavigationService.searchExpert($stateParams.search, function(data) {
        if (data) {
            console.log(data);
            if (data != "false") {
                $scope.noData = false;
                _.each(data, function(n) {
                    cfpLoadingBar.start();
                    NavigationService.getUserDetails(n.id, function(data2) {
                        cfpLoadingBar.complete();
                        if (data2) {
                            // console.log(data2);
                            $scope.professional.push(data2);
                            // console.log($scope.professional);
                        }
                    }, function(error) {
                        if (error) {
                            console.log(error);
                        }
                    });
                });
            } else {
                $scope.noData = true;
            }
            cfpLoadingBar.complete();
            // console.log($scope.professional);
        }
    }, function(err) {
        if (err) {
            console.log(err);
        }
    })

    // $scope.professional = [{
    //     img: 'img/info/info1.jpg',
    //     ispro: true,
    //     name: 'Nishant Rathod',
    //     tech: 'Travel',
    //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    //     price: '500',
    //     consultcount: '36',
    // }, {
    //     img: 'img/info/info2.jpg',
    //     ispro: true,
    //     name: 'Rani Chhetri',
    //     tech: 'Travel',
    //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    //     price: '500',
    //     consultcount: '30',
    // }, {
    //     img: 'img/info/info3.jpg',
    //     ispro: false,
    //     name: 'Aman Verma',
    //     tech: 'Travel',
    //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    //     price: '250',
    //     consultcount: '8',
    // }];

    // $scope.profile = {
    //     name: "Amar Chhetri",
    //     current: "Travel",
    //     company: "Global Services",
    //     location: "Mumbai City, India",
    //     skills: "Service Orientation , Time Management , Instructing  , Monitoring , Management of Personnel Resources , Management of Material Resources , Judgment and Decision Making",
    //     websites: [{
    //         link: "www.india.com"
    //     }, {
    //         link: "www.wohlig.com"
    //     }, {
    //         link: "www.magicmirror.com"
    //     }, {
    //         link: "www.auraart.com"
    //     }],
    //     honors: {
    //         name: "ICICI Lombard - Project Manager",
    //         desc: "Project developed & completed with good presentation in absence of Team Leader along with half of actual timelines"
    //     },
    //     experience: "12",
    //     country: "India",
    //     city: "Mumbai",
    //     age: "35",
    //     cost: "500/-",
    //     consultcount: "171"

    // };

    $scope.showQuickview = function(expert) {
        console.log(expert);
        $scope.profile = expert;
        ngDialog.open({
            scope: $scope,
            template: 'views/content/modal-quickview.html'
        });
    };

})

.controller('QuestionsCtrl', function($scope, TemplateService, NavigationService, ngDialog) {
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

    $scope.showQuickview = function() {
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
    $scope.tab = {
        left: true,
        right: false
    };
    $scope.historytab = 1;
    $scope.activate = true;
    $scope.changeTab = function(tab) {
        $scope.historytab = tab;
        $scope.activate = $scope.activate === true ? false : true;
        $scope.tab = {
            left: false,
            center: false,
            right: false
        };
        if (tab === 1)
            $scope.tab.left = true;
        else
            $scope.tab.right = true;
        console.log($scope.tab);
    };
})

.controller('headerctrl', function($scope, TemplateService, ngDialog, NavigationService, $state) {
    $scope.template = TemplateService;
    $scope.logintab = {};
    $scope.logintab.tab = tabvalue;
    $scope.register = {};
    $scope.login = {};
    $scope.user = {};
    $scope.showLoginBtn = true;
    $scope.invalidLogin = false;
    $scope.alreadyRegistered = false;

    if (NavigationService.getUser()) {
        $scope.user = NavigationService.getUser();
        $scope.showLoginBtn = false;
    } else {
        $scope.showLoginBtn = true;
    }

    $scope.showLogin = function() {
        tabvalue = '1';
        ngDialog.open({
            scope: $scope,
            template: 'views/content/modal-login.html'
        });
    };
    $scope.changeTab = function(tab) {
        $scope.logintab.tab = tab;
    }

    $scope.showSignup = function() {
        $.jStorage.set("isExpert", false);
        tabvalue = '2';
        ngDialog.open({
            scope: $scope,
            template: 'views/content/modal-login.html'
        });
    }

    $scope.logout = function() {
        $.jStorage.flush();
        $scope.showLoginBtn = true;
        $state.go("home");
    }

    $scope.registerUser = function() {
        if ($scope.register.password === $scope.register.confirmpassword) {
            $scope.register.isexpert = "2";
            console.log($scope.register);
            NavigationService.register($scope.register, function(data) {
                if (data) {
                    console.log(data);
                    if (data != "false") {
                        ngDialog.closeAll();
                        NavigationService.setUser(data);
                        $scope.showLoginBtn = false;
                        $state.go('setting');
                    } else {
                        $scope.alreadyRegistered = true;
                    }
                }
            }, function(err) {
                if (err) {
                    console.log(err);
                }
            })
        } else {
            console.log("passwords dosen't match");
        }
    }

    $scope.userLogin = function() {
        console.log($scope.login);
        NavigationService.login($scope.login, function(data) {
            if (data) {
                console.log(data);
                if (data != "false") {
                    ngDialog.closeAll();
                    NavigationService.setUser(data);
                    $scope.showLoginBtn = false;
                    window.location.reload();
                    // $state.go('setting');
                } else {
                    $scope.invalidLogin = true;
                }
            }
        }, function(err) {
            if (err) {
                console.log(err);
            }
        })
    }
})


//.controller('ProfessionalCtrl', function ($scope, TemplateService, NavigationService) {
//  $scope.template = TemplateService.changecontent("professional");
//  $scope.menutitle = NavigationService.makeactive("Professional");
//  TemplateService.title = $scope.menutitle;
//  $scope.navigation = NavigationService.getnav();
//})
//
//.controller('PersonalCtrl', function ($scope, TemplateService, NavigationService) {
//      $scope.template = TemplateService.changecontent("personal");
//      $scope.menutitle = NavigationService.makeactive("Personal");
//      TemplateService.title = $scope.menutitle;
//      $scope.navigation = NavigationService.getnav();
//  })
//  .controller('AmatureCtrl', function ($scope, TemplateService, NavigationService) {
//      $scope.template = TemplateService.changecontent("amature");
//      $scope.menutitle = NavigationService.makeactive("Amature");
//      TemplateService.title = $scope.menutitle;
//      $scope.navigation = NavigationService.getnav();
//  });
