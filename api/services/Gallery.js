var schema = new Schema({
    year: {
        type: String
    },
    order: {
        type: Number
    },
    img: [{
        image: {
            type: String
        },
        sequence:{
            type: Number
        },
        title: {
            type: String
        }
    }],
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Gallery', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "order", "asc"));
var model = {};
module.exports = _.assign(module.exports, exports, model);