const mongoose = require("mongoose");
const {insertBooks} = require("./function");
const {insertChapters} = require("./function");
const {MONGODB_URI} = require("./config");

mongoose.connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true});

mongoose.connection.once("open", async function () {
    await insertBooks();
    await insertChapters();
});