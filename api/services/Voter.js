var schema = new Schema({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
        validate: validators.isEmail(),
        unique: true
    },
    votedFor: {
        type: String,
    }
    
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Voter', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

saveVoter: function (data, callback) {
        console.log("inside api**********", data)
        Voter.findOne({
            email: data.email
        }).exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                Voter.saveData(data, function (err, found1) {
                    if (err || _.isEmpty(found1)) {
                        callback(err, []);
                    } else {
                        callback(null, found1);
                    }
                });
            } else {
                console.log("already present", found);
                callback(null, found);
            }

        });
    },


};
module.exports = _.assign(module.exports, exports, model);