var schema = new Schema({
   name: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    wname: {
        type: String,
        required: true
    },
    bname: {
        type: String,
        required: true
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Winners', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);