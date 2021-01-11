const express = require("express");
const path = require("path");
const server = express();
const cors = require("cors");

const { barcode } = require("./data");
// console.log(barcode);

const setupExpressServer = () => {
  /* return configured express app */
  server.use(express.static(path.join(__dirname, 'public')));
  server.use(express.json()); // for parsing application/json
  server.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  server.use(cors());

  server.get("/jancode/", (req, res) => {
    res.send("test");
  })
  server.get("/jancode/:jan", (req, res) => {

    const jan = req.params.jan;
    console.log(jan);
    for (const i of barcode) {
      if (jan === i.jancode) {
        res.send(i);
        return;
      }
    }
    res.send({ barcode: jan, notPresent: true });
  });
  return server;
};

const PORT = process.env.PORT || 4000;
const app = setupExpressServer();
app.listen(PORT, () => {
  console.log("Server running on:", PORT);
});
