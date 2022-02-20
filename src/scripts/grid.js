const make2dArray = (rows,cols) => {
    return new Array(rows).fill(0).map((row) => {
        return new Array(cols).fill(0);
    });
};

const fillGridWithMines = (grid, positions) => {
    positions.map((position) => {
        grid[position[0]][position[1]] = "m";
    });
    return grid;
};

const setMinesPositions = (level) => {
    let positions = new Array(level).fill(0);
    positions.map((pos, index) => {
        let positionCol = Math.floor(Math.random() * 20);
        let positionRow = Math.floor(Math.random() * 20);

        positions[index] = [positionCol, positionRow];
    });

    return positions;
};

const findNeighbors2 = (board, mines) => {
    board.map((rows, columnIndex) => {
        rows.map((row, rowIndex) => {
            let bombs = 0;

            if (board[columnIndex][rowIndex] !== "m") {
                //previous row +1,
                if (
                    board[columnIndex][rowIndex - 1] !== undefined &&
                    board[columnIndex][rowIndex - 1] === "m"
                ) {
                    bombs++;
                }

                //next row +1
                if (
                    board[columnIndex][rowIndex + 1] !== undefined &&
                    board[columnIndex][rowIndex + 1] === "m"
                ) {
                    bombs++;
                }
                // previous column rows +1
                if (board[columnIndex - 1] !== undefined) {
                    //previous column, previous index
                    if (
                        board[columnIndex - 1][rowIndex - 1] !== undefined &&
                        board[columnIndex - 1][rowIndex - 1] === "m"
                    ) {
                        bombs++;
                    }
                    //previou column, same index
                    if (
                        board[columnIndex - 1][rowIndex] !== undefined &&
                        board[columnIndex - 1][rowIndex] === "m"
                    ) {
                        bombs++;
                    }
                    //previous column, next index
                    if (
                        board[columnIndex - 1][rowIndex + 1] !== undefined &&
                        board[columnIndex - 1][rowIndex + 1] === "m"
                    ) {
                        bombs++;
                    }
                }

                // next column rows +1

                if (board[columnIndex + 1] !== undefined) {
                    //next column, previous index
                    if (
                        board[columnIndex + 1][rowIndex - 1] !== undefined &&
                        board[columnIndex + 1][rowIndex - 1] === "m"
                    ) {
                        bombs++;
                    }

                    //next column, same index
                    if (
                        board[columnIndex + 1][rowIndex] !== undefined &&
                        board[columnIndex + 1][rowIndex] === "m"
                    ) {
                        bombs++;
                    }
                    //next column, next index
                    if (
                        board[columnIndex + 1][rowIndex + 1] !== undefined &&
                        board[columnIndex + 1][rowIndex + 1] === "m"
                    ) {
                        bombs++;
                    }
                }
                board[columnIndex][rowIndex] = bombs;
            }
        });
    });

    return board;
};

const buildGrid = (grid) =>{

    grid.map((rows,columnIndex)=>{

        rows.map((row,rowIndex)=>{

            let object = {
                "coordinates":[columnIndex,rowIndex],
                "visible":false,
                "value":row
            }
            grid[columnIndex][rowIndex] = object
        })
    })

    return grid;
}
function Grid(cols, rows, level) {
    let board = make2dArray(cols,rows);
    let MinesPositions = setMinesPositions(level);
    let FullBoard = fillGridWithMines(board, MinesPositions);
    let FullBoardWithIndicators = findNeighbors2(FullBoard, MinesPositions);
    let objectGrid = buildGrid(FullBoardWithIndicators)
    return objectGrid;
}

export default Grid;
