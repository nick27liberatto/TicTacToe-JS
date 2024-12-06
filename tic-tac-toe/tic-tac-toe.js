const prompt = require("prompt-sync")();

//create map
rowOne = [0, 0, 0]
rowTwo = [0, 0, 0]
rowThree = [0, 0, 0]

//display the map
append = [" ", " ", " "]
append2 = [" ", " ", " "]
append3 = [" ", " ", " "]

//values
Empty = 0
X = 1
O = 2

//turn tracker
turn = "X"

//end game
xWin = false
oWin = false
tie = [false, false, false]

//initializing
instructions()
drawMap()

function instructions(){
    console.log("\n======== HOW TO PLAY ========\n")
    console.log("          [1][2][3]\n          [4][5][6]\n          [7][8][9]")
    console.log("\nSelect your positions based on the numpad above\n")
}


//get the coordinates for the symbol
function getPos(){
    input = prompt(`It's '${turn}' turn - Choose your position: `);
    console.log("")
    checkInt = input % 1
        if(input=="exit"){
            throw "Game ended";
        } else if(checkInt !== 0){
            console.warn("Please, insert a integer number.\n")
        }
        if(checkInt === 0){
            switch (parseInt(input)) {
                //row one
                case 1:
                    if(turn=="X"){
                        rowOne[0] = X
                        turn="O"
                    } else {
                        rowOne[0] = O
                        turn="X"
                    }
                    break;
                case 2:
                    if(turn=="X"){
                        rowOne[1] = X
                        turn="O"
                    } else {
                        rowOne[1] = O
                        turn="X"
                    }
                    break;
                case 3:
                    if(turn=="X"){
                        rowOne[2] = X
                        turn="O"
                    } else {
                        rowOne[2] = O
                        turn="X"
                    }
                    break;
                //row two
                case 4:
                    if(turn=="X"){
                        rowTwo[0] = X
                        turn="O"
                    } else {
                        rowTwo[0] = O
                        turn="X"
                    }
                    break;
                case 5:
                    if(turn=="X"){
                        rowTwo[1] = X
                        turn="O"
                    } else {
                        rowTwo[1] = O
                        turn="X"
                    }
                    break;
                case 6:
                    if(turn=="X"){
                        rowTwo[2] = X
                        turn="O"
                    } else {
                        rowTwo[2] = O
                        turn="X"
                    }
                    break;
                //row three
                case 7:
                    if(turn=="X"){
                        rowThree[0] = X
                        turn="O"
                    } else {
                        rowThree[0] = O
                        turn="X"
                    }
                    break;
                case 8:
                    if(turn=="X"){
                        rowThree[1] = X
                        turn="O"
                    } else {
                        rowThree[1] = O
                        turn="X"
                    }
                    break;
                case 9:
                    if(turn=="X"){
                        rowThree[2] = X
                        turn="O"
                    } else {
                        rowThree[2] = O
                        turn="X"
                    }
                    break;         
            }
        }
        input = 0
        checkPos()
    }

//check coordinates on the array to append the correct symbol
function checkPos() {
    //row one
    for(i=0;i<3;i++){
        switch (rowOne[i]) {
            case 0:
                append[i] = " "
                break;
            case 1:
                append[i] = "X"
                break;
            case 2:
                append[i] = "O"
                break;
        }
        //row two
        switch (rowTwo[i]) {
            case 0:
                append2[i] = " "
                break;
            case 1:
                append2[i] = "X"
                break;
            case 2:
                append2[i] = "O"
                break;
        }
        //row three
        switch (rowThree[i]) {
            case 0:
                append3[i] = " "
                break;
            case 1:
                append3[i] = "X"
                break;
            case 2:
                append3[i] = "O"
                break;
    }
}
drawMap()
}

//print the map
function drawMap(){
for(x=0;x<3;x++){
    process.stdout.write(append[x])
    if(x!=2){
        process.stdout.write("|")
    }
}
console.log("")
for(y=0;y<3;y++){
    process.stdout.write(append2[y])
    if(y!=2){
        process.stdout.write("|")
    }
}
console.log("")
for(z=0;z<3;z++){
    process.stdout.write(append3[z])
    if(z!=2){
        process.stdout.write("|")
    }
}
    console.log("")
    checkWinner()
}

function checkWinner() {
    console.log("")
    EmptyHorizontal = [rowOne.includes(Empty), rowTwo.includes(Empty), rowThree.includes(Empty)]
    xHorizontal = [rowOne.includes(X), rowTwo.includes(X), rowThree.includes(X)]
    oHorizontal = [rowOne.includes(O), rowTwo.includes(O), rowThree.includes(O)]
    
    for(r=0;r<3;r++){
        if((!oHorizontal[r])&&(!EmptyHorizontal[r])){
            console.log("X Won")
            xWin = true
        }
        if((!xHorizontal[r])&&(!EmptyHorizontal[r])){
            console.log("O Won")
            oWin = true
        }
        if((oHorizontal[r])&&(xHorizontal[r])&&(!EmptyHorizontal[r])){
            tie[0] = true
        }
    }
    // vertical win
    for(i=0;i<3;i++){
        //v = vertical
        vCheckCollumns = [rowOne[i], rowTwo[i], rowThree[i]]
    
        EmptyVertical = vCheckCollumns.includes(Empty)
        xVertical = vCheckCollumns.includes(X)
        oVertical = vCheckCollumns.includes(O)
    
        if((!oVertical)&&(!EmptyVertical)){
            console.log("X Won")
            xWin = true
        }
        if((!xVertical)&&(!EmptyVertical)){
            console.log("O Won")
            oWin = true
        }
        if((oVertical)&&(xVertical)&&(!EmptyVertical)){
            tie[1] = true
        }
    }
    
    //diagonal win
    right = -2
    center = 1
    left= 4
    
    for(j=0;j<2;j++){
        right += 2
        left -=2
        //d = diagonal
        dCheckCollumnsOne = [rowOne[right], rowTwo[center], rowThree[left]]
        dCheckCollumnsTwo = [rowOne[right], rowTwo[center], rowThree[left]]
        dCheckCollumnsThree =[rowOne[right], rowTwo[center], rowThree[left]]
    
        EmptyDiagonal = dCheckCollumnsOne.includes(Empty)
        xDiagonal = dCheckCollumnsTwo.includes(X)
        oDiagonal = dCheckCollumnsThree.includes(O)
    
        if((!oDiagonal)&&(!EmptyDiagonal)){
            console.log("X Won")
            xWin = true
        }
        if((!xDiagonal)&&(!EmptyDiagonal)){
            console.log("O Won")
            oWin = true
        }
        if((oDiagonal)&&(xDiagonal)&&(!EmptyDiagonal)){
            tie[2] = true
        }
    }
}

do {
    getPos()
    console.log("\nType 'exit' to end game\n")
} while ((!xWin)&&(!oWin)&&(tie.includes(false)))
    console.log("")
    drawMap()
