import db from "../db/DbConnection";
import express from "express";
const router = express.Router();
/* GET users listing. */

router.get('/', async function (req, res) {

  try {
    const species= await db.any('SELECT * FROM species ORDER BY id', [true]);
    res.send(species);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

export default router;