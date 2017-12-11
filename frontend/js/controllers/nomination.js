 myApp.controller('NominationCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams, $state) {
   $scope.template = TemplateService.getHTML("content/nomination.html");
   TemplateService.title = "Nomination"; //This is the Title of the Website
   $scope.navigation = NavigationService.getNavigation();
   TemplateService.class = "nomination";
   $scope.formSubmitted = false;

   $scope.submitForm = function (data) {
     $scope.formSubmitted = true;
   };

   $scope.dataId = {
     _id: $stateParams.id
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
   //          templateUrl: 'views/content/login.html',
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
   $scope.changeCompany = function (companyId, index) {
     $scope.class = [];
     $scope.class[index] = "n_flip";
     console.log("changeCompany", companyId);
     $scope.companyId = companyId;

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
         $uibModal.open({
           animation: true,
           templateUrl: 'views/modal/thankyou.html',
           scope: $scope,
           size: 'md',

         });
         $scope.animationAdd = "animation-go";
       });
     }
   };

   var i = 0;
   $scope.buttonClick = function () {
     i++;
     // console.log("This is a button Click");
   };

   //for vote end//


 })