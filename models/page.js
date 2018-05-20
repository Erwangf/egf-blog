let database = require("../other/database");
let pageSchema = database.Schema({
    title: String,
    content : String,
    description : String,
    imagePath : String,
    tags : [{type:String}]
});
let Page = database.model('Pages',pageSchema);
module.exports = Page;