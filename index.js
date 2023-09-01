const MazeBuilder = require('./mazeBuilder');
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World AGAGGAG'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

let maze = new MazeBuilder()
    .setSize(59,59)
    .initGrid()
    .buildLabyrinth()
    .saveToTxt('output.json');
