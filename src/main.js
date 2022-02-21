import * as PIXI from "pixi.js";
import Grid from "./scripts/grid";
import {
Game,
Draw,
setScore
} from "./scripts/engine";

import {Button, Score} from './scripts/views'

let screen = window.screen;




let app = new PIXI.Application({
    width: screen.width,
    height: screen.height,
    backgroundAlpha: 0.5,
    legacy: true,
    forceCanvas:true
});

document.body.appendChild(app.view);
let Menu = new PIXI.Container()

app.stage.addChild(Menu)

const button5 = Button("5",[0,5])
button5.interactive = true;
button5.on("pointerdown",()=>{
    start5()
})
Menu.addChild(button5)

const button10 = Button("10",[button5.width,5])
button10.interactive = true;
button10.on("pointerdown",()=>{
    start10()
})
Menu.addChild(button10)

const button20 = Button("20",[(button10.width+button5.width),5])
button20.interactive = true;
button20.on("pointerdown",()=>{
    start20()
})
Menu.addChild(button20)

const score = Score("0",[(button10.width+button5.width+button10.width),5])
score.interactive = false;

Menu.addChild(score)
Menu.x = (screen.width-Menu.width)/2



const start5 = ()=>{
    const container = app.stage.getChildByName("Container")
    console.log(container)
    app.stage.removeChild(container)
   
  
    let COLUMNS = 5;
    let ROWS = 5;
    let MINES = 7;
    
    Game(COLUMNS,ROWS,MINES,score,app)
    setScore(0)
    Draw();
}

const start10 = ()=>{
    const container = app.stage.getChildByName("Container")
    console.log(container)
    app.stage.removeChild(container)
  
    let COLUMNS = 10;
    let ROWS = 10;
    let MINES = 18;
    
    Game(COLUMNS,ROWS,MINES,score,app)
    setScore(0)
    Draw();
}

const start20 = ()=>{
    const container = app.stage.getChildByName("Container")
    console.log(container)
    app.stage.removeChild(container)
   
    let COLUMNS = 20;
    let ROWS = 20;
    let MINES = 50;
    
    Game(COLUMNS,ROWS,MINES,score,app)
    setScore(0)
    Draw();
}


