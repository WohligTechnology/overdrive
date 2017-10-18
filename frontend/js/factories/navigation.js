myApp.factory('NavigationService', function () {
    var navigation = [{
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
            name: "GAMES",
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
        {
            name: "VOTE NOW",
            classis: "active",
            anchor: "grid",
            highlight: true,
            subnav: []
        },
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});