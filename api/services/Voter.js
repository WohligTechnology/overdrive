var schema = new Schema({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    email: {
        type: String,
    },
    company: {
        type: String,
    },
    category: {
        type: String,
    }
    
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Voter', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

// saveVoter: function (data, callback) {
//         console.log("inside api**********", data)
//         Voter.findOne({
//             email: data.email
//         }).exec(function (err, found) {
//             console.log("Found: ", found);
//             if (err) {
//                 callback(err, null);
//             } else if (_.isEmpty(found)) {
//                 Voter.saveData(data, function (err, found1) {
//                     if (err || _.isEmpty(found1)) {
//                         callback(err, []);
//                     } else {
//                         callback(null, found1);
//                     }
//                 });
//             } else {
//                 console.log("already present", found);
//                 callback(null, found);
//             }

//         });
//     },

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


getLastAddedVoter: function (data, callback) {
    console.log("inside voter")
        Voter.find({}).sort({
            createdAt: -1
        }).limit().exec(function (err, found) {
    console.log("inside voter")
            
            console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                // console.log("found in Question", found);
                callback(null, found);
            }

        });
    },





};
module.exports = _.assign(module.exports, exports, model);