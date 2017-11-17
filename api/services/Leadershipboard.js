var schema = new Schema({
    name: {
        type: String,
    },
    ratings: [{
        img: {
            type: String
        },
        percentage:{
            type: String
        }
    }],

});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Leadershipboard', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);