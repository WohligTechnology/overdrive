myApp.factory('NavigationService', function () {
    var navigation = [{
            name: "THE AWARDS",
            classis: "active",
            anchor: "home",
            subnav: []
            // subnav: [{
            //     name: "Subnav1",
            //     classis: "active",
            //     anchor: "home"
            // }]
        }, {
            name: "AWARDS CATEGORIES",
            classis: "active",
            anchor: "form",
            subnav: []
        },
        {
            name: "JURORS",
            classis: "active",
            anchor: "form",
            subnav: []
        }, {
            name: "WINNERS",
            classis: "active",
            anchor: "form",
            subnav: []
        },
        {
            name: "GALLERY",
            classis: "active",
            anchor: "grid",
            subnav: []
        }, ,
        {
            name: "GAMES",
            classis: "active",
            anchor: "grid",
            subnav: []
        }, ,
        {
            name: "VOTE NOW",
            classis: "active",
            anchor: "grid",
            highlight: true,
            subnav: []
        }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
    };
});