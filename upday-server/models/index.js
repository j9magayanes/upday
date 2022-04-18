const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb+srv://janine:Onedirection143@cluster0.fmf1z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  keepAlive: true
});

module.exports.User = require("./user");
module.exports.Message = require("./message");
module.exports.Data =  require("./data")
module.exports.News =  require("./news")
