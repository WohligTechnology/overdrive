myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $http, $stateParams, $location, $uibModal, $state) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.class = ""; 

        // $scope.mySlides = [{
        //     url: 'img/slider/1.png',
        //     url1: 'img/slider/1-m.png',
        //     name: "CARS"
        // }, {
        //     url: 'img/slider/2.png',
        //     url1: 'img/slider/2-m.png',
        //     name: "SCOOTERS"
        // }, {
        //     url: 'img/slider/3.png',
        //     url1: 'img/slider/3-m.png',
        //     name: "MOTOBIKES"
        // }];

        $scope.ongame = function () {
            console.log("inside game enter")
            $timeout(function () {
                $(".barz>li").css("-webkit-animation", "none");
                $(".barz>li").css("-moz-animation", "none");
                $(".barz>li").css("-ms-animation", "none");
                $(".barz>li").css("animation", "none");
            }, 2000)
        }

        //     $scope.ongamenot = function () {
        // console.log("inside ongamenot");

        //             $(".barz>li").css("-webkit-animation", " bounce 1s infinite cubic-bezier(0, 0, 0, 1)");
        //             $(".barz>li").css("-moz-animation", "");
        //             $(".barz>li").css("-ms-animation", "");
        //             $(".barz>li").css("animation", " bounce 1s infinite cubic-bezier(0, 0, 0, 1)");

        //     }
        $scope.swiperInitialize = function (e) {
            $scope.galleryImg = e.img;


            $timeout(function () {
                swiper1 = new Swiper('.swiper-container1', {
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    effect: 'coverflow',
                    loop: true,
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: 'auto',
                    paginationClickable: true,
                    allowTouchMove: false,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 1200,
                        modifier: 1,
                        slideShadows: true,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    },
                });

            }, 100);

        }


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

        // $scope.gallerytabs = [{
        //     title: "2016",
        //     gallery: ['img/gallery/2016/gal1.jpg', 'img/gallery/2016/gal2.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal6.jpg']
        // }, {
        //     title: "2015",
        //     gallery: ['img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal2.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal6.jpg']
        // }, {
        //     title: "2014",
        //     gallery: ['img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal1.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal6.jpg']
        // }, {
        //     title: "2013",
        //     gallery: ['img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal6.jpg']
        // }, {
        //     title: "2012",
        //     gallery: ['img/gallery/2016/gal2.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal3.jpg', 'img/gallery/2016/gal4.jpg', 'img/gallery/2016/gal5.jpg', 'img/gallery/2016/gal6.jpg']
        // }]

        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            console.log("This is a button Click");
        };

        NavigationService.callApi("Overview/search", function (data) {
            console.log("overview data", data);
            $scope.overviewData = data.data.results;
        });

        NavigationService.callApi("Jurors/search", function (data) {
            console.log("juror data", data);
            $scope.slider_profile = data.data.results;
            $scope.selectedDescription = $scope.slider_profile[0].description;
        });

        NavigationService.callApi("Winners/search", function (data) {
            console.log("winner data", data);
            $scope.myWinner = data.data.results;
        });

        NavigationService.callApi("Awardcategory/search", function (data) {
            console.log("awardcategory data", data);
            $scope.mySlides = data.data.results;
        });

        NavigationService.callApi("Partners/search", function (data) {
            console.log("Partners data", data);
            $scope.partners = data.data.results;
        });

        $scope.changeDescription = function (data) {
            console.log("dd", data);
            $scope.selectedDescription = data.description;
        }

        NavigationService.callApi("Gallery/search", function (data) {
            console.log("Gallery data", data);
            $scope.gallerytabs = data.data.results;
        });

        NavigationService.callApi("Company/search", function (data) {
            console.log("Company data", data);
        });

        NavigationService.callApi("Leadershipboard/search", function (data) {
            console.log("Leadership board data", data);
            $scope.Leadershipboard = data.data.results;
            console.log("Leadershipboard", $scope.Leadershipboard);

            _.forEach($scope.Leadershipboard, function (temp) {
                // console.log("temp", temp);

                _.forEach(temp.ratings, function (temp1) {
                    // console.log("temp1", temp1);
                    $scope.percent = 100 - temp1.percentage;
                    // console.log("percent", $scope.percent);
                    $scope.motorbike_percentage = [];
                    $scope.scooter_percentage = [];
                    $scope.car_percentage = [];
                });
            });
        });

        NavigationService.callApi("Votelog/search", function (data) {
            console.log("Votelog data", data);
        });


//for category img change//

$scope.smallImgClick=function (data) {
    console.log("catData",data);
console.log("big",data.img);
$scope.catImg=data.img;

}

//for category img change end//


    //    $scope.clickVehicle= function(vehicleId){
    //        console.log("vehicleId",vehicleId);
    //        $scope.vehicleId=vehicleId;
    //     $scope.signupOpen = function () {
    //         $uibModal.open({
    //             animation: true,
    //             templateUrl: 'views/modal/signup.html',
    //             scope: $scope,
    //             size: 'md',

    //         });
    //     };
    //    }



        $scope.signupOpen = function (vehicleId) {
            console.log("vehicleId",vehicleId);
            $scope.vehicleId=vehicleId;
            $scope.id=$scope.vehicleId;
            console.log("$stateParams",$scope.id);
            $uibModal.open({
                animation: true,
                templateUrl: 'views/modal/signup.html',
                scope: $scope,
                size: 'md',

            });
        };
       
        



$scope.submitUser = function (data) {
            console.log("submit voter", data);
            NavigationService.callApiWithData("Voter/saveVoter", data, function (data) {
                if (data.value == true) {
                    console.log("value");
                if (data.data._id) {
                    console.log("$scope.userId", data.data._id);
                    $scope.userId = data.data._id;
                    $state.go('nomination', {
                        'id':$scope.id
                    });
                } else {
                    $scope.errorVoterLogin = "Something Went Wrong!!!";
                }
                }
            });
        }



        //for vote//
        $scope.companyView = true;
        $scope.company = [];
        console.log($stateParams);
        console.log($state.current.name);

        $scope.awardcategory = function () {
            NavigationService.callApiWithData('Awardcategory/search', {}, function (data) {
                var awardcategory = [];
                $scope.awardcategory = data.data.results;
            });
        };

        $scope.awardcategory();

        $scope.getCompany = function (awardcategoryId) {
            $scope.company = [];
            NavigationService.callApiWithData('Awardcategory/getOne', {
                _id: awardcategoryId
            }, function (data) {
                if ($.jStorage.get("accessToken")) {
                    $scope.companyView = false;
                    $scope.awardcategoryId = awardcategoryId;
                    $scope.company = data.data.company;
                    $scope.awardcategoryName = data.data.name;
                } else {
                    $scope.companyView = true;
                    $scope.currentHost = window.location.origin;
                    $uibModal.open({
                        animation: true,
                        templateUrl: 'views/content/login.html',
                        scope: $scope,
                        size: 'lg',
                    });
                }
            });
        };

        $scope.companyvote = [];
        $scope.getCompanyData = function (awardcategoryId) {
            // console.log(awardcategoryId);
            NavigationService.callApiWithData('Awardcategory/getOne', {
                _id: awardcategoryId
            }, function (data) {
                $scope.totalVoteCount = 0;
                $scope.companyvote = data.data.company;
                _.each($scope.companyvote, function (value) {
                        $scope.totalVoteCount += value.voteCount;
                    })
                    // console.log("$scope.totalVoteCount", $scope.totalVoteCount);
                $scope.awardcategoryName = data.data.name;
            });
        };

        $scope.awardcategoryValue = {
            boardId: null,
            value: null
        };
        $scope.awardcategoryConfig = {
            create: true,
            valueField: 'id',
            labelField: 'name',
            placeholder: 'Select a Awardcategory',
            searchField: ["name"],
            maxItems: 1,
            onInitialize: function () {
                $scope.awardcategory();
            },
        };
        $scope.getCompanyDescription = function (awardcategoryId) {
            // console.log(awardcategoryId);
            $scope.company = [];
            NavigationService.callApiWithData('Awardcategory/getOne', {
                _id: awardcategoryId
            }, function (data) {
                $scope.catDesc = data.data.description;
            });
        };


 $scope.changeCompany = function (company) {
        // console.log(company.companyObj);
        $scope.companyId = company.companyObj._id;
        $scope.companyname = company.companyObj.name;
        // console.log($scope.companyname);
      
    };

        $scope.submitVote = function () {
            // console.log($scope.companyId)
            if (!$scope.companyId) {
                $scope.errormessage = {
                    name: "Please select a option"
                };
                // console.log($scope.errormessage);
            } else {
                var userId = '';
                var profile = $.jStorage.get("profile");
                if (profile) {
                    userId = profile._id
                }
                if (userId) {
                    NavigationService.callApiWithData('VoteLog/AddVoteLog', {
                        awardcategory: $scope.awardcategoryId,
                        company: $scope.companyId,
                        userId: userId
                    }, function (data) {
                        // console.log(data);
                        if ($.jStorage.get("profile").loginProvider == 'facebook') {
                            $("<a>").attr("href", $scope.facebookurl).attr("target", "_blank")[0].click();
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/success.html',
                                scope: $scope,
                                size: 'lg',
                            });
                        } else if ($.jStorage.get("profile").loginProvider == 'twitter') {
                            $("<a>").attr("href", $scope.twitterurl).attr("target", "_blank")[0].click();
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/success.html',
                                scope: $scope,
                                size: 'lg',
                            });
                        } else if ($.jStorage.get("profile").loginProvider == 'linkedin') {
                            console.log($scope.linkedInurl);
                            $("<a>").attr("href", $scope.linkedInurl).attr("target", "_blank")[0].click();
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/success.html',
                                scope: $scope,
                                size: 'lg',
                            });
                        } else {
                            $uibModal.open({
                                animation: true,
                                templateUrl: 'views/modal/success.html',
                                scope: $scope,
                                size: 'lg',
                            });
                        }
                    });
                } else {
                    $scope.errormessage = {
                        name: "Please log in first"
                    };
                }
            }
        };

        var abc = _.times(100, function (n) {
            return n;
        });

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            // console.log("This is a button Click");
        };

        $scope.voteAgain = function () {
            $scope.company = [];
            $scope.compDesc = "";
        }



        //for vote end//


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