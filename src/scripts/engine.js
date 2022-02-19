import * as PIXI from 'pixi.js'
export const printWhite = (p , app) =>{

    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0xffffff, 1);
    cell.beginFill(0xffffff);
    cell.drawRect(p[0]*25+2, p[1]*25, 23, 23);
    cell.endFill();
    cell.interactive = false;
    app.stage.addChild(cell);
}


const checkAround = (p , app)=>{
    console.log(p)
            // 8 checks
            //previous column
            if(p[0]===0){}else{
    
                //top row
                if(
                    typeof grid[p[0]-1] !== undefined 
                     &&
                     typeof grid[p[0]-1][p[1]-1] !==undefined 
                     &&
                     grid[p[0]-1][p[1]-1] === 0
                     ){
                     let n = [p[0]-1,p[1]-1]
                     printWhite(n)
                     checkAround(n,app)
                 }
                 //middle row
                 if(               
                     typeof grid[p[0]-1] !== undefined 
                     && 
                     typeof grid[p[0]-1][p[1]] !== undefined 
                     && 
                     grid[p[0]-1][p[1]] === 0
                     ){
                     let n = [p[0]-1,p[1]]
                     printWhite(n)
                     checkAround(n)
                 }
                 //bottom row
                 if(
                     typeof grid[p[0]-1] !== undefined 
                     &&
                     typeof grid[p[0]-1][p[1]+1] !== undefined 
                     &&
                     grid[p[0]-1][p[1]+1] === 0
                     ){
                     let n = [p[0]-1,p[1]+1]
                     printWhite(n)
                     checkAround(n)
                 }
            }
            //same column
                // top row
                if(
                    typeof grid[p[0]][p[1]-1] !== undefined 
                    &&
                    grid[p[0]][p[1]-1] === 0
                    ){
                    let n = [p[0],p[1]-1]
                    printWhite(n)
                    checkAround(n)
                }
                //bottom row
                if(
                    typeof grid[p[0]][p[1]+1] !== undefined 
                    && 
                    grid[p[0]][p[1]+1] === 0
                    ){
                    let n = [p[0],p[1]+1]
                    printWhite(n)
                    checkAround(n)
                }
            //next column 
            if(grid[p[0]+1] > grid.length){}else{
    
                //top row
                if(
                    typeof grid[p[0]+1] !== undefined 
                    &&
                    typeof grid[p[0]+1][p[1]-1] !== undefined 
                    &&
                    grid[p[0]+1][p[1]-1] === 0
                    ){
                    let n = [p[0]+1,p[1]-1]
                    printWhite(n)
                    checkAround(n)
                }
                //middle row
                if(
                    typeof grid[p[0]+1] !== undefined 
                    &&
                    typeof grid[p[0]+1][p[1]] !== undefined 
                    &&
                    grid[p[0]+1][p[1]] === 0
                    ){
                    let n = [p[0]+1,p[1]]
                    printWhite(n)
                    checkAround(n)
                }
                //bottom row        
                if(
                    typeof grid[p[0]+1] !== undefined 
                    &&
                    typeof grid[p[0]+1][p[1]+1] !== undefined 
                    &&
                    grid[p[0]+1][p[1]+1] === 0
                    ){
                    let n = [p[0]+1,p[1]+1]
                    printWhite(n)
                    checkAround(n)
                }
            }
        }