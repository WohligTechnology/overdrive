var schema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
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
module.exports = mongoose.model('VoterDetails', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    exceltotalVoter: function (data, callback) {
        console.log("inside api")
        VoterDetails.find({}).deepPopulate("currentSubscription").exec(function (err, data) {
            if (err || _.isEmpty(data)) {
                callback(err, [])
            } else {
                callback(null, data)
            }
        })
    },
    generateExcelVoter: function (match, callback) {
        var obj = {};
        var retVal = [];
        _.each(match, function (mainData) {
            obj = {};
            obj["FIRST NAME"] = mainData.firstName;
            obj["LAST NAME"] = mainData.lastName;
            obj["EMAIL"] = mainData.email;
            obj["COMAPNY"] = mainData.company;
            obj["CATEGORY"] = mainData.category;
            retVal.push(obj);
        });
        callback(null, obj);

    },


    // findVoter: function (data, callback) {
    //         VoterDetails.findOne({
    //             email: data.email,
    //             category: data.category
    //         }).exec(function (err, found) {
    //             if (err) {

    //                 callback(err, null);
    //             } else {
    //                 if (!_.isEmpty(found)) {
    //                     var foundObj = found.toObject();
    //                     callback(null, foundObj);
    //                 } else {
    //                     callback("Already voted!", null);
    //                 }
    //             }

    //         });
    //     },


    findVoter: function (data, callback) {
        console.log("inside api", data)
        VoterDetails.findOne({
            email: data.email,
            category: data.category
        }).deepPopulate("").exec(function (err, found) {
            console.log("Found: ", found);
            if (err) {
                callback(err, null);
            } else if (_.isEmpty(found)) {
                callback(null, "noDataound");
            } else {
                console.log("Data ", found);
                callback(null, found);
            }

        });
    },








    search1: function (data, callback) {
        var maxCount = Config.maxRow;
        var maxRow = maxCount
        var page = 1;
        if (data.page) {
            page = data.page;
        }
        var field = data.field;
        var options = {
            field: data.field,
            filters: {
                keyword: {
                    fields: ['firstName', 'lastName', 'company', 'category'],
                    term: data.keyword
                }
            },
            // sort: {
            //     asc: 'createdAt'
            // },
            start: (page - 1) * maxRow,
            count: maxRow
        };
        VoterDetails.find({}).sort({
                createdAt: -1
            })
            .order(options)
            .keyword(options)
            .page(options,
                function (err, found) {
                    if (err) {
                        console.log(err);
                        callback(err, null);
                    } else if (found) {
                        callback(null, found);
                    } else {
                        callback("Invalid data", null);
                    }
                });
    }


};
module.exports = _.assign(module.exports, exports, model);