myApp.service('TemplateService', function () {
    this.title = "Home";
    this.meta = "";
    this.metadesc = "";
    this.class = "";


    var d = new Date();
    this.year = d.getFullYear();

    this.init = function () {
        this.header = mainUrl + "views/template/header.html";
        this.menu = mainUrl + "views/template/menu.html";
        this.content = mainUrl + "views/content/content.html";
        this.footer = mainUrl + "views/template/footer.html";
    };

    this.getHTML = function (page) {
        this.init();
        var data = this;
        data.content = mainUrl + "views/" + page;
        return data;
    };

    this.init();

});