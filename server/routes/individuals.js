import db from "../db/DbConnection";
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

export default router;