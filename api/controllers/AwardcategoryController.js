module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    excelLeadershipboard: function (req, res) {
         console.log("inside excelLeadershipboard")
        Awardcategory.excelLeadershipboard(req.body, function (err, data) {
            console.log("after api called")
            Awardcategory.generateExcelLeadershipboard(data, function (err, singleData) {

                Config.generateExcel1("Leadershipboard", singleData, function (excels) {
                    // console.log("excel", excels, "err", err);
                    res.set('Content-Type', "application/octet-stream");
                    res.set('Content-Disposition', "attachment;filename=" + excels.path);
                    res.send(excels.excel);
                });
            });
        });
    },
};
module.exports = _.assign(module.exports, controller);
