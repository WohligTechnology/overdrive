module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    // getLastAddedVoter: function (req, res) {
    // console.log("inside voter ctrl")
    //     if (req.body) {
    //         console.log("inside if")
    //         VoterDetails.getLastAddedVoter(req.body, res.callback);
    //     } else {
    //         res.json({
    //             value: false,
    //             data: {
    //                 message: "Invalid Request"
    //             }
    //         })
    //     }
    // },
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
