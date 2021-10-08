const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  console.log('INCOMING req.body on router:', req.body);
  const postQuery = 
  `INSERT INTO "item" 
  ("description", "image_url", "user_id")
  VALUES($1, $2, $3);`     //double-check query
  pool.query(postQuery, [
    req.body.description,  //matching Sarah's variable?
    req.body.image_url,    //matching Sarah's variable?
    req.body.user_id       //matching Sarah's variable?
  ]).then(result => {
    res.sendStatus(201);
  }).catch(error => {
    console.log('error in shelf.router.js post:', error);
    res.sendStatus(500);
  });
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
