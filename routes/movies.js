var express = require("express");
const db = require("../db");

var router = express.Router();

/* GET movies listing. */
router.get("/", async function (req, res, next) {

  try {
    const result = await db.query("SELECT * FROM newmovies");
    res.json(result.rows);

  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

/*POST movies listing*/
router.post("/", async function (req, res, next) {
  res.status(201).send(`Movie added: `);
  // const { title, rating } = req.body;
  // console.error("logged", title, rating);
  // try {
    
  //   const result = await db.query(
  //     "INSERT INTO newmovies (title, rating) VALUES ($1, $2)",
  //     [title, rating],
  //     (error, results) => {
  //       if (error) {
  //         throw error;
  //       }
  //     }
  //   );
    

  // } catch (err) {
  //   console.error(err);
  //   res.status(500).send("Internal Server Error");
  // }
});

// /*DELETE movie*/
// router.delete("/:id", async function (req, res) {
  
//   const { id } = req.params;
  
//   try {
//     const checkExistence = await db.query("SELECT * FROM newmovies WHERE id = $1", [id]);
//     // if (checkExistence.rows.length === 0) {
//     //   console.error(`Entry with id ${id} not found`)
//     //   return res.status(404).json({ message: 'Entry not found' });
//     // }
//     const result = await db.query("DELETE FROM newmovies WHERE id = $1", [id]);
//     res.json({ message: 'entry deleted successfully'})
//   } catch (error) {
//     console.error('Error executing query', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });


/*UPDATE movie */
// router.put("/:id", async function (req, res) {
// const {id} = req.params;

// try {
  


// } catch (error) {
//   console.error('error executing', error)
//   res.status(500).json({ message: 'Internal server error'})
// }
// })

module.exports = router;
