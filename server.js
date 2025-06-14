const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/:date?', (req, res) => {
  let date = req.params.date;
  let parsedDate;

  if (!date) {
    parsedDate = new Date();
  } else if (!isNaN(date)) {
    parsedDate = new Date(parseInt(date));
  } else {
    parsedDate = new Date(date);
  }

  if (parsedDate.toString() === "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else {
    res.json({
      unix: parsedDate.getTime(),
      utc: parsedDate.toUTCString()
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
