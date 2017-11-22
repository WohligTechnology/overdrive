var schema = new Schema({
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company'

    },
    awardcategory: {
        type: Schema.Types.ObjectId,
        ref: 'Awardcategory'
    },
    userAgentDetails: {
        type: String
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

schema.plugin(deepPopulate, {
            populate: {
                'userId': {
                    select: 'name _id email'

                },
                'awardcategory': {
                    select: 'name _id'
                },
                'company': {
                    select: 'name _id'
                }
            }
            });
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Votelog', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, 'userId awardcategory company', 'userId awardcategory company'));
var model = {
    AddVoteLog: function (data, callback) {
                var Model = this;
                var voteData = data.body;
                voteData.userAgentDetails = JSON.stringify(data.headers);
                Model.saveData(voteData, function (err, data2) {
                    if (err) {
                        callback(err, data2);
                    } else {
                        Awardcategory.findOne({
                            "_id": data.body.awardcategory
                        }).exec(function (err, awardcategoryData) {
                            //console.log(data);
                            _.each(awardcategoryData.company, function (value) {
                                console.log(value);
                                console.log(data.body.company);
                                if (value.companyObj == data.body.company) {
                                    console.log(data.body.company);
                                    console.log("MatchFound");
                                    value.voteCount = ++value.voteCount;
                                }
                            });
                            awardcategoryData.save(function (err, data) {
                                callback(err, data);
                            });
                        });
                    }
                });
            }
};
module.exports = _.assign(module.exports, exports, model);