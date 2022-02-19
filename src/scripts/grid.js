
function Grid( cols,rows){
    // find vertical and horizal neighbors of mines
    
      
    
          const  make2dArray=()=>{
                return new Array(rows).fill(0).map((row)=>{return new Array(cols).fill(0)})
            }
        
         const   fillGridWithMines = (grid , positions) => {
            positions.map(position=>{
                grid[position[0]][position[1]] = 'm'
            })
            return grid
            }
        
        
           const getMinesPositions = () => {
                let positions = new Array(50).fill(0)
                positions.map((pos,index)=>{
                    let positionCol = Math.floor(Math.random() * 20)
                    let positionRow = Math.floor(Math.random() * 20)
    
                    positions[index] = [positionCol,positionRow]
                })
           
                return positions
            }
    
    
    
            const findNeighbors2 = (board,mines) =>{
    
    
                 
                board.map((rows,columnIndex)=>{
                    rows.map((row,rowIndex)=>{
                        let bombs = 0;
    
    if(board[columnIndex][rowIndex]!=='m'){
    
            //previous row +1, 
            if(
                board[ columnIndex ][ rowIndex-1 ] !== undefined 
                && 
                board[ columnIndex ][ rowIndex-1 ] === 'm'
                ){   
                    bombs++
                }
                    
       
            //next row +1
            if(
                board[ columnIndex ][ rowIndex+1 ] !== undefined 
                && 
                board[ columnIndex ][ rowIndex+1 ] === 'm'
                ){
                    bombs++;
            }
       // previous column rows +1 
       if(board[ columnIndex-1 ] !== undefined ){
       
                //previous column, previous index
                if ( 
                    board[ columnIndex-1 ][ rowIndex-1 ] !== undefined 
                    &&
                    board[ columnIndex-1 ][ rowIndex-1 ] === 'm' 
                    ){
                        bombs++;
                }
                    //previou column, same index
                    if (
                        board[ columnIndex-1 ][ rowIndex ] !== undefined 
                        &&  
                        board[ columnIndex-1 ][ rowIndex ] === 'm'
                        ){
                                bombs++;
                    }
                    //previous column, next index
                    if (
                        board[ columnIndex-1 ][ rowIndex+1 ] !== undefined 
                        &&  
                        board[ columnIndex-1 ][ rowIndex+1 ]==='m'
                        ){                
                            bombs++;
                    }
       }
       
       
       // next column rows +1 
       
                if(board[ columnIndex+1 ] !== undefined ){
       
                //next column, previous index
                if (
                    board[ columnIndex+1 ][ rowIndex-1 ] !== undefined 
                    &&  
                    board[ columnIndex+1 ][ rowIndex-1 ] === 'm'
                    ){
                            bombs++;
                }
       
                    //next column, same index
                    if (
                        board[ columnIndex+1 ][ rowIndex ] !== undefined 
                        &&  
                        board[ columnIndex+1 ][ rowIndex ] === 'm'
                        ){
                                bombs++;
                    }
                    //next column, next index
                    if (
                        board[ columnIndex+1 ][ rowIndex+1 ] !== undefined 
                        &&  
                        board[ columnIndex+1 ][ rowIndex+1 ] === 'm'
                        ){
                                bombs++;
                    }
                }
                board[columnIndex][rowIndex] = bombs;
            }
         
                    })
                })      
            
    
    
                
    
    
         return board
     }
    
            let board = make2dArray()
            let MinesPositions = getMinesPositions()
            
            let FullBoard = fillGridWithMines(board,MinesPositions)
            let FullBoardWithIndicators = findNeighbors2(FullBoard,MinesPositions)
         
           
            return FullBoardWithIndicators
          
        }
        
        export default Grid;