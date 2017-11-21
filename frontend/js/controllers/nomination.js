 myApp.controller('NominationCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams) {
    $scope.template = TemplateService.getHTML("content/nomination.html");
    TemplateService.title = "Nomination"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.class = "nomination";   
        $scope.formSubmitted = false;

        $scope.submitForm = function (data) {
            $scope.formSubmitted = true;
        };

$scope.class=[];
$scope.changeClass = function(index){
   $scope.class=[];
  $scope.class[index] = "n_flip";
};
   $scope.Nomination = [{
         img: 'img/nomination/wheel.png',
         imgback: 'img/slider/1-m.png',
        name: "CARS",
        id:1
        }, {
          img: 'img/nomination/wheel.png',
          imgback: 'img/slider/2-m.png',
           name: "SCOOTERS",
             id:2

       }, {
          img: 'img/nomination/wheel.png',
        imgback: 'img/slider/3-m.png',
           name: "MOTOBIKES",
             id:3
        }, {
          img: 'img/nomination/wheel.png',
        imgback: 'img/slider/3-m.png',
           name: "MOTOB",
           id:4
        }];

$scope.dataId={
_id : $stateParams.id
}

console.log("categoryid", $scope.id);

NavigationService.callApiWithData("Awardcategory/getOne", $scope.dataId ,function (data) {
console.log("catdata", data)
$scope.singleCatData=data.data;
console.log("singleCatData", $scope.singleCatData)
            $scope.cImg = data.data.img;
            console.log("sss", $scope.cImg)
        });




NavigationService.callApi("Company/search", function (data) {
            console.log("Company data", data);
$scope.companyData = data.data.results;

        });

    })