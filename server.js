const express = require("express")
const fileUpload = require("express-fileupload")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(fileUpload());

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.post("/picture", async (req, res) => {
  console.log('---', req.files)
  try {
    if(!req.files && !req.body.files){
      res.send({
        status: false,
        message: "No files"
      })
    } else {
      res.send({
        status: true,
        message: "File is uploaded"
      })
    }
  } catch (e) {
    res.status(500).send(e)
  }
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`Server is running on port ${port}`))