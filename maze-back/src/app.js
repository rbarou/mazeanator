const config = require('../config/config');
const MazeBuilder = require('./mazeBuilder');
const Solver = require('./solver');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const front_url = `http://${config.FRONTEND_HOST}:${config.FRONTEND_PORT}`;

app.use(bodyParser.json());
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', front_url);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

let maze;

app.get('/', (_, res) => res.send('Hello World'));

app.post('/initGrid', (req, res) => {

    maze = new MazeBuilder();

    const size = req.body.size ? parseInt(req.body.size) : 21;
    const showSteps = req.body.showSteps ? req.body.showSteps : false;
    const complexify = req.body.complexify;

    maze.setSize(size)
        .initGrid()
        .buildLabyrinth(showSteps, complexify);
    if(showSteps){
        res.send(maze.visualization)
    }
    else res.send(maze.grid)
});

app.get('/solve', (_, res) => {
    let solver = new Solver(maze.grid);
    res.send(solver.solve(maze.grid));
});

app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`));