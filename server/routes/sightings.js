import db from "../db/DbConnection";
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

export default router;