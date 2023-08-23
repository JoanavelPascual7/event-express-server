const express = require("express");
const router = express.Router();
const reviewQueries = require("../queries/reviews");

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await reviewQueries.getAllReviews();
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});


// GET all reviews for a specific event
router.get("/event/:eventId", async (req, res) => {
  const eventId = req.params.eventId;
  try {
    const reviews = await reviewQueries.getAllReviewsForEvent(eventId);
    res.json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST a new review for an event
router.post("/:eventId", async (req, res) => {
  const eventId = req.params.eventId;
  const reviewData = req.body;
  try {
    const newReview = await reviewQueries.createReviewForEvent(eventId, reviewData);
    res.status(201).json(newReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// PUT/update a review by ID
router.put("/:reviewId", async (req, res) => {
  // ...
});

// DELETE a review by ID
router.delete("/:reviewId", async (req, res) => {
  // ...
});

module.exports = router;
