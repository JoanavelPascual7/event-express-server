const express = require("express");
const router = express.Router();
const eventQueries = require("../queries/events");
const reviewQueries = require("../queries/reviews");



// GET all events
router.get("/", async (req, res) => {
  try {
    const events = await eventQueries.getAllEvents();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET a single event by ID
router.get("/:id", async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await eventQueries.getEventById(eventId);
    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST a new event
router.post("/", async (req, res) => {
  const eventData = req.body;
  try {
    const newEvent = await eventQueries.createEvent(eventData);
    res.status(201).json(newEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// PUT/update an event by ID
router.put("/:id", async (req, res) => {
  const eventId = req.params.id;
  const eventData = req.body;
  try {
    const updatedEvent = await eventQueries.updateEvent(eventId, eventData);
    res.json(updatedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE an event by ID
router.delete("/:id", async (req, res) => {
  const eventId = req.params.id;
  try {
    await eventQueries.deleteEvent(eventId);
    res.status(204).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// GET all reviews for an event
router.get("/:eventId/reviews", async (req, res) => {
    const eventId = req.params.eventId;
    try {
      const reviews = await reviewQueries.getAllReviewsForEvent(eventId);
      res.json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  

module.exports = router;
