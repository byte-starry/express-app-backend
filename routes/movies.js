var express = require('express');
const db = require('../db');

var router = express.Router();

/* GET movies listing. */
router.get('/', 
  async function(req, res, next) {
    try {
        const result = await db.query('SELECT * FROM newmovies');
        res.json(result.rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
  }
);

router.post('/', 

async function(req, res, next) {
    const {
        title,
        rating,
        ID,
    } = req.body 

    try {

        const result = await db.query(
            'INSERT INTO newmovies (title, rating) VALUES ($1, $2)',
            [title, rating, ID], (error, results) => {
                   if (error) {
                       throw error
                   }
            }
        );

        res.status(201).send(`Movie added: ${title}`);
            
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
  }
);

module.exports = router;
