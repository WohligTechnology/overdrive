 myApp.controller('NominationCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
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


NavigationService.callApi("Company/search", function (data) {
            console.log("Company data", data);
$scope.companyData = data.data.results;

        });

    })