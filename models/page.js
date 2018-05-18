let database = require("../other/database");
let pageSchema = database.Schema({
    name: String,
    content : String
});
let Page = database.model('Pages',pageSchema);
module.exports = Page;