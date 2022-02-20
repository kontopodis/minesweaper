import * as PIXI from 'pixi.js'
import Grid from './scripts/grid'
import {
    printWhite,
    printNum,
    checkAround,
    printMine,
    printEmpty
} from './scripts/engine'

let dimensions = window.screen
console.log(dimensions)
    let app = new PIXI.Application({ width: 501, height: 500 ,backgroundAlpha: 0.5 });
    

    const element = document.createElement('div');
    
    element.innerHTML = 'MineSweaper';
    
    document.body.appendChild(element)
    
    document.body.appendChild(app.view);


    var grid = Grid(20,20,50)
 



    const handleClick = (row) =>{
console.log(row)
        if (row.value==="m"){     
                grid.map((rows,columnIndex)=>{
                    rows.map((row,rowIndex)=>{
                        grid[row.coordinates[0]][row.coordinates[1]].visible = true
                    })
                    Draw()
                })
    
        }
    
        if (row.value>0){
            grid[row.coordinates[0]][row.coordinates[1]].visible = true
            Draw()
        }
    
        if(row.value===0){
   
            grid[row.coordinates[0]][row.coordinates[1]].visible = true
            let g = checkAround(row, grid)
            grid = g
            Draw()
        }
        
    }


    const Draw=()=>{
        app.stage.removeChildren()
        grid.map((rows,columnIndex)=>{

            rows.map((row,rowIndex)=>{

if(row.visible === true){

    if (row.value==="m"){
        printMine(row,app)
        }

if (row.value>0){
printNum(row,app)
}

if(row.value===0){
    printWhite(row, app)

  
}
}else{
    printEmpty(row,app,handleClick)
}

   
            })
  


        })

    }
Draw()
        
