import db from "../db/DbConnection.js";
import express from "express";
const router = express.Router();
/* GET users listing. */

router.get('/', async function (req, res) {

  try {
    const sightings= await db.any('SELECT * FROM sightings ORDER BY id', [true]);
    res.send(sightings);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//post request
router.post('/', async (req, res) => {
  const sightings = {
    id: req.body.id,
    date_time: req.body.date_time,
    location: req.body.location,
    healthy: req.body.healthy,
    email: req.body.email,
    individual_id: req.body.individual_id,
    created_on: req.body.created_on,

  }
  console.log(sightings);
  try {
    const createdSightings = await db.one(
      `INSERT INTO sightings(id, date_time, location, healthy, email, individual_id, created_on) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [sightings.id, sightings.date_time, sightings.location, sightings.healthy, sightings.email, sightings.individual_id, sightings.created_on]
    );
    console.log(req.body);
    res.send(createdSightings);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
})

//delete request
router.delete("/:id", async (req, res) =>{
  const sightingsId = req.params.id;
  try{
    await db.none("DELETE FROM sightings WHERE id=$1", [sightingsId]);
    res.send({status: "sucess"});
  }
  catch(e){
    return res.status(400).json({e});
  }
});

export default router;