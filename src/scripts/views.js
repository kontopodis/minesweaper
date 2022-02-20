import * as PIXI from 'pixi.js'
export const Button = (text="label",p = [0,0],s=[100,40]) =>{
    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0x000000, 1);
    cell.beginFill(0x999999);
    cell.drawRect(p[0],p[1],s[0],s[1]);
    cell.endFill();
    cell.interactive = true;

    const label = new PIXI.Text(text);

    label.x = p[0]+(s[0]-label.width)/2;
    label.y = p[1]+(s[1]-label.height)/2;

    console.log(label.x,label.y)
    cell.addChild(label)
    return cell

}


export const printEmpty = (row, container, handleClick) => {
    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0x000000, 1);
    cell.beginFill(0x999999);
    cell.drawRect(row.coordinates[0] * 25 + 2, row.coordinates[1] * 25, 23, 23);
    cell.endFill();
    cell.interactive = true;
    cell.on("pointerdown", (e) => {
        handleClick(row);
    });

    container.addChild(cell);
};

export const printWhite = (row, container) => {
    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0xffffff, 1);
    cell.beginFill(0xffffff);
    cell.drawRect(row.coordinates[0] * 25 + 2, row.coordinates[1] * 25, 23, 23);
    cell.endFill();
    cell.interactive = false;
    container.addChild(cell);
};

export const printNum = (row, container) => {
    const cell = new PIXI.Graphics();
    cell.lineStyle(1, 0x000000, 1);
    cell.beginFill(0x999999);
    cell.drawRect(row.coordinates[0] * 25 + 2, row.coordinates[1] * 25, 23, 23);
    cell.endFill();
    cell.interactive = false;
    const label = new PIXI.Text(row.value, style);
    label.x = row.coordinates[0] * 25;
    label.y = row.coordinates[1] * 25;

    container.addChild(cell);
    container.addChild(label);
};

export const printMine = (row, container) => {
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

    container.addChild(cell);
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