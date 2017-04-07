const express = require('express');
const path = require('path');
const multer = require('multer');

const upload = multer();

const app = express();
const port = process.env.PORT | 3000;

app.use(express.static(path.resolve(__dirname, './public')));

app.post('/get-file-size', upload.single('file'), (req, res) => {
  res.json({ size: req.file.size })
});

app.all('*', (req, res) => { res.status(404).send('Not found!'); });
app.listen(port, () => { console.log(`Server start at port ${ port }`); })
