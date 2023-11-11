class MazeBuilder{

    constructor(){
        this.size = 0;
        this.emptyCell = new Set();
        this.grid = [];
        this.walls = [];
        this.visualization = [];
    }

    setSize(size){
        this.size = size;
        return this;
    }

    initGrid(){
        let cpt = 0;
        this.grid = Array(this.size)
            .fill(Array(this.size).fill(-1))
            .map((row,i) => row.map((_cell,j) =>{
                if(i == 0 || j == 0 || i == this.size - 1 || j == this.size - 1)
                    return -1;
                else if(i%2!=0 && j%2!=0){
                    cpt++;
                    this.emptyCell.add(cpt);
                    return cpt;
                }
                else{
                    this.walls.push([i,j]);
                    return -1;
                }
            }));
        return this;
    }

    genRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    buildLabyrinth(showSteps = false, complexify = false){
        this.visualization = [];

        const leftWall = (this.genRandom(0, this.size/2 - 2) * 2) + 1;
        const rightWall = (this.genRandom(0, this.size/2 - 2) * 2) + 1;
        this.grid[leftWall][0] = this.grid[leftWall][1];
        this.grid[rightWall][this.size - 1] = this.grid[rightWall][this.size - 2];

        while(this.mustBreakWall()){
            
            let x = this.genRandom(1, this.size - 2);
            let y = (x % 2 == 0)
                ? (this.genRandom(0, this.size/2 - 2) * 2) + 1
                : (this.genRandom(0, this.size/2 - 3) * 2) + 2

            let cell1, cell2;

            if(this.grid[x-1][y] == -1){
                cell1 = this.grid[x][y-1];
                cell2 = this.grid[x][y+1];
            }else{
                cell1 = this.grid[x-1][y];
                cell2 = this.grid[x+1][y];
            }

            if(cell1 != cell2){
                this.grid[x][y] = cell1;
                for(let i = 0; i < this.size; i++){
                    for(let j = 0; j < this.size; j++){
                        if(this.grid[i][j] == cell2){
                            this.emptyCell.delete(cell2);
                            this.grid[i][j] = cell1;
                        }
                    }
                }
            }
            if(showSteps) this.visualize();
        }
        if(complexify) this.complexify(showSteps);
        return this
    }

    complexify(showSteps){
        for(let i=1; i<this.grid.length-1; i++){
            for(let j=1; j<this.grid.length-1; j++){
                if(this.grid[i][j] == -1 && this.getNeighbors(i,j).filter(x => x !== -1).length === 2){
                    if(this.genRandom(1,2) % 2 == 0){
                        this.grid[i][j] = this.emptyCell.values().next().value;
                        if(showSteps) this.visualize();
                    }
                }
            }
        }
    }


    getNeighbors(i,j){
        const neighbors = [];
        neighbors.push(this.grid[i-1][j]);
        neighbors.push(this.grid[i+1][j]);
        neighbors.push(this.grid[i][j-1]);
        neighbors.push(this.grid[i][j+1]);
        return neighbors;
    }

    visualize(){
        if (JSON.stringify(this.grid) !== JSON.stringify(this.visualization[this.visualization.length - 1]))
            this.visualization.push(JSON.parse(JSON.stringify(this.grid)));
    }

    mustBreakWall = () =>  this.emptyCell.size > 1;
}

module.exports = MazeBuilder;