const config = require('../config/config');
const MazeBuilder = require('./mazeBuilder');
const express = require('express');
const app = express();

const port = config.development.port;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

let maze = new MazeBuilder()
    .setSize(59,59)
    .initGrid()
    .buildLabyrinth()
    .saveToTxt('../out/output.json');
