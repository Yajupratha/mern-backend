const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
    userId: String,
    title: String,
    date: Date,
    description: String,
    isRecurring: Boolean,
});

module.exports = mongoose.model("Event", EventSchema);
