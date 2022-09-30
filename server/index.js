import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';

//routers from db
// import db from "./db/DbConnection.js";
import speciesRouter from "./routes/species.js";
import sightingsRouter from "./routes/sightings.js";
import individualsRouter from "./routes/individuals.js";
import joinedRouter from "./routes/joined.js"

const app = express();
const PORT = 4040;

app.use(cors());
app.use(bodyParser.json())

app.use("/species", speciesRouter);
app.use("/sightings", sightingsRouter);
app.use("/individuals", individualsRouter);
app.use("/joined", joinedRouter)


app.get('/', function (req, res,) {
    res.json("Get request working");
  });

app.listen(PORT, () => console.log(`Hola! Server is running on port ${PORT}`));