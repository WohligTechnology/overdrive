module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
     exceltotalVoter: function (req, res) {
         console.log("inside exceltotalVoter")
        VoterDetails.exceltotalVoter(req.body, function (err, data) {
            console.log("after api called")
            VoterDetails.generateExcelVoter(data, function (err, singleData) {

                Config.generateExcel1("voterDetails", singleData, function (excels) {
                    // console.log("excel", excels, "err", err);
                    res.set('Content-Type', "application/octet-stream");
                    res.set('Content-Disposition', "attachment;filename=" + excels.path);
                    res.send(excels.excel);
                });
            });
        });
    },


// findVoter: function (req, res) {
//         if (req.body) {
//             VoterDetails.findVoter(req.body, res.callback);
//         } else {
//             res.json({
//                 value: false,
//                 data: {
//                     message: "Invalid Request"
//                 }
//             })
//         }
//     },



 findVoter: function (req, res) {
        if (req.body) {
            VoterDetails.findVoter(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },



       search1: function (req, res) {
    console.log("inside voter ctrl")
        if (req.body) {
            console.log("inside if")
            VoterDetails.search1(req.body, res.callback);
        } else {
            res.json({
                value: false,
                data: {
                    message: "Invalid Request"
                }
            })
        }
    },
};
module.exports = _.assign(module.exports, controller);
