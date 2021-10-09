const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const getQuery = 'SELECT * FROM "item";'
  pool.query(getQuery)
    .then(result => {
      console.log(result.rows);
      res.send(result.rows);
    }).catch(error => {
      console.log('error in server GET', error);
      res.sendStatus(500);
    })
});

//get with the user id attached as a param
router.get('/:id', (req, res) => {
  console.log('user get id, current user ID', req.params.id + req.user.id);
  // === did not work here. params was a string and we are comparing to an int
  if (req.params.id == req.user.id) {
    console.log('hello');
    //think this all makes sense here. send the query and return the results. back to shelf.saga line 73
    const getQuery = 'SELECT * FROM "item" where "user_id" = $1;'
    pool.query(getQuery, [req.params.id])
      .then(result => { //you're in!
        console.log(result.rows);
        res.send(result.rows);
      }).catch(error => { //something weird happened
        console.log('error in server GET', error);
        res.sendStatus(500);
      })
  } else { //you are not authorized
    res.sendStatus(403)
  }
})

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
    req.body.description,
    req.body.image_url,
    req.user.id           //UPDATED
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
router.delete('/', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log('delete id', req.body);
  const deleteQuery = `Delete FROM "item" WHERE "id" = $1 AND "user_id" = $2;`;
  pool.query(deleteQuery, [req.body.id, req.body.user_id])
    .then(result => {
      if (result.rowCount > 0) {
        res.send({ message: 'You deleted the secret!' });
      }
      else {
        res.send({ message: 'Nothing was deleted, check with your manager/check your status. You may need clearance.' })
      }
    })
    .catch(error => {
      console.log('error in shelf.router.js delete:', error);
      res.sendStatus(500);
    });
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
