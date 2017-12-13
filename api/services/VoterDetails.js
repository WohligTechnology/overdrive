var schema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        validate: validators.isEmail(),
        unique: true
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

// getLastAddedVoter: function (data, callback) {
//     console.log("inside voter")
//         VoterDetails.find({}).sort({
//             createdAt: -1
//         }).limit().exec(function (err, found) {
//     console.log("inside voter")
            
//             console.log("Found: ", found);
//             if (err) {
//                 callback(err, null);
//             } else if (_.isEmpty(found)) {
//                 callback(null, "noDataound");
//             } else {
//                 // console.log("found in Question", found);
//                 callback(null, found);
//             }

//         });
//     },
search1: function (data, callback) {
        if (data.count) {
            var maxCount = data.count;
        } else {
            var maxCount = Config.maxRow;
        }
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
                    fields: ['name'],
                    term: data.keyword
                }
            },
            // sort: {
            //     desc: 'createdAt'
            // },
            start: (page - 1) * maxRow,
            count: maxRow
        };
        console.log("data", data);
        VoterDetails.find().sort({createdAt:-1})
            .order(options)
            .keyword(options)
            .page(options,
                function (err, found) {

                    if (err) {
                        callback(err, null);
                    } else if (found) {
                        console.log("found", found);
                        callback(null, found);
                    } else {
                        callback("Invalid data", null);
                    }
                });

    }


};
module.exports = _.assign(module.exports, exports, model);