let database = require("../other/database");
let pageSchema = database.Schema({
    title: String,
    shortTitle:String,
    createdAt:{ type: Date, default: Date.now },
    updatedAt:{ type: Date, default: Date.now },
    content : String,
    description : String,
    imagePath : String,
    tags : [{type:String}]
});
let Page = database.model('Pages',pageSchema);
module.exports = Page;