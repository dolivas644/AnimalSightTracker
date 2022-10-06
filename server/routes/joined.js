import db from "../db/DbConnection.js";
import express, { Router } from "express";
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      console.log('req query', req.query.q);
      let query ='SELECT * FROM sightings ' +
      'INNER JOIN individuals ' +
      'ON sightings.individual_id = individuals.id';
      if(req.query.q){
        query += ` where email like '${req.query.q}'`;
        query += ` or location like '${req.query.q}'`;
        query += ` or email like '${req.query.q}'`;
        query += ` or nick_name like '${req.query.q}'`;
      }
      console.log(query);
      const sightings = await db.query(query);
      res.send(sightings);
    } catch (e) {
      console.log('e', e);
      return res.status(400).json({ e });
    }
  });

  export default router;
// import db from "../db/DbConnection.js";
// import express, { Router } from "express";
// const router = express.Router();

// router.get('/', async (req, res) => {
//     try {
//       console.log('req qeury ', req.query.q);
//       let query = 'SELECT * FROM sightings ' + 
//           'INNER JOIN individuals ' + 
//           'ON sightings.individual_id = individuals.id';
//       if (req.query.q) {
//           query += ` where email like '${req.query.q}'`;
//           query += ` or location like '${req.query.q}'`;
//       }

//       const sightings = await db.query(query);
//       res.send(sightings);
//     } catch (e) {
//       console.log('e ' , e);
//       return res.status(400).json({ e });
//     }
//   });

  // export default router;