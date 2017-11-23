var imgurl = adminurl + "upload/";
var imgpath = imgurl + "readFile";

myApp.factory('NavigationService', function ($http) {
    var navigation = [
         {
            name: "HOME",
            classis: "active",
            anchor: "home",
            // link: "home",
            subnav: []
        },
        {
            // name: "THE AWARDS",
            name: "OVERVIEW",
            classis: "active",
            // anchor: "home",
            link: "overview",
            subnav: []
            // subnav: [{
            //     name: "Subnav1",
            //     classis: "active",
            //     anchor: "home"
            // }]
        }, {
            name: "AWARDS CATEGORIES",
            classis: "active",
            // anchor: "form",.
            link: "award",
            subnav: []
        },
        {
            name: "SOCIAL MEDIA",
            classis: "active",
            // anchor: "form",
            link: "socialmedia",
            subnav: []
        }, {
            name: "LEADERSHIP BOARD",
            classis: "active",
            // anchor: "games",
            link: "games",
            subnav: []
        },
        {
            name: "JURORS",
            classis: "active",
            // anchor: "grid",
            link: "jurors",
            subnav: []
        },
        {
            name: "WINNERS",
            classis: "active",
            // anchor: "grid",
            link: "winnner",
            subnav: []
        }, {
            name: "GALLERY",
            classis: "active",
            // anchor: "grid",
            link: "gallery",
            subnav: []
        }, {
            name: "PARTNERS",
            classis: "active",
            // anchor: "grid",
            link: "partner",
            subnav: []
        },
    ];

    return {
        getNavigation: function () {
            return navigation;
        },


      

        callApi: function (url, callback) {
            $http.post(adminurl + url).then(function (data) {
                data = data.data;
                callback(data);
            });
        },

        callApiWithData: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },




    };
});