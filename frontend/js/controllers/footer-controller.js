 myApp.controller('footerCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $stateParams, $state) {
//    $scope.template = TemplateService.getHTML("content/nomination.html")
//    TemplateService.title = "Nomination"; //This is the Title of the Website
//    $scope.navigation = NavigationService.getNavigation();
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
                    scrollTop: $('#' + id).offset().top-50
                }, "slow");
            }, 500);
        }
    };

});