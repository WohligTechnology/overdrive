 myApp.controller('NominationCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams) {
    $scope.template = TemplateService.getHTML("content/nomination.html");
    TemplateService.title = "Nomination"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    TemplateService.class = "nomination";   
        $scope.formSubmitted = false;

        $scope.submitForm = function (data) {
            $scope.formSubmitted = true;
        };

// $scope.class = "red";
 $scope.changeClass = function(){
   $scope.class = "n_flip";
 };


$scope.id = $stateParams.id;
console.log("categoryid", $scope.id);

NavigationService.callApi("Company/search",$stateParams.id, function (data) {
console.log("catdata", data)
            // $scope.s_name = data.data.data.name;
            // console.log("sss", $scope.s_name)
        });




NavigationService.callApi("Company/search", function (data) {
            console.log("Company data", data);
$scope.companyData = data.data.results;

        });

    })