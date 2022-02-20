import * as PIXI from "pixi.js";
import {
    printEmpty,
    printWhite,
    printNum,
    printMine
} from './views'
import Grid from './grid'
var GRID= [];
var Container;
export const Game = (COLUMNS,ROWS,MINES,app)=>{

    GRID = Grid(COLUMNS, ROWS, MINES);

    let container = new PIXI.Container()
    container.name = "Container"
    container.x = (screen.width - (COLUMNS*25))/2
    container.y = 50
    app.stage.addChild(container)
    Container = container
    

    

    
}
export const Draw = () => {
    Container.removeChildren();

    GRID.map((rows, columnIndex) => {
        rows.map((row, rowIndex) => {
            if (row.visible === true) {
                if (row.value === "m") {
                    printMine(row, Container);
                }

                if (row.value > 0) {
                    printNum(row, Container);
                }

                if (row.value === 0) {
                    printWhite(row, Container);
                }
            } else {
                printEmpty(row, Container, handleClick);
            }
        });
    });
};
const handleClick = (row) => {
    if (row.value === "m") {
   

        GRID.map((rows, columnIndex) => {
            rows.map((row, rowIndex) => {
                GRID[row.coordinates[0]][row.coordinates[1]].visible = true;
            });
            Draw();
        });
    }

    if (row.value > 0) {
        GRID[row.coordinates[0]][row.coordinates[1]].visible = true;
        Draw();
    }

    if (row.value === 0) {
        GRID[row.coordinates[0]][row.coordinates[1]].visible = true;
        let g = checkAround(row, GRID);
        GRID = g;
        Draw();
    }
};
export const checkAround = (row, grid) => {
    let p = row.coordinates;

    // 8 checks
    //previous column
    if (p[0] === 0) {
    } else {
        //top row
        if (
            p[1] > 0 &&
            grid[p[0] - 1][p[1] - 1] &&
            grid[p[0] - 1][p[1] - 1].value === 0 &&
            grid[p[0] - 1][p[1] - 1].visible === false
        ) {
            grid[p[0] - 1][p[1] - 1].visible = true;
            let n = grid[p[0] - 1][p[1] - 1];
            checkAround(n, grid);
        }
        //middle row
        if (
            grid[p[0] - 1][p[1]] &&
            grid[p[0] - 1][p[1]].value === 0 &&
            grid[p[0] - 1][p[1]].visible === false
        ) {
            grid[p[0] - 1][p[1]].visible = true;
            let n = grid[p[0] - 1][p[1]];
            checkAround(n, grid);
        }
        //bottom row
        if (
            p[1] <= grid[p[0]].length &&
            grid[p[0] - 1][p[1] + 1] &&
            grid[p[0] - 1][p[1] + 1].value === 0 &&
            grid[p[0] - 1][p[1] + 1].visible === false
        ) {
            grid[p[0] - 1][p[1] + 1].visible = true;
            let n = grid[p[0] - 1][p[1] + 1];
            checkAround(n, grid);
        }
    }
    //same column
    // top row
    if (
        p[1] > 0 &&
        grid[p[0]][p[1] - 1] &&
        grid[p[0]][p[1] - 1].value === 0 &&
        grid[p[0]][p[1] - 1].visible === false
    ) {
        grid[p[0]][p[1] - 1].visible = true;
        let n = grid[p[0]][p[1] - 1];
        checkAround(n, grid);
    }
    //bottom row
    if (
        p[1] <= grid[p[0]].length &&
        grid[p[0]][p[1] + 1] &&
        grid[p[0]][p[1] + 1].value === 0 &&
        grid[p[0]][p[1] + 1].visible === false
    ) {
        grid[p[0]][p[1] + 1].visible = true;
        let n = grid[p[0]][p[1] + 1];
        checkAround(n, grid);
    }
    //next column
    if (grid[p[0] + 1] <= grid.length - 1 && grid[p[0] + 1]) {
        //top row
        if (
            p[1] > 0 &&
            grid[p[0] + 1][p[1] - 1] &&
            grid[p[0] + 1][p[1] - 1].value === 0 &&
            grid[p[0] + 1][p[1] - 1].visible === true
        ) {
            grid[p[0] + 1][p[1] - 1].visible = true;
            let n = grid[p[0] + 1][p[1] - 1];
            checkAround(n, grid);
        }
        //middle row
        if (
            grid[p[0] + 1][p[1]].value === 0 &&
            grid[p[0] + 1][p[1]] &&
            grid[p[0] + 1][p[1]].visible === false
        ) {
            grid[p[0] + 1][p[1]].visible = true;
            let n = grid[p[0] + 1][p[1]];
            checkAround(n, grid);
        }
        //bottom row
        if (
            p[1] <= grid[p[0]].length &&
            grid[p[0] + 1][p[1] + 1] &&
            grid[p[0] + 1][p[1] + 1].value === 0 &&
            grid[p[0] + 1][p[1] + 1].visible === false
        ) {
            grid[p[0] + 1][p[1] + 1].visible = true;
            let n = grid[p[0] + 1][p[1] + 1];
            checkAround(n, grid);
        }
    }
    return grid;
};


