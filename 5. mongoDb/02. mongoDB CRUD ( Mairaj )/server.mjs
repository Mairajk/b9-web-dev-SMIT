import express from "express";
import path from "path";
import { connectDB, feedbacksModel } from "./db.mjs";

const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json()); // body parser

//Connect to the mongodb database with my app with mongoose before listening
connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Examples app listening on port ${PORT}`)
    );
  })
  .catch((err) => console.log("db err", err));


app.get('/feedback', async (req, res) => {
  try {

    const data = await feedbacksModel.find()

    return res.json({
      message: 'Data get successfully.',
      data,
    })
  } catch (error) {

    console.log('error -------------->', error);

  }

})


app.post("/feedback", async (req, res) => {

  const { participantName, comment } = req.body
  try {

    if (!participantName || !comment) {
      return res.status(403).send({
        message: `Required parameter is missing. body: { participantName, comment }`
      })
    }

    const create = await feedbacksModel.create({ participantName, comment });

    console.log("create ---------------->", create);

    return res.json({ message: "Feedback posted successfully" });

  } catch (err) {
    return res.status(500).send({ message: err.message || `Woops! something went wrong.` });

  }
});




app.use(express.static(path.join(__dirname, "public")));
