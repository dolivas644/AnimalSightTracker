import db from "../db/DbConnection.js";
import express, { Router } from "express";
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const sightings = await db.query('SELECT * FROM sightings INNER JOIN individuals ON sightings.individual_id = individuals.id');
      res.send(sightings);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

  export default router;