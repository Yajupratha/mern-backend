const express = require("express");
const Event = require("../models/Event");
const router = express.Router();

// Create an event
router.post("/add", async (req, res) => {
    const { userId, title, date, description, isRecurring } = req.body;
    const newEvent = new Event({ userId, title, date, description, isRecurring });
    await newEvent.save();
    res.json(newEvent);
});

// Get all events for a user
router.get("/:userId", async (req, res) => {
    const events = await Event.find({ userId: req.params.userId });
    res.json(events);
});

// Delete an event
router.delete("/:id", async (req, res) => {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
});

module.exports = router;
