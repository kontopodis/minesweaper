import * as PIXI from "pixi.js";
import {
    printEmpty,
    printWhite,
    printNum,
    printMine,
    Score
} from './views'
import Grid from './grid'
var GRID= [];
var Container;
var SCORE_Container;
var SCORE_Value = 0 ;

export const Game = (COLUMNS,ROWS,MINES,score,app)=>{


    GRID = Grid(COLUMNS, ROWS, MINES);

    let container = new PIXI.Container()
    container.name = "Container"
    container.x = (screen.width - (COLUMNS*25))/2
    container.y = 50
    app.stage.addChild(container)
    Container = container
    SCORE_Container = score;  

    
}
export const Draw = () => {
    Container.removeChildren();

let mines = 0;
let hidden = 0;
    GRID.map((rows, columnIndex) => {
        rows.map((row, rowIndex) => {
            if(row.value === "m"){ mines++}

            if (row.visible === true) {


                if (row.value === "m") {
                    let mine = printMine(row);
                    Container.addChild(mine)
                }

                if (row.value > 0) {
                   let num = printNum(row);
                   Container.addChild(num)
                }

                if (row.value === 0) {
                    let white = printWhite(row);
                    Container.addChild(white)
                }
            } else {
                hidden++
                let empty = printEmpty(row, handleClick);
                Container.addChild(empty)
            }

        
        });
    });
    console.log(hidden,mines)

    if(hidden===mines){
        SCORE_Value = SCORE_Value + mines;
        const val = SCORE_Container.getChildByName("Value");
        val.text = "Won( "+JSON.stringify(SCORE_Value)+" )";
        SCORE_Container.renderCanvas
        console.log("WON")}
};

const handleClick = (e, row) => {


        if (row.value === "m") {
   

            GRID.map((rows, columnIndex) => {
                rows.map((row, rowIndex) => {
                    GRID[row.coordinates[0]][row.coordinates[1]].visible = true;
                });
                Draw();
            });
        }
    
        if (row.value > 0) {
            SCORE_Value++;
            GRID[row.coordinates[0]][row.coordinates[1]].visible = true;
            setScore(SCORE_Value);
            Draw();
        }
    
        if (row.value === 0) {
            SCORE_Value++;
            GRID[row.coordinates[0]][row.coordinates[1]].visible = true;
            let g = checkAround(row, GRID);
            GRID = g;
            setScore(SCORE_Value);
            Draw();
        }


};

export const setScore = (value)=>{
    SCORE_Value = value
    const val = SCORE_Container.getChildByName("Value");
    val.text = SCORE_Value
    SCORE_Container.renderCanvas
}
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
 
    if (p[0] + 1 <= grid.length - 1) {
        console.log("passed")
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


