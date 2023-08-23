const db = require("../db/dbConfig.js");


// GET all reviews
async function getAllReviews() {
  try {
    const reviews = await db.any("SELECT * FROM reviews");
    return reviews;
  } catch (error) {
    throw error;
  }
}

// GET all reviews for an event
async function getAllReviewsForEvent(eventId) {
  try {
    const reviews = await db.any("SELECT * FROM reviews WHERE event_id = $1", eventId);
    return reviews;
  } catch (error) {
    throw error;
  }
}

// POST a new review for an event
async function createReviewForEvent(eventId, reviewData) {
  const { reviewer, review, rating } = reviewData;
  try {
    const newReview = await db.one(
      "INSERT INTO reviews (reviewer, review, rating, event_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [reviewer, review, rating, eventId]
    );
    return newReview;
  } catch (error) {
    throw error;
  }
}

// PUT/update a review by ID
async function updateReview(reviewId, reviewData) {
  const { reviewer, review, rating } = reviewData;
  try {
    const updatedReview = await db.one(
      "UPDATE reviews SET reviewer = $1, review = $2, rating = $3 WHERE id = $4 RETURNING *",
      [reviewer, review, rating, reviewId]
    );
    return updatedReview;
  } catch (error) {
    throw error;
  }
}

// DELETE a review by ID
async function deleteReview(reviewId) {
  try {
    await db.none("DELETE FROM reviews WHERE id = $1", reviewId);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllReviewsForEvent,
  createReviewForEvent,
  updateReview,
  deleteReview,
  getAllReviews
};
