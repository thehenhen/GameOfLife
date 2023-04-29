let board = [];
let boardNext = [];
let xSize=0;
let ySize=0;
let moving=true;
function setup() {
  createCanvas(1000, 600);
  frameRate(10);
  landingInitialize();
}

function draw() {
  background(220);
  landingUpdate();
  landingDisplay();
}
function landingDisplay(){
    background(0);
    rectMode(CENTER);
    fill(255);
    stroke(100,10,50);
    for(let i=0;i<xSize;i++){
        for(let j=0;j<ySize;j++){
            if(board[i][j]<1){
                fill(0);
            }else{
                fill(100);
            }
            rect(i*20+10,j*20+10,20,20);
        }
    }
}

function landingUpdate(){
    let count=0;
    
    //arrayCopy(board,boardNext,board.length);

    for(let i=0;i<xSize;i++){
        for(let j=0;j<ySize;j++){
            boardNext[i][j]=board[i][j];
        }
    }


    for(let i=1;i<xSize-1;i++){
        for(let j=1;j<ySize-1;j++){
            count=0;
            count+=int(board[i-1][j-1]);
            count+=int(board[i-1][j]);
            count+=int(board[i-1][j+1]);
            count+=int(board[i][j-1]);
            count+=int(board[i][j+1]);
            count+=int(board[i+1][j-1]);
            count+=int(board[i+1][j]);
            count+=int(board[i+1][j+1]);
            if(board[i][j]==1){
                if(count>=4 || count<=1){
                    boardNext[i][j]=0;
                }else{
                    boardNext[i][j]=1;
                }
            }else if(board[i][j]==0){
                if(count==3){
                    boardNext[i][j]=1;
                }else{
                    boardNext[i][j]=0;
                }
            }
        }
    }
    //arrayCopy(boardNext,board,board.length);
    for(let i=0;i<xSize;i++){
        for(let j=0;j<ySize;j++){
            board[i][j]=boardNext[i][j];
        }
    }
}

function landingInitialize(){
    xSize=(width-(width%20))/20;
    ySize=(height-(height%20))/20+1;
    for(let i=0;i<xSize;i++){
        boardNext[i]=[];
    }
    for(let i=0;i<xSize;i++){
        boardNext[i]=[];
        for(let j=0;j<ySize;j++){
            boardNext[i][j]=0;
        }
    }



    for(let i=0;i<xSize;i++){
        board[i]=[];
    }
    for(let i=0;i<xSize;i++){
        for(let j=0;j<ySize;j++){
            board[i][j]=0;
        }
    }

    
    
    for(let i=1;i<xSize-1;i++){
        for(let j=1;j<ySize-1;j++){
            if(floor(random(0,15))>1){
                board[i][j]=0;
            }else{
                board[i][j]=1;
            }
        }
    }
    xSize=(width-(width%20))/20;
    ySize=(height-(height%20))/20+1;
}