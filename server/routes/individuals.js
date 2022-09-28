import db from "../db/DbConnection.js";
import express from "express";
const router = express.Router();
/* GET users listing. */

router.get('/', async function (req, res) {

  try {
    const individuals= await db.any('SELECT * FROM individuals ORDER BY id', [true]);
    res.send(individuals);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//post request
router.post('/', async (req, res) => {
  const individuals = {
    id: req.body.id,
    nick_name: req.body.nick_name,
    species_id: req.body.species_id,
    seen_on: req.body.seen_on,

  }
  console.log(individuals);
  try {
    const createdIndividuals = await db.one(
      `INSERT INTO individuals(id, nick_name, species_id, seen_on) VALUES($1, $2, $3, $4) RETURNING *`,
      [individuals.id, individuals.nick_name, individuals.species_id, individuals.seen_on]
    );
    console.log(req.body);
    res.send(createdIndividuals);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

//delete request
router.delete("/:id", async (req, res) =>{
  const individualsId = req.params.id;
  try{
    await db.none("DELETE FROM individuals WHERE id=$1", [individualsId]);
    res.send({status: "sucess"});
  }
  catch(e){
    return res.status(400).json({e});
  }
});
export default router;