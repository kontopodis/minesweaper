import * as PIXI from 'pixi.js'

export const printFlag = (row, handleClick) =>{
    console.log("print flag")
    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0x000000, 1);
    cell.beginFill(0x999999);
    cell.drawRect(row.coordinates[0] * 25 + 2, row.coordinates[1] * 25, 23, 23);
    cell.moveTo(row.coordinates[0] * 25 + 13, row.coordinates[1] * 25)
    cell.lineTo(row.coordinates[0] * 25 + 13, row.coordinates[1] * 25+25)
    cell.endFill();
    cell.interactive = true;

    cell.on("rightclick", (e) => {
        removeFlag(row,handleClick)
    });

    return cell;
}

export const Score = (value,p = [0,0],s=[150,40])=>{
    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0x999999, 1);
    cell.beginFill(0x000000);
    cell.drawRect(p[0],p[1],s[0],s[1]);
    cell.endFill();
    cell.interactive = true;

    const label = new PIXI.Text(value,style);
    label.name="Value"

    label.x = p[0]+(s[0]-label.width)/2;
    label.y = p[1]+(s[1]-label.height)/2;

    console.log(label.x,label.y)
    cell.addChild(label)
    
    return cell
}
export const Button = (text="label",p = [0,0],s=[40,40]) =>{
    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0x000000, 1);
    cell.beginFill(0x999999);
    cell.drawRect(p[0],p[1],s[0],s[1]);
    cell.endFill();
    cell.interactive = true;

    const label = new PIXI.Text(text,style);

    label.x = p[0]+(s[0]-label.width)/2;
    label.y = p[1]+(s[1]-label.height)/2;

    console.log(label.x,label.y)
    cell.addChild(label)
    return cell

}


export const printEmpty = (row, handleClick) => {
    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0x000000, 1);
    cell.beginFill(0x999999);
    cell.drawRect(row.coordinates[0] * 25 + 2, row.coordinates[1] * 25, 23, 23);
    cell.endFill();
    cell.interactive = true;
    cell.on("pointerdown", (e) => {
    
        handleClick(e, row);
        
    });
    

    return cell;
};

export const printWhite = (row) => {
    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0xffffff, 1);
    cell.beginFill(0xffffff);
    cell.drawRect(row.coordinates[0] * 25 + 2, row.coordinates[1] * 25, 23, 23);
    cell.endFill();
    cell.interactive = false;
    return cell;
};

export const printNum = (row) => {
    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0x000000, 1);
    cell.beginFill(0x999999);
    cell.drawRect(row.coordinates[0] * 25 + 2, row.coordinates[1] * 25, 23, 23);
    cell.endFill();
    cell.interactive = false;
    const label = new PIXI.Text(row.value, style);
    label.x = row.coordinates[0] * 25;
    label.y = row.coordinates[1] * 25;
    cell.addChild(label)
    return cell;
};

export const printMine = (row) => {
    const cell = new PIXI.Graphics();

    cell.lineStyle(1, 0x000000, 1);

    cell.beginFill(0x999999);
    cell.drawRect(row.coordinates[0] * 25 + 2, row.coordinates[1] * 25, 23, 23);
    cell.endFill();

    cell.moveTo(row.coordinates[0] * 25 + 2, row.coordinates[1] * 25);
    cell.lineStyle(1, 0x000000, 1);

    cell.beginFill(0xf90000, 1);
    cell.drawCircle(
        row.coordinates[0] * 25 + 13,
        row.coordinates[1] * 25 + 12,
        5
    );
    cell.moveTo(row.coordinates[0] * 25 + 2, row.coordinates[1] * 25);
    cell.lineTo(row.coordinates[0] * 25 + 25, row.coordinates[1] * 25 + 25);
    cell.moveTo(row.coordinates[0] * 25 + 2, row.coordinates[1] * 25 + 25);
    cell.lineTo(row.coordinates[0] * 25 + 25, row.coordinates[1] * 25);
    cell.endFill();

    cell.interactive = false;

    return cell;
};

export const style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 16,
    fontStyle: "italic",
    fontWeight: "bold",
    fill: ["#ffffff", "#00ff99"], // gradient
    stroke: "#4a1850",
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: "round",
});