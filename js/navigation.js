var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
	var navigation = [{
			name: "BOOKINGS",
			classis: "active",
			link: "#/booking",
			subnav: [
//            {
//            name: "Subnav1",
//            classis: "active",
//            link: "#/home"
//        }, {
//            name: "Subnav2",
//            classis: "active",
//            link: "#/home"
//        }, {
//            name: "Subnav3",
//            classis: "active",
//            link: "#/home"
//        }
        ]
    }, {
			name: "QTS Asked",
			active: "",
			link: "#/qtsasked",
			classis: "active",
			subnav: []
    }, {
			name: "Nishant Rathod Rs 4000/-",
			active: "",
			link: "#/account",
			classis: "active",
			subnav: []
    }, {
			name: "Edit Profile",
			active: "",
			link: "#/setting",
			classis: "active",
			subnav: []
    }, {
			name: "logout",
			active: "",
			link: "#/home",
			classis: "active",
			subnav: []
    }
                     ];

	return {
		getnav: function () {
			return navigation;
		},
		makeactive: function (menuname) {
			for (var i = 0; i < navigation.length; i++) {
				if (navigation[i].name == menuname) {
					navigation[i].classis = "active";
				} else {
					navigation[i].classis = "";
				}
			}
			return menuname;
		},
	}
});