import * as PIXI from 'pixi.js'

export const printEmpty = (row,app,handleClick) =>{

    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0x000000, 1);
    cell.beginFill(0x999999);
    cell.drawRect(row.coordinates[0]*25+2, row.coordinates[1]*25, 23, 23);
    cell.endFill();
    cell.interactive = true;
    cell.on("pointerdown",(e)=>{
        handleClick(row)
    
    })
    
   app.stage.addChild(cell);
}


export const printWhite = (row , app) =>{

    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0xffffff, 1);
    cell.beginFill(0xffffff);
    cell.drawRect(row.coordinates[0]*25+2, row.coordinates[1]*25, 23, 23);
    cell.endFill();
    cell.interactive = false;
    app.stage.addChild(cell);
}

export const printNum = (row, app) =>{
  
    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0x000000, 1);
    cell.beginFill(0x999999);
    cell.drawRect(row.coordinates[0]*25+2, row.coordinates[1]*25, 23, 23);
    cell.endFill();
    cell.interactive = false;
    const label = new PIXI.Text(row.value,style);
    label.x = row.coordinates[0]*25;
    label.y = row.coordinates[1]*25;
 
    app.stage.addChild(cell);
    app.stage.addChild(label)
}

export const printMine = (row,app) =>{
    const cell = new PIXI.Graphics();

                cell.lineStyle(1, 0x000000, 1);

                cell.beginFill(0x999999);
                cell.drawRect(row.coordinates[0]*25+2, row.coordinates[1]*25, 23, 23);
                cell.endFill();

                cell.moveTo(row.coordinates[0]*25+2, row.coordinates[1]*25)
                cell.lineStyle(1, 0x000000, 1);

                cell.beginFill(0xf90000, 1);
                cell.drawCircle(row.coordinates[0]*25+13, row.coordinates[1]*25+12, 5);
                cell.moveTo(row.coordinates[0]*25+2, row.coordinates[1]*25)
                cell.lineTo(row.coordinates[0]*25+25, row.coordinates[1]*25+25)
                cell.moveTo(row.coordinates[0]*25+2, row.coordinates[1]*25+25)
                cell.lineTo(row.coordinates[0]*25+25, row.coordinates[1]*25)
                cell.endFill();
        
                cell.interactive = false;
            
                app.stage.addChild(cell);
}
export const checkAround = (row , grid)=>{
    let p = row.coordinates
 
            // 8 checks
            //previous column
            if(p[0]===0){}else{
    
                //top row
                if(

                     p[1] > 0
                     &&
                     grid[p[0]-1][p[1]-1]
                     &&
                     grid[p[0]-1][p[1]-1].value === 0
                     && grid[p[0]-1][p[1]-1].visible ===false
                     ){
                     
                     grid[p[0]-1][p[1]-1].visible = true
                     let n = grid[p[0]-1][p[1]-1]
                checkAround(n,grid)
                 }
                 //middle row
                 if(               

                     grid[p[0]-1][p[1]]
                     && 
                     grid[p[0]-1][p[1]].value === 0
                     &&
                     grid[p[0]-1][p[1]].visible === false
                     ){
                     
                     grid[p[0]-1][p[1]].visible = true
                     let n = grid[p[0]-1][p[1]]
                     checkAround(n,grid)
                 }
                 //bottom row
                 if(

                     p[1] <= grid[p[0]].length
                     &&
                     grid[p[0]-1][p[1]+1]
                     &&
                     grid[p[0]-1][p[1]+1].value === 0
                     &&
                     grid[p[0]-1][p[1]+1].visible === false
                     ){
                     
                     grid[p[0]-1][p[1]+1].visible=true
                     let n = grid[p[0]-1][p[1]+1]
                     checkAround(n,grid)
                 }
            }
            //same column
                // top row
                if(
                    p[1] > 0
                    &&
                    grid[p[0]][p[1]-1]
                    &&
                    grid[p[0]][p[1]-1].value === 0
                    &&
                    grid[p[0]][p[1]-1].visible === false
                    ){
                    
                    grid[p[0]][p[1]-1].visible =true
                    let n = grid[p[0]][p[1]-1]
                    checkAround(n,grid)
                }
                //bottom row
                if(
                    p[1] <= grid[p[0]].length 
                    && 
                    grid[p[0]][p[1]+1]
                    &&
                    grid[p[0]][p[1]+1].value === 0
                    &&
                    grid[p[0]][p[1]+1].visible === false
                    ){
                    
                    grid[p[0]][p[1]+1].visible = true
                    let n = grid[p[0]][p[1]+1]
                    checkAround(n,grid)
                }
            //next column 
            if(grid[p[0]+1] <= grid.length-1 && grid[p[0]+1]){
    
                //top row
                if(
                    p[1] > 0
                    &&
                    grid[p[0]+1][p[1]-1]
                    &&
                    grid[p[0]+1][p[1]-1].value === 0
                    &&
                    grid[p[0]+1][p[1]-1].visible === true
                    ){
                    
                    grid[p[0]+1][p[1]-1].visible = true
                    let n = grid[p[0]+1][p[1]-1]
                    checkAround(n,grid)
                }
                //middle row
                if(
                    grid[p[0]+1][p[1]].value === 0
                    &&
                    grid[p[0]+1][p[1]]
                    &&
                    grid[p[0]+1][p[1]].visible === false
                    ){
                  
                    grid[p[0]+1][p[1]].visible = true
                    let n = grid[p[0]+1][p[1]]
                    checkAround(n,grid)
                }
                //bottom row        
                if(
                    p[1] <= grid[p[0]].length 
                    &&
                    grid[p[0]+1][p[1]+1]
                    &&
                    grid[p[0]+1][p[1]+1].value === 0
                    &&
                    grid[p[0]+1][p[1]+1].visible === false
                    ){
                    
                    grid[p[0]+1][p[1]+1].visible = true
                    let n = grid[p[0]+1][p[1]+1]
                    checkAround(n,grid)
                }
            }
            return grid;
            
        }

        const style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 16,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
            lineJoin: 'round',
        });