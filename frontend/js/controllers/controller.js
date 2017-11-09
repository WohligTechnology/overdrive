myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $http) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();

        $scope.mySlides = [{
            url: 'img/slider/1.png',
            url1: 'img/slider/1-m.png',
            name: "CARS"
        }, {
            url: 'img/slider/2.png',
            url1: 'img/slider/2-m.png',
            name: "SCOOTERS"
        }, {
            url: 'img/slider/3.png',
            url1: 'img/slider/3-m.png',
            name: "MOTOBIKES"
        }];

        $timeout(function () {
            mySwiper = new Swiper('.swiper-container1', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                loop: true,
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 1000,
                    modifier: 1,
                    slideShadows: true,
                }
            });
        }, 300)

        $scope.facebookid = "Fodmag";
        $scope.facebookurl = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F" + $scope.facebookid + "%2F&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
        // window.scrollBy({
        //     top: 100, // could be negative value
        //     left: 0,
        //     behavior: 'smooth'
        // });
        $('.inside_b1').scroll(function () {
            console.log("run");
        });

        $scope.myWinner = [{
            url: 'img/slider/car1.jpg',
            name: "BEST CAR",
            winner_name: "John"
        }, {
            url: 'img/slider/car2.jpg',
            name: "BEST BIKE",
            winner_name: "Tom"
        }, {
            url: 'img/slider/car3.jpg',
            name: "BEST MUV",
            winner_name: "Ricky"
        }, {
            url: 'img/slider/car4.jpg',
            name: "BEST SUV",
            winner_name: "Vicky"
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

        $scope.partners = {

            },
            $scope.gallerytabs = [{
                    title: "2016",
                    gallery: ['img/gallery/2016/gal1.jpg', 'img/gallery/2016/gal2.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal6.jpg']
                },
                {
                    title: "2015",
                    gallery: ['img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal2.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal6.jpg']
                },
                {
                    title: "2014",
                    gallery: ['img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal1.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal6.jpg']
                },
                {
                    title: "2013",
                    gallery: ['img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal6.jpg']
                },
                {
                    title: "2012",
                    gallery: ['img/gallery/2016/gal2.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal6.jpg']
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



        NavigationService.callApi("Partners/search", function (data) {
            console.log("data",data);
            $scope.partnerImg = data.data.results;
            console.log("sss", $scope.partnerImg)
            // console.log("sss", data.result.logo)
        });


NavigationService.callApi("Overview/search", function (data) {
    console.log("datarr",data);

});



NavigationService.callApi("Jurors/search", function (data) {
    console.log("data",data);

});



NavigationService.callApi("Winners/search", function (data) {
    console.log("data",data);

});


NavigationService.callApi("Winners/search", function (data) {
    console.log("data",data);

});



    })
    .controller('navCtrl', function ($scope, $location, $anchorScroll) {
        $scope.scrollTo = function (id) {
            document.querySelector('#' + id).scrollIntoView({
                behavior: 'smooth'
            });
            console.log(document.querySelector('#' + id));

        }
        $scope.clic = function () {
            if ($('#nav-collapse').hasClass('in')) {
                $('.collapse').collapse('toggle');
            }
        };

        $scope.navblur = function () {
            if ($('#nav-collapse').hasClass('in')) {
                $('.collapse').collapse('toggle');
            }
        }
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