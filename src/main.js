import * as PIXI from 'pixi.js'
import Grid from './scripts/grid'
import {printWhite} from './scripts/engine'

    let app = new PIXI.Application({ width: 501, height: 500 ,backgroundAlpha: 0.5 });
    

    const element = document.createElement('div');
    
    element.innerHTML = 'MineSweaper';
    
    document.body.appendChild(element)
    
    document.body.appendChild(app.view);


    const grid = Grid(20,20)
    console.log(grid)
  
    const handleClick = (e,row,p) =>{

        if (row==="m"){     
                const cell = new PIXI.Graphics();

                cell.lineStyle(1, 0x000000, 1);

                cell.beginFill(0x999999);
                cell.drawRect(p[0]*25+2, p[1]*25, 23, 23);
                cell.endFill();

                cell.moveTo(p[0]*25+2, p[1]*25)
                cell.lineStyle(1, 0x000000, 1);

                cell.beginFill(0xf90000, 1);
                cell.drawCircle(p[0]*25+13, p[1]*25+12, 5);
                cell.moveTo(p[0]*25+2, p[1]*25)
                cell.lineTo(p[0]*25+25, p[1]*25+25)
                cell.moveTo(p[0]*25+2, p[1]*25+25)
                cell.lineTo(p[0]*25+25, p[1]*25)
                cell.endFill();
        
                cell.interactive = false;
            
                app.stage.addChild(cell);

            }
        if (row>0){
            const cell = new PIXI.Graphics();
            cell.lineStyle(1, 0x000000, 1);
            cell.beginFill(0x999999);
            cell.drawRect(p[0]*25+2, p[1]*25, 23, 23);
            cell.endFill();
            cell.interactive = false;
            const label = new PIXI.Text(row,style);
            label.x = p[0]*25;
            label.y = p[1]*25;
            console.log(p)
            app.stage.addChild(cell);
            app.stage.addChild(label)
        }

        if(row===0){
            printWhite(p, app)
            
        }
        
    }

    const Draw=()=>{
        grid.map((rows,index)=>{
  
            for (let i=0;i<=19;i++){
               
                const cell = new PIXI.Graphics();
                cell.lineStyle(1, 0x000000, 1);
                cell.beginFill(0x999999);
                cell.drawRect(index*25+2, i*25, 23, 23);
                cell.endFill();
                cell.interactive = true;
                cell.on("pointerdown",(e)=>{
                    handleClick(e,rows[i],[index,i])
                
                })
                
                app.stage.addChild(cell);
            }


        })

    }
Draw()
        
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