const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

main()
    .then(() => {
        console.log("connect to db");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
};

let initDb = async() => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initializes");

};

initDb();