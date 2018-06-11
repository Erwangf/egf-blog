let database = require("../other/database");
let pageSchema = database.Schema({
    title: String,
    shortTitle: String,
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    content: String,
    description: String,
    imagePath: {type: String, default: "/assets/images/no_image.png"},
    tags: [{type: String}],
    project: {type:Boolean, default:false}
});
let Page = database.model('Pages', pageSchema);
module.exports = Page;