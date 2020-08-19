const express = require("express");
const sendMail = require("./mail");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/email", (req, res) => {
  // send Email
  const { email, subject, message } = req.body;
  sendMail(email, subject, message, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Server Error Please try again " });
    } else {
      res.json({ message: "Thank you for your message" });
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is runing en port ${PORT}`));
