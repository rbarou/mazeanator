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
        let cpt = 1;
        this.result[arrival[0]][arrival[1]] = cpt++;
        let current = arrival;
        while(JSON.stringify(current) !== JSON.stringify(departure)){
            current = this.nextStep(current, cpt, grid);
            cpt++;
        }
        return this.result;

    }

    nextStep(current, cpt, grid){
        let neighbors = this.getNeighbors(current, grid);
        let next = neighbors.find(n => this.result[n[0]][n[1]] == cpt-1);
        this.result[next[0]][next[1]] = cpt;
        return next;
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
