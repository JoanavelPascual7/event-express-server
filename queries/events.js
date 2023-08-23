const db = require("../db/dbConfig.js");

// GET all events
async function getAllEvents() {
  try {
    const events = await db.any("SELECT * FROM events");
    return events;
  } catch (error) {
    throw error;
  }
}

// GET a single event by ID
async function getEventById(eventId) {
  try {
    const event = await db.one("SELECT * FROM events WHERE id = $1", eventId);
    return event;
  } catch (error) {
    throw error;
  }
}

// POST a new event
async function createEvent(eventData) {
  const { name, date, location, rating, comment, is_favorite, user_name } = eventData;
  try {
    const newEvent = await db.one(
      "INSERT INTO events (name, date, location, rating, comment, is_favorite, user_name) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [name, date, location, rating, comment, is_favorite, user_name]
    );
    return newEvent;
  } catch (error) {
    throw error;
  }
}

// PUT/update an event by ID
async function updateEvent(eventId, eventData) {
  const { name, date, location, rating, comment, is_favorite, user_name } = eventData;
  try {
    const updatedEvent = await db.one(
      "UPDATE events SET name = $1, date = $2, location = $3, rating = $4, comment = $5, is_favorite = $6, user_name = $7 WHERE id = $8 RETURNING *",
      [name, date, location, rating, comment, is_favorite, user_name, eventId]
    );
    return updatedEvent;
  } catch (error) {
    throw error;
  }
}

// DELETE an event by ID
async function deleteEvent(eventId) {
  try {
    await db.none("DELETE FROM events WHERE id = $1", eventId);
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
};
