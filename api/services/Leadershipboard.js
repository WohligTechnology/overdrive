var schema = new Schema({
    name: {
        type: String,
    },
  company: [{
        companyObj: {
        type:Schema.Types.ObjectId,
        ref:'Company'
        },
        voteCount:{
         type:Number,
         default: 0 
        }
    }]

});

schema.plugin(deepPopulate, {
     populate: {
        'company.companyObj': {
            select: ''
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Leadershipboard', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, 'company.companyObj','company.companyObj'));
var model = {};
module.exports = _.assign(module.exports, exports, model);