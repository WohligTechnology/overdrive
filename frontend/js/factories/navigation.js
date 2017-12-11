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
            anchor: "home",
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
            anchor: "home",
            link: "award",
            subnav: []
        },
        {
            name: "SOCIAL MEDIA",
            classis: "active",
           anchor: "home",
            link: "socialmedia",
            subnav: []
        },
         {
            name: "VIDEOS",
            classis: "active",
              anchor: "home",
            link: "games",
            subnav: []
        },
        {
            name: "JURORS",
            classis: "active",
             anchor: "home",
            link: "jurors",
            subnav: []
        },
        {
            name: "WINNERS",
            classis: "active",
             anchor: "home",
            link: "winnner",
            subnav: []
        }, {
            name: "GALLERY",
            classis: "active",
            anchor: "home",
            link: "gallery",
            subnav: []
        }, {
            name: "PARTNERS",
            classis: "active",
             anchor: "home",
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