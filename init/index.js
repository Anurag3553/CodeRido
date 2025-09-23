const mongoose = require("mongoose");
const initData = require("./data.js");
const coderidolist = require("../Models/listings.js");

main()
    .then(() => {
        console.log("Connection Successful");
    })
    .catch(err => {
        console.log(err);
    });
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/CodeRidoAIMock');

}

const initDB = async() => {
    await coderidolist.deleteMany({});
    await coderidolist.insertMany(initData.data);
    console.log("Data Was Initialized");
};

initDB();