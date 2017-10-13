myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [{
            url: 'img/slider/1.png',
            name: "name1"
        }, {
            url: 'img/slider/2.png',
            name: "name2"
        }, {
            url: 'img/slider/3.png',
            name: "name3"
        }];



        $scope.myWinner = [{
            url: 'img/slider/car1.jpg',
            name: "BEST CAR"
        }, {
            url: 'img/slider/car2.jpg',
            name: "BEST BIKE"
        }, {
            url: 'img/slider/car3.jpg',
            name: "BEST MUV"
        }, {
            url: 'img/slider/car4.jpg',
            name: "BEST SUV"
        }];


        $scope.slider_profile = [{
            url: 'img/slider/profile.jpg',
            name: "Bertand Dsouza"
        }, {
            url: 'img/slider/profile1.jpg',
            name: "Armaan Ibrahim"
        }, {
            url: 'img/slider/profile2.jpg',
            name: "Anand Dharmaraj"
        }, {
            url: 'img/slider/profile3.jpg',
            name: "Narayan Rupani"
        }, ];


        $scope.gallerytabs = [{
                title: "2016",
                gallery: ['img/gallery/2016/gal1.jpg', 'img/gallery/2016/gal2.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal6.jpg']
            },
            {
                title: "2015",
                gallery: ['img/gallery/2016/gal6.jpg', 'img/gallery/2016/gal4.jpg']
            },
            {
                title: "2014",
                gallery: ['img/gallery/2016/gal6.jpg', 'img/gallery/2016/gal4.jpg']
            },
            {
                title: "2013",
                gallery: ['img/gallery/2016/gal6.jpg', 'img/gallery/2016/gal4.jpg']
            },
            {
                title: "2012",
                gallery: ['img/gallery/2016/gal6.jpg', 'img/gallery/2016/gal4.jpg']
            }
        ]
        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };



    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
        // $scope.data = {
        //     name: "Chintan",
        //     "age": 20,
        //     "email": "chinyan@wohlig.com",
        //     "query": "query"
        // };
        $scope.submitForm = function (data) {
            console.log("This is it");
            return new Promise(function (callback) {
                $timeout(function () {
                    callback();
                }, 5000);
            });
        };
    })
    .controller('GridCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/grid.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });