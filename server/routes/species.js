import db from "../db/DbConnection.js";
import express from "express";
const router = express.Router();
/* GET users listing. */

router.get('/', async function (req, res) {

  try {
    const species = await db.any('SELECT * FROM species ORDER BY id', [true]);
    res.send(species);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

//post request
router.post('/', async (req, res) => {
  const species = {
    id: req.body.id,
    common_name: req.body.common_name,
    scientific_name: req.body.scientific_name,
    population: req.body.population,
    conservation_status: req.body.conservation_status,
    created_on: req.body.created_on,
  }
  console.log(species);
  try {
    const createdSpecies = await db.one(
      `INSERT INTO species(id, common_name, scientific_name, population, conservation_status, created_on) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
      [species.id, species.common_name, species.scientific_name, species.population, species.conservation_status, species.created_on]
    );
    console.log(req.body);
    res.send(createdSpecies);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
})

//delete request
router.delete("/:id", async (req, res) =>{
  const speciesId = req.params.id;
  try{
    await db.none("DELETE FROM species WHERE id=$1", [speciesId]);
    res.send({status: "sucess"});
  }
  catch(e){
    return res.status(400).json({e});
  }
});

export default router;