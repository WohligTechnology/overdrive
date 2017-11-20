module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    saveVoter: function (req, res) {
        if (req.body) {
            Voter.saveVoter(req.body, res.callback);
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
