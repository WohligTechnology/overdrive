myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $http, $stateParams, $location, $uibModal, $state, $timeout) {
        $scope.template = TemplateService.getHTML("content/home.html");
        TemplateService.title = "Home"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        TemplateService.class = "";

   
        // $scope.removeUser = function () {
        //     console.log("in remove user");

        //     $timeout(function () {
        //         $.jStorage.flush('voter');
        //     }, 3600000);


        // };
        // $scope.removeUser();


$scope.checkEmail=function(){
    if($scope.formData.email){
        $scope.emailExist=false;
    }
}




        $scope.videoEpisode = [{
            imageUrl: "r-sFYno9dmQ",
            videoUrl: "r-sFYno9dmQ",
            name: "TEASER"
        }, {
            imageUrl: "eKv4BMYj9Wg",
            videoUrl: "eKv4BMYj9Wg",
            name: "CURTAIN RAISER"
        }, {
            imageUrl: "IFa2XGXJSeo",
            videoUrl: "IFa2XGXJSeo",
            name: "JURY PROMO ROUND"
        }, {
            imageUrl: "bxyPEIS6G6k",
            videoUrl: "bxyPEIS6G6k",
            name: "THE RACE HAS BEGUN"
        }]



        $scope.ongame = function () {
            console.log("inside game enter")
            $timeout(function () {
                $(".barz>li").css("-webkit-animation", "none");
                $(".barz>li").css("-moz-animation", "none");
                $(".barz>li").css("-ms-animation", "none");
                $(".barz>li").css("animation", "none");
            }, 2000)
        }

        $scope.ongamenot = function () {
            console.log("inside ongamenot");

            $(".barz>li").css("-webkit-animation", " bounce 1s infinite cubic-bezier(0, 0, 0, 1)");
            $(".barz>li").css("-moz-animation", "");
            $(".barz>li").css("-ms-animation", "");
            $(".barz>li").css("animation", " bounce 1s infinite cubic-bezier(0, 0, 0, 1)");

        }
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

            }, 1000);

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

        NavigationService.callApi("Leadershipboard/search", function (data) {
            console.log("Leadershipboard data", data);
            $scope.Leadershipboard = data.data.results;
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
            $scope.gallerytabs = _.orderBy(data.data.results, ['year'], ['desc']);
        });

        NavigationService.callApi("Company/search", function (data) {
            console.log("Company data", data);
        });

        NavigationService.callApi("Leadershipboard/search", function (data) {
            console.log("Leadership board data", data);
            $scope.Leadershipboard = data.data.results;
            // console.log("Leadershipboard", $scope.Leadershipboard);

            _.forEach($scope.Leadershipboard, function (temp) {

                _.forEach(temp.ratings, function (temp1) {
                    $scope.percent = 100 - temp1.percentage;
                    $scope.motorbike_percentage = [];
                    $scope.scooter_percentage = [];
                    $scope.car_percentage = [];
                });
            });
        });

        NavigationService.callApi("Votelog/search", function (data) {
            console.log("Votelog data", data);
        });


        NavigationService.callApi("Voter/search", function (data) {
            console.log("Voter data", data);
        });


        //for category img change//

        $scope.smallImgClick = function (data) {
            console.log("catData", data);
            console.log("big", data.img);
            $scope.catImg = data.img;

        }

        //for category img change end//

        //         $scope.getCompany = function (awardcategoryId) {
        //             console.log("catClicked");
        //             console.log("awardcategoryId", awardcategoryId);
        // $scope.id = awardcategoryId;
        // console.log("awardcategoryId", awardcategoryId);

        //  if (!_.isEmpty($.jStorage.get('catStore'))){
        // console.log("$scope.id", $scope.id);

        // if($scope.id==($.jStorage.get('catStore').bike))
        // {
        //     console.log("have already voted for bike ");
        //     $uibModal.open({
        //                         animation: true,
        //                         templateUrl: mainUrl + 'views/modal/user_already_exist.html',
        //                         scope: $scope,
        //                         size: 'md',

        //                     });
        // }

        // else if($scope.id==($.jStorage.get('catStore').car))
        // {
        //     console.log("have already voted for car ");
        //        $uibModal.open({
        //                         animation: true,
        //                         templateUrl: mainUrl + 'views/modal/user_already_exist.html',
        //                         scope: $scope,
        //                         size: 'md',

        //                     });
        // }

        // else if($scope.id==($.jStorage.get('catStore').scooter))
        // {
        //     console.log("have already voted for scooter ");
        //        $uibModal.open({
        //                         animation: true,
        //                         templateUrl: mainUrl + 'views/modal/user_already_exist.html',
        //                         scope: $scope,
        //                         size: 'md',

        //                     });
        // }


        // else{
        //             console.log("$stateParams", $scope.id);
        //             $scope.company = [];
        //             NavigationService.callApiWithData('Awardcategory/getOne', {
        //                 _id: awardcategoryId
        //             }, function (data) {
        //                 $scope.companyView = true;
        //                 $scope.currentHost = window.location.origin;



        //                 if (!_.isEmpty($.jStorage.get('voter'))) {
        //                     console.log("voter already exist");
        //                     console.log("userId", $.jStorage.get('voter')._id);
        //                     $scope.userId = $.jStorage.get('voter')._id;
        //                     // $state.go('nomination', {
        //                     //                             'userId': $scope.userId,
        //                     //                            'id': $scope.id
        //                     //                         });
        //                     $scope.vData = {};
        //                     $scope.userId = $.jStorage.get('voter')._id;
        //                     if ($.jStorage.get('voter').email) {
        //                         console.log("voter in jstorage");
        //                         $scope.vData.email = $.jStorage.get('voter').email;
        //                         $scope.vData.name = $.jStorage.get('voter').name;
        //                         $scope.vData.surname = $.jStorage.get('voter').surname;
        //                         console.log($scope.vData, "$scope.vData");
        //                     }


        //                     NavigationService.callApiWithData("Voter/save", $scope.vData, function (data) {
        //                         console.log(data, "data");
        //                         if (data.value == true) {
        //                             console.log(data, "data");
        //                             console.log(data.data, "data11111111");
        //                             if (data.data._id) {
        //                                 console.log("$scope.userId", data.data._id);
        //                                 $scope.userId = data.data._id;
        //                                 $state.go('nomination', {
        //                                     'userId': $scope.userId,
        //                                     'id': $scope.id
        //                                 });
        //                             } else {
        //                                 $scope.errorVoterLogin = "Something Went Wrong!!!";
        //                             }
        //                         }
        //                     });

        //                 } else {
        //                     console.log("voter does not exist");
        //                     $uibModal.open({
        //                         animation: true,
        //                         templateUrl: mainUrl + 'views/modal/signup.html',
        //                         scope: $scope,
        //                         size: 'md',

        //                     });
        //                 }
        //             });


        // }
        //  }

        //  else{
        //             console.log("$stateParams", $scope.id);
        //             $scope.company = [];
        //             NavigationService.callApiWithData('Awardcategory/getOne', {
        //                 _id: awardcategoryId
        //             }, function (data) {
        //                 $scope.companyView = true;
        //                 $scope.currentHost = window.location.origin;



        //                 if (!_.isEmpty($.jStorage.get('voter'))) {
        //                     console.log("voter already exist");
        //                     console.log("userId", $.jStorage.get('voter')._id);
        //                     $scope.userId = $.jStorage.get('voter')._id;
        //                     // $state.go('nomination', {
        //                     //                             'userId': $scope.userId,
        //                     //                            'id': $scope.id
        //                     //                         });
        //                     $scope.vData = {};
        //                     $scope.userId = $.jStorage.get('voter')._id;
        //                     if ($.jStorage.get('voter').email) {
        //                         console.log("voter in jstorage");
        //                         $scope.vData.email = $.jStorage.get('voter').email;
        //                         $scope.vData.name = $.jStorage.get('voter').name;
        //                         $scope.vData.surname = $.jStorage.get('voter').surname;
        //                         console.log($scope.vData, "$scope.vData");
        //                     }


        //                     NavigationService.callApiWithData("Voter/save", $scope.vData, function (data) {
        //                         console.log(data, "data");
        //                         if (data.value == true) {
        //                             console.log(data, "data");
        //                             console.log(data.data, "data11111111");
        //                             if (data.data._id) {
        //                                 console.log("$scope.userId", data.data._id);
        //                                 $scope.userId = data.data._id;
        //                                 $state.go('nomination', {
        //                                     'userId': $scope.userId,
        //                                     'id': $scope.id
        //                                 });
        //                             } else {
        //                                 $scope.errorVoterLogin = "Something Went Wrong!!!";
        //                             }
        //                         }
        //                     });

        //                 } else {
        //                     console.log("voter does not exist");
        //                     $uibModal.open({
        //                         animation: true,
        //                         templateUrl: mainUrl + 'views/modal/signup.html',
        //                         scope: $scope,
        //                         size: 'md',

        //                     });
        //                 }
        //             });


        // }
        //         };




$scope.modalInstance={};
$scope.formData={};


        $scope.getCompany = function (awardcategoryId) {
            $scope.formData = {};
            $scope.signupform={};
            console.log("catClicked");
            console.log("awardcategoryId", awardcategoryId);
            $scope.id = awardcategoryId;
            console.log("awardcategoryId", awardcategoryId);


    $uibModal.open({
                                animation: true,
                                templateUrl: mainUrl + 'views/modal/votingClosed.html',
                                scope: $scope,
                                size: 'md',

                            });


            // if (!_.isEmpty($.jStorage.get('catStore'))) {
            //     console.log("$scope.id", $scope.id);

            //     if ($scope.id == ($.jStorage.get('catStore').bike)) {
            //         console.log("have already voted for bike ");
            //         $uibModal.open({
            //                             animation: true,
            //                             templateUrl: mainUrl + 'views/modal/user_already_exist.html',
            //                             scope: $scope,
            //                             size: 'md',

            //                         });



            // //    $scope.modalInstance=$uibModal.open({
            // //             animation: true,
            // //             templateUrl: mainUrl + 'views/modal/signup.html',
            // //             scope: $scope,
            // //             size: 'md',

            // //         });


            //     } else if ($scope.id == ($.jStorage.get('catStore').car)) {
            //         console.log("have already voted for car ");
            //            $uibModal.open({
            //                             animation: true,
            //                             templateUrl: mainUrl + 'views/modal/user_already_exist.html',
            //                             scope: $scope,
            //                             size: 'md',

            //                         });
            //     //    $scope.modalInstance= $uibModal.open({
            //     //         animation: true,
            //     //         templateUrl: mainUrl + 'views/modal/signup.html',
            //     //         scope: $scope,
            //     //         size: 'md',

            //     //     });
            //     } else if ($scope.id == ($.jStorage.get('catStore').scooter)) {
            //         console.log("have already voted for scooter ");
            //            $uibModal.open({
            //                             animation: true,
            //                             templateUrl: mainUrl + 'views/modal/user_already_exist.html',
            //                             scope: $scope,
            //                             size: 'md',

            //                         });
            // //   $scope.modalInstance=      $uibModal.open({
            // //             animation: true,
            // //             templateUrl: mainUrl + 'views/modal/signup.html',
            // //             scope: $scope,
            // //             size: 'md',

            // //         });
            //     } else {
            //         console.log("$stateParams", $scope.id);
            //         $scope.company = [];
            //         NavigationService.callApiWithData('Awardcategory/getOne', {
            //             _id: awardcategoryId
            //         }, function (data) {
            //             $scope.companyView = true;
            //             $scope.currentHost = window.location.origin;



            //             if (!_.isEmpty($.jStorage.get('voter'))) {
            //                 console.log("voter already exist");
            //                 console.log("userId", $.jStorage.get('voter')._id);
            //                 $scope.userId = $.jStorage.get('voter')._id;
            //                 // $state.go('nomination', {
            //                 //                             'userId': $scope.userId,
            //                 //                            'id': $scope.id
            //                 //                         });
            //                 $scope.vData = {};
            //                 $scope.userId = $.jStorage.get('voter')._id;
            //                 if ($.jStorage.get('voter').email) {
            //                     console.log("voter in jstorage");
            //                     $scope.vData.email = $.jStorage.get('voter').email;
            //                     $scope.vData.name = $.jStorage.get('voter').name;
            //                     $scope.vData.surname = $.jStorage.get('voter').surname;
            //                     console.log($scope.vData, "$scope.vData");
            //                 }


            //                 NavigationService.callApiWithData("Voter/save", $scope.vData, function (data) {
            //                     console.log(data, "data");
            //                     if (data.value == true) {
            //                         console.log(data, "data");
            //                         console.log(data.data, "data11111111");
            //                         if (data.data._id) {
            //                             console.log("$scope.userId", data.data._id);
            //                             $scope.userId = data.data._id;
            //                             $state.go('nomination', {
            //                                 'userId': $scope.userId,
            //                                 'id': $scope.id
            //                             });
            //                         } else {
            //                             $scope.errorVoterLogin = "Something Went Wrong!!!";
            //                         }
            //                     }
            //                 });

            //             } else {
            //                 console.log("voter does not exist");
            //             $scope.modalInstance=    $uibModal.open({
            //                     animation: true,
            //                     templateUrl: mainUrl + 'views/modal/signup.html',
            //                     scope: $scope,
            //                     size: 'md',

            //                 });
            //             }
            //         });


            //     }
            // } else {
            //     console.log("$stateParams", $scope.id);
            //     $scope.company = [];
            //     NavigationService.callApiWithData('Awardcategory/getOne', {
            //         _id: awardcategoryId
            //     }, function (data) {
            //         $scope.companyView = true;
            //         $scope.currentHost = window.location.origin;



            //         if (!_.isEmpty($.jStorage.get('voter'))) {
            //             console.log("voter already exist");
            //             console.log("userId", $.jStorage.get('voter')._id);
            //             $scope.userId = $.jStorage.get('voter')._id;
            //             // $state.go('nomination', {
            //             //                             'userId': $scope.userId,
            //             //                            'id': $scope.id
            //             //                         });
            //             $scope.vData = {};
            //             $scope.userId = $.jStorage.get('voter')._id;
            //             if ($.jStorage.get('voter').email) {
            //                 console.log("voter in jstorage");
            //                 $scope.vData.email = $.jStorage.get('voter').email;
            //                 $scope.vData.name = $.jStorage.get('voter').name;
            //                 $scope.vData.surname = $.jStorage.get('voter').surname;
            //                 console.log($scope.vData, "$scope.vData");
            //             }


            //             NavigationService.callApiWithData("Voter/save", $scope.vData, function (data) {
            //                 console.log(data, "data");
            //                 if (data.value == true) {
            //                     console.log(data, "data");
            //                     console.log(data.data, "data11111111");
            //                     if (data.data._id) {
            //                         console.log("$scope.userId", data.data._id);
            //                         $scope.userId = data.data._id;
            //                         $state.go('nomination', {
            //                             'userId': $scope.userId,
            //                             'id': $scope.id
            //                         });
            //                     } else {
            //                         $scope.errorVoterLogin = "Something Went Wrong!!!";
            //                     }
            //                 }
            //             });

            //         } else {
            //             console.log("voter does not exist");
            //           $scope.modalInstance=  $uibModal.open({
            //                 animation: true,
            //                 templateUrl: mainUrl + 'views/modal/signup.html',
            //                 scope: $scope,
            //                 size: 'md',

            //             });
            //         }
            //     });


            // }
        };







        $scope.goBack = function (data) {
            console.log("go back and login");
            $.jStorage.flush('voter');
$scope.formData = {};
console.log("$scope.modalInstance",$scope.modalInstance);
// $scope.modalInstance.close();
//  $scope.modalInstance=$uibModal.open({
//                 animation: true,
//                 templateUrl: mainUrl + 'views/modal/signup.html',
//                 scope: $scope,
//                 size: 'md',

//             });
                                              $uibModal.open({
                animation: true,
                templateUrl: mainUrl + 'views/modal/signup.html',
                scope: $scope,
                size: 'md',

            });
// $scope.formData.$setPristine();
        }



 $scope.go = function (data) {
            console.log("go back");
            $scope.formData = {};
$scope.modalInstance.close();
$scope.modalInstance=$uibModal.open({
                animation: true,
                templateUrl: mainUrl + 'views/modal/signup.html',
                scope: $scope,
                size: 'md',

            });
 
        }





//         $scope.submitUser = function (data) {
//             console.log("data of voter", data);


//             // $scope.clickedCategory=$scope.id;
// console.log("$scope.id", $scope.id)
//             $scope.votrEmail = data.email;
//             $scope.votrName = data.name;
//             $scope.votrSurname = data.surname;
//             $scope.votrCategoryId = $scope.id;
//             console.log("$scope.votrEmail", $scope.votrEmail)
//             console.log("$scope.votrcategory", $scope.votrcategory)
//             console.log("$scope.id", $scope.id)



//             NavigationService.callApiWithData('Awardcategory/getOne', {
//                 _id: $scope.id
//             }, function (data) {
//                 console.log("data in get one id", data)
//                 console.log("name data in findone", data.data.name);
//                 $scope.votrCategoryName = data.data.name;


//                 $scope.formData1 = {};
//                 $scope.formData1.email = $scope.votrEmail;
//                 $scope.formData1.name = $scope.votrName;
//                 $scope.formData1.surname = $scope.votrSurname;
//                 $scope.formData1.category = $scope.votrCategoryName;
//                 console.log("formData1", $scope.formData1);

//                 NavigationService.callApiWithData("VoterDetails/findVoter", $scope.formData1, function (data) {
//                     console.log(data);
//                     console.log("data.value in findvoter",data.value);
//                     if (data.data != "noDataound") {
//                         console.log("userhas voted with this category");
//                         $scope.emailExist=true;
//                         // $uibModal.open({
//                         //     animation: true,
//                         //     templateUrl: mainUrl + 'views/modal/user_already_exist.html',
//                         //     scope: $scope,
//                         //     size: 'md',

//                         // });
        



//                     } else {
//                          $scope.emailExist=false;
//                         console.log("with new email id");

//                         NavigationService.callApiWithData("Voter/save", $scope.formData1, function (data) {
//                             console.log(data, "data");
//                             if (data.value == true) {
//                                 console.log(data, "data");
//                                 console.log(data.data, "data11111111");
//                                 $.jStorage.set("voter", data.data);
//                                 if (data.data._id) {
//                                     console.log("$scope.userId", data.data._id);
//                                     $scope.userId = data.data._id;
//                                     $state.go('nomination', {
//                                         'userId': $scope.userId,
//                                         'id': $scope.id
//                                     });
//                                 } else {
//                                     $scope.errorVoterLogin = "Something Went Wrong!!!";
//                                 }
//                             }
//                         });
//                     }
//                 });

//             });

//         }



        //for vote//
        $scope.companyView = true;
        $scope.company = [];
        $scope.awardcategory = function () {
            NavigationService.callApiWithData('Awardcategory/search', {}, function (data) {
                var awardcategory = [];
                $scope.totalVote = 0;
                $scope.awardcategory = data.data.results;
                _.each($scope.awardcategory, function (value) {
                    // console.log("value", value)

                    // $scope.companyvote = value.company;
                    // _.each(value.company, function (value1) {
                    //     $scope.value1 = value1;
                    //     console.log("value1", value1)
                    //     console.log("value1.voteCount", value1.voteCount)
                    //     $scope.totalVote += value1.voteCount;
                    //     // console.log("totalVote",$scope.totalVote)
                    // })
                    //                     _.each(value.company,function(key){
                    //                         console.log("key",key);

                    //                       $scope.totalVote +=key.voteCount;
                    //   console.log("$scope.totalVote", $scope.totalVote);
                    //                     });
                    value.totalCount = _.sumBy(value.company, 'voteCount');
                    // console.log(value.totalCount, "value.totalCount");
                    _.each(value.company, function (n) {
                        n.percent = n.voteCount / value.totalCount * 100;
                    })


                });
                console.log("$scope.awardcategory", $scope.awardcategory);
            });
        };

        $scope.awardcategory();

        // $scope.getCompany = function (awardcategoryId) {
        //     $scope.company = [];
        //     NavigationService.callApiWithData('Awardcategory/getOne', {
        //         _id: awardcategoryId
        //     }, function (data) {
        //         if ($.jStorage.get("accessToken")) {
        //             $scope.companyView = false;
        //             $scope.awardcategoryId = awardcategoryId;
        //             $scope.company = data.data.company;
        //             $scope.awardcategoryName = data.data.name;
        //         } else {
        //             $scope.companyView = true;
        //             $scope.currentHost = window.location.origin;
        //             $uibModal.open({
        //                 animation: true,
        //                 templateUrl: mainUrl + 'views/content/login.html',
        //                 scope: $scope,
        //                 size: 'lg',
        //             });
        //         }
        //     });
        // };

        // getCompanyData(awardcategory._id);
        $scope.companyvote = [];
        $scope.getCompanyData = function (awardcategoryId) {
            console.log("inside award vote");
            NavigationService.callApiWithData('Awardcategory/getOne', {
                _id: awardcategoryId
            }, function (data) {
                $scope.totalVoteCount = 0;
                $scope.companyvote = data.data.company;
                console.log("$scope.companyvote", $scope.companyvote);
                _.each($scope.companyvote, function (value) {
                    $scope.totalVoteCount += value.voteCount;
                })
                // console.log("$scope.totalVoteCount", $scope.totalVoteCount);
                $scope.awardcategoryName = data.data.name;
            });
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
                                templateUrl: mainUrl + 'views/modal/success.html',
                                scope: $scope,
                                size: 'lg',
                            });
                        } else if ($.jStorage.get("profile").loginProvider == 'twitter') {
                            $("<a>").attr("href", $scope.twitterurl).attr("target", "_blank")[0].click();
                            $uibModal.open({
                                animation: true,
                                templateUrl: mainUrl + 'views/modal/success.html',
                                scope: $scope,
                                size: 'lg',
                            });
                        } else if ($.jStorage.get("profile").loginProvider == 'linkedin') {
                            console.log($scope.linkedInurl);
                            $("<a>").attr("href", $scope.linkedInurl).attr("target", "_blank")[0].click();
                            $uibModal.open({
                                animation: true,
                                templateUrl: mainUrl + 'views/modal/success.html',
                                scope: $scope,
                                size: 'lg',
                            });
                        } else {
                            $uibModal.open({
                                animation: true,
                                templateUrl: mainUrl + 'views/modal/success.html',
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

        var i = 0;
        $scope.buttonClick = function () {
            i++;
            // console.log("This is a button Click");
        };
        //for vote end//



        //to save votes in leadershipboard//

        NavigationService.callApi("Awardcategory/search", function (data) {
            $scope.storeAwardData = data.data.results;
            console.log("$scope.storeAwardData", $scope.storeAwardData);


        });


        NavigationService.callApi("Leadershipboard/search", function (data) {
            $scope.storeLeaderData = data.data.results;
            console.log("$scope.storeLeaderData", $scope.storeLeaderData);



        });



        //to save votes in leadershipboard end//












    })
    .controller('navCtrl', function ($scope, $location, $anchorScroll, $state, $timeout) {
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


        $scope.goToAnchor = function (anchor, id) {
            console.log("inside anchor")
            $state.go(anchor)
            // $location.hash(anchor);
            if (id) {
                $timeout(function () {
                    // $anchorScroll();
                    $('html,body').animate({
                        scrollTop: $('#' + id).offset().top - 50
                    }, "slow");
                }, 500);
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