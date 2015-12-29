// var adminbase = "http://localhost/jacknowsbackend/";
var adminbase = "http://wohlig.co.in/jacknowsbackend/";

var adminurl = adminbase + "index.php/json/";
var adminimage = adminbase + "uploads/";
var adminhauth = adminbase + "index.php/hauth/";
var imgpath = adminimage + "image?name=";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "BOOKINGS",
        classis: "active",
        link: "#/booking",
        subnav: []
    }, {
        name: "Calendar",
        active: "",
        link: "#/calendar",
        classis: "active",
        subnav: []
    }, {
        name: "Questions",
        active: "",
        link: "#/questions",
        classis: "active",
        subnav: []
    }, {
        name: "My Account",
        active: "",
        link: "#/account",
        classis: "active",
        subnav: []
    }
    // , {
    //     name: "My Profile",
    //     active: "",
    //     link: "#/setting",
    //     classis: "active",
    //     subnav: []
    // }, {
    //     name: "logout",
    //     active: "",
    //     link: "#/home",
    //     classis: "active",
    //     subnav: []
    // }
    ];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        test: function(callback, err) {
            $http.get(adminurl + "loginuser").success(callback).error(err)
        },
        login: function(userData, callback, err) {
            $http({
                url: adminurl + 'loginuser',
                method: 'POST',
                withCredentials: true,
                data: userData
            }).success(callback).error(err);
        },
        register: function(userData, callback, err) {
            delete userData.confirmpassword;
            $http({
                url: adminurl + 'registeruser',
                method: 'POST',
                withCredentials: true,
                data: userData
            }).success(callback).error(err);
        },
        editPersonalDetails: function(userData, callback, err) {
            delete userData.confirmpassword;
            $http({
                url: adminurl + 'editPersonalDetails',
                method: 'POST',
                withCredentials: true,
                data: {
                    "id": $.jStorage.get("user").id,
                    "firstname": userData.firstname,
                    "lastname": userData.lastname,
                    "email": userData.email,
                    "gender": userData.gender,
                    "address": userData.address,
                    "city": userData.city,
                    "state": userData.state,
                    "country": userData.country,
                    "pincode": userData.pincode,
                    "contact": userData.contact,
                    "image": userData.image,
                    "isexpert": userData.isexpert,
                    "facebooksocial": userData.facebooksocial,
                    "youtubesocial": userData.youtubesocial,
                    "twittersocial": userData.twittersocial
                }
            }).success(callback).error(err);
        },
        editProfessionalDetails: function(userData, callback, err) {
            $http({
                url: adminurl + 'editProfessionDetails',
                method: 'POST',
                withCredentials: true,
                data: userData
            }).success(callback).error(err);
        },
        editHobbiesDetails: function(userData, callback, err) {
            $http({
                url: adminurl + 'editHobbyDetails',
                method: 'POST',
                withCredentials: true,
                data: userData
            }).success(callback).error(err);
        },
        getAllUserDetails: function(callback, err) {
            $http.get(adminurl + "getUserDetails?id=" + $.jStorage.get("user").id).success(callback).error(err)
        },
        getUserDetails: function(id, callback, err) {
            $http.get(adminurl + "getUserDetails?id=" + id).success(callback).error(err)
        },
        searchExpert: function(search, pageno, callback, err) {
            $http.get(adminurl + "searchExpert?expertname=" + search + "&pageno=" + pageno).success(callback).error(err)
        },
        editHobbyVerification: function(val, callback, err) {
            $http.get(adminurl + "editHobbyVerification?id=" + $.jStorage.get("user").id + "&hobbyverification=" + val).success(callback).error(err)
        },
        editProfessionVerification: function(val, callback, err) {
            $http.get(adminurl + "editProfessionVerification?id=" + $.jStorage.get("user").id + "&professionverification=" + val).success(callback).error(err)
        },
        askQuestion: function(question, callback, err) {
            $http({
                url: adminurl + 'askQuestion',
                method: 'POST',
                withCredentials: true,
                data: question
            }).success(callback).error(err);
        },
        questionsForMe: function(callback, err) {
            $http.get(adminurl + "getUserQuestions?id=" + $.jStorage.get("user").id).success(callback).error(err)
        },
        setUser: function(data) {
            $.jStorage.set("user", data);
        },
        getUser: function() {
            return $.jStorage.get("user");
        },
    }
});
