myApp.directive('img', function ($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function () {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
})

.directive('hideOnScroll', function ($document) {
        return {
            restrict: 'EA',
            replace: false,
            link: function (scope, element, attr) {
                var $element = $(element);
                var lastScrollTop = 850;
                $(window).scroll(function (event) {
                    var st = $(this).scrollTop();
                    if (st > lastScrollTop) {
                        $(element).addClass('nav-up');
                    } else {
                        $(element).removeClass('nav-up');
                    }
                    // lastScrollTop = st;
                });
            }
        };
    })
    .directive('scrollAnimation', function ($document, $timeout) {
        return {
            restrict: 'EA',
            replace: false,
            link: function (scope, element, attr) {
                var $element = $(element);
                var lastScrollTop = 600;
                $(window).scroll(function (event) {
                    // lastScrollTop = st;
                    // h = $(this).scrollTop() - 500;
                    // $('.blade1').css("height", h);
                    // h2 = $(this).scrollTop() - 1300; 
                    // $('.blade2').css("height", h2);
                    // h3 = $(this).scrollTop() - 2400;
                    // $('.blade3').css("height", h3);
                    // h4 = $(this).scrollTop() - 3100;
                    // $('.blade4').css("height", h4);
                    console.log($(this).scrollTop());
                    if (($(this).scrollTop() < 2400)) {
                        $(".barz>li").css("-webkit-animation", " bounce 1s infinite cubic-bezier(0, 0, 0, 1)");
                        $(".barz>li").css("-moz-animation", "");
                        $(".barz>li").css("-ms-animation", "");
                        $(".barz>li").css("animation", " bounce 1s infinite cubic-bezier(0, 0, 0, 1)");
                    }
                    if ($(this).scrollTop() > 2400) {
                        $timeout(function () {
                            $(".barz>li").css("-webkit-animation", "none");
                            $(".barz>li").css("-moz-animation", "none");
                            $(".barz>li").css("-ms-animation", "none");
                            $(".barz>li").css("animation", "none");
                        }, 2000)


                    }


                    if ($(this).scrollTop() < 100) {
                        $('.cust-transition').css("transition", "none")
                        $('.blade1').css("height", '0%');
                        $('.blade2').css("height", '0%');
                        $('.blade3').css("height", '0%');
                        $('.blade4').css("height", '0%');
                    }
                    if ($(this).scrollTop() > 750) {
                        $('.blade1').css("height", '100%');
                        $('.cust-transition').css("transition", "all 2s")
                    }
                    if ($(this).scrollTop() > 1700) {
                        $('.blade2').css("height", '800px');
                    }
                    if ($(this).scrollTop() > 2600) {
                        $('.blade3').css("height", '100%');
                    }
                    if ($(this).scrollTop() > 3500) {
                        $('.blade4').css("height", '1000px');
                    }
                });
            }
        };
    })


.directive('fancybox', function ($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function (scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                padding: 0,
                helpers: {
                    media: {}
                }
            });
        }
    };
})

.directive('autoHeight', function ($compile, $parse) {
    return {
        restrict: 'EA',
        replace: false,
        link: function ($scope, element, attrs) {
            var $element = $(element);
            var windowHeight = $(window).height();
            $element.css("min-height", windowHeight);
        }
    };
})


.directive('replace', function () {
    return {
        require: 'ngModel',
        scope: {
            regex: '@replace',
            with: '@with'
        },
        link: function (scope, element, attrs, model) {
            model.$parsers.push(function (val) {
                if (!val) {
                    return;
                }
                var regex = new RegExp(scope.regex);
                var replaced = val.replace(regex, scope.with);
                if (replaced !== val) {
                    model.$setViewValue(replaced);
                    model.$render();
                }
                return replaced;
            });
        }
    };
})


;