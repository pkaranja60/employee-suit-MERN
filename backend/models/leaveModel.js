const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({});

module.exports = mongoose.model("Leave", leaveSchema);
