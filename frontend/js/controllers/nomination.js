 myApp.controller('NominationCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams, $state) {
   $scope.template = TemplateService.getHTML("content/nomination.html");
   TemplateService.title = "Nomination"; //This is the Title of the Website
   $scope.navigation = NavigationService.getNavigation();
   TemplateService.class = "nomination";
   $scope.formSubmitted = false;
   console.log("$stateParams.userId", $stateParams.userId);
   console.log("$stateParams.id", $stateParams.id);


   $scope.submitForm = function (data) {
     $scope.formSubmitted = true;
   };

   $scope.dataId = {
     _id: $stateParams.id
   };


   $scope.userId = {
     _id: $stateParams.userId
   }

   NavigationService.callApiWithData("Awardcategory/getOne", $scope.dataId, function (data) {
     console.log("catdata", data)
     $scope.singleCatData = data.data;
     console.log("singleCatData", $scope.singleCatData)
     $scope.cImg = data.data.img;
     console.log("sss", $scope.cImg)
   });

   NavigationService.callApi("Company/search", function (data) {
     console.log("Company data", data);
     $scope.Nomination = data.data.results;
   });


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

   //  $scope.getCompany = function (awardcategoryId) {
   //    $scope.company = [];
   //    NavigationService.callApiWithData('Awardcategory/getOne', {
   //      _id: awardcategoryId
   //    }, function (data) {
   //      if ($.jStorage.get("accessToken")) {
   //        $scope.companyView = false;
   //        $scope.awardcategoryId = awardcategoryId;
   //        $scope.company = data.data.company;
   //        $scope.awardcategoryName = data.data.name;
   //      } else {
   //        $scope.companyView = true;
   //        $scope.currentHost = window.location.origin;
   //        $uibModal.open({
   //          animation: true,
   //          templateUrl: mainUrl + 'views/content/login.html',
   //          scope: $scope,
   //          size: 'lg',
   //        });
   //      }
   //    });
   //  };

   //  $scope.companyvote = [];
   //  $scope.getCompanyData = function (awardcategoryId) {
   //    NavigationService.callApiWithData('Awardcategory/getOne', {
   //      _id: awardcategoryId
   //    }, function (data) {
   //      $scope.totalVoteCount = 0;
   //      $scope.companyvote = data.data.company;
   //      _.each($scope.companyvote, function (value) {
   //        $scope.totalVoteCount += value.voteCount;
   //      })
   //      $scope.awardcategoryName = data.data.name;
   //    });
   //  };

   $scope.getCompanyDescription = function (awardcategoryId) {
     // console.log(awardcategoryId);
     $scope.company = [];
     NavigationService.callApiWithData('Awardcategory/getOne', {
       _id: awardcategoryId
     }, function (data) {
       $scope.catDesc = data.data.description;
     });
   };


   $scope.class = [];
   $scope.changeCompany = function (companyId, index, companyName) {
     $scope.class = [];
     $scope.class[index] = "n_flip";
     console.log("changeCompanyId", companyId);
     console.log("changeCompanyName", companyName);
     $scope.companyId = companyId;
     $scope.companyName = companyName;

   };
   $scope.animationAdd = "";
   $scope.submitVote = function () {
     console.log("submit vote");
     // console.log($scope.companyId)
     if (!$scope.companyId) {
       $scope.errormessage = {
         name: "Please select a option"
       };
       console.log($scope.errormessage);
     } else {
       NavigationService.callApiWithData('Votelog/AddVoteLog', {
         awardcategory: $stateParams.id,
         company: $scope.companyId,
       }, function (data) {
         console.log("success");

         console.log("$stateParams.id", $stateParams.id);
         $scope.id = $stateParams.id;

         console.log("$scope.id", $scope.id);

         $scope.cData = {};

         if ($scope.id == "5a0425988af3e51508368f70") {
           console.log("car Clicked");
           $scope.cData.car = $scope.id;
           if (_.isEmpty($.jStorage.get('catStore'))) {
             $.jStorage.set("catStore", $scope.cData);
           } else {
             $scope.cData = $.jStorage.get("catStore");
             $scope.cData.car = $scope.id;
             $.jStorage.set("catStore", $scope.cData);
           }

         } else if ($scope.id == "5a0426128af3e51508368f82") {
           console.log("bike Clicked");
           $scope.cData.bike = $scope.id;
           if (_.isEmpty($.jStorage.get('catStore'))) {
             $.jStorage.set("catStore", $scope.cData);
           } else {
             $scope.cData = $.jStorage.get("catStore");
             $scope.cData.bike = $scope.id;
             $.jStorage.set("catStore", $scope.cData);
           }
         } else if ($scope.id == "5a0425fc8af3e51508368f79") {
           console.log("scooter Clicked");
           $scope.cData.scooter = $scope.id;
           if (_.isEmpty($.jStorage.get('catStore'))) {
             $.jStorage.set("catStore", $scope.cData);
           } else {
             $scope.cData = $.jStorage.get("catStore");
             $scope.cData.scooter = $scope.id;
             $.jStorage.set("catStore", $scope.cData);
           }
         }


         if ($scope.id == "5a0425988af3e51508368f70") {
           $scope.first = "Scooter";
           $scope.second = "Bike";
         }


         if ($scope.id == "5a0426128af3e51508368f82") {
           $scope.first = "Scooter";
           $scope.second = "Car";
         }



         if ($scope.id == "5a0425fc8af3e51508368f79") {
           $scope.first = "Car";
           $scope.second = "Bike";
         }



         $uibModal.open({
           animation: true,
           templateUrl: mainUrl + 'views/modal/thankyou.html',
           scope: $scope,
           size: 'md',

         });
         $scope.animationAdd = "animation-go";
       });
     }


     $scope.voterDetails = {
       firstName: $scope.VoterName,
       lastName: $scope.VoterSurname,
       email: $scope.VoterEmail,
       company: $scope.companyName,
       category: $scope.VoterCategory
     }
     console.log("$scope.voterDetails", $scope.voterDetails);

     NavigationService.callApiWithData("VoterDetails/save", $scope.voterDetails, function (data) {

       console.log("VoterDetails data", data);

     });










   };

   var i = 0;
   $scope.buttonClick = function () {
     i++;
     // console.log("This is a button Click");
   };

   //for vote end//




   //for voter save//


   NavigationService.callApiWithData("Awardcategory/getOne", $scope.dataId, function (data) {
     console.log("getOne Category", data)
     $scope.VoterCategory = data.data.name;
     console.log("$scope.VoterCategory", $scope.VoterCategory)
   });


   NavigationService.callApiWithData("Voter/getOne", $scope.userId, function (data) {
     console.log("getOne Voter", data)
     $scope.VoterName = data.data.name;
     $scope.VoterEmail = data.data.email;
     $scope.VoterSurname = data.data.surname;
     console.log("$scope.VoterName", $scope.VoterName);
     console.log("$scope.VoterEmail", $scope.VoterEmail);
     console.log("$scope.VoterSurname", $scope.VoterSurname)
   });


   NavigationService.callApiWithData("Company/getOne", $scope.userId, function (data) {
     console.log("getOne Company", data)
     $scope.VoterCompany = data.data.name;
     console.log("$scope.VoterCompany", $scope.VoterCompany)
   });


   //for voter save end//











 })