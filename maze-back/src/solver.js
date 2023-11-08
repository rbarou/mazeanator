const Queue = require('./queue.js');

class Solver{

    constructor(grid){
        this.result = grid.map(row => row.map(cell => cell == -1 ? -1 : 0));
    }

    solve(grid){

        let departure, arrival;

        for(let i=0; i<grid.length; i++){
            if(grid[i][0] != -1){
                departure = [i,0];
                break;
            }
        }
        
        for(let i=0; i<grid.length; i++){
            if(grid[i][grid.length-1] != -1){
                arrival = [i,grid.length-1];
                break;
            }
        }

        this.bfs(grid, arrival);
        
        let current = departure;
        const path = [current];
        while(current[0] !== arrival[0] || current[1] !== arrival[1]){
            let neighbors = this.getNeighbors(current, grid);
            current = this.minNeighbor(neighbors);
            path.push(current);
        }
        
        return path;
    }

    minNeighbor(neighborsIndexes){

        let [minRow, minCol] = neighborsIndexes[0];
        let min = this.result[minRow][minCol];

        for(const [row, col] of neighborsIndexes){
            const value = this.result[row][col];
            if(value < min){
                min = value;
                [minRow, minCol] = [row, col];
            }
        }
        return [minRow, minCol];
    }
    
    bfs(grid, node){
        const f = new Queue();
        f.enqueue(node);
        this.result[node[0]][node[1]] = 1;
        while(!f.isEmpty()){
            const current = f.dequeue();
            for(const neighbor of this.getNeighbors(current, grid)){
                if(this.result[neighbor[0]][neighbor[1]] == 0){
                    this.result[neighbor[0]][neighbor[1]] = this.result[current[0]][current[1]] + 1;
                    f.enqueue(neighbor);
                }
            }
        }
    }

    getNeighbors([i, j], grid){
        let neighbors = [];
        if(i > 0 && grid[i-1][j] != -1) neighbors.push([i-1, j]);
        if(j > 0 && grid[i][j-1] != -1) neighbors.push([i, j-1]);
        if(i < grid.length-1 && grid[i+1][j] != -1) neighbors.push([i+1, j]);
        if(j < grid.length-1 && grid[i][j+1] != -1) neighbors.push([i, j+1]);
        return neighbors;
    }
}

module.exports = Solver;