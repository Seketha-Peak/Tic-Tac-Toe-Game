var board = [["", "", ""], ["", "", ""], ["", "", ""]];
var gameOver = true;

function updateBoard() {
    for (var i = 0; i < 9; i++) {
        //console.log(Math.floor(i / 3));
        //console.log(i % 3);
        //console.log(document.getElementById(i).innerText);
        board[Math.floor(i / 3)][i % 3] = document.getElementById(i).innerText;
        //console.log(board[Math.floor(i / 3), i % 3]);
    }
    console.log(board);
}

function clearComment() {
    writeComment("");
}
function writeComment(theComent) {
    document.getElementById("comment").innerText = theComent;
}

var checkResultsResults;
function checkResults(theRow, theColumn, first) {
    console.log(first);
    if (first) {
        //             X  O  b  cb
        checkResultsResults = [0, 0, 0, 0];
        console.log(checkResultsResults);
    }
    if (board[theRow][theColumn] == "X") {
        checkResultsResults[0]++;
    } else if (board[theRow][theColumn] == "O") {
        checkResultsResults[1]++;
    } else {
        checkResultsResults[2]++;
        checkResultsResults[3] = theRow * 3 + theColumn;
    }
    return checkResultsResults;
}

function checkColumn(theColumn) {
    let results;
    for (let theRow = 0, first = true; theRow < 3; theRow++ , first = false) {
        results = checkResults(theRow, theColumn, first)
    }
    return results;
}

function checkRow(theRow) {
    let results;
    for (let theColumn = 0, first = true; theColumn < 3; theColumn++ , first = false) {
        results = checkResults(theRow, theColumn, first)
    }
    return results;
}

function checkDiag1() {
    let results;
    for (var i = 0, first = true; i < 3; i++ , first = false) {
        let cellNum = i * 4;
        console.log(cellNum);
        let theRow = Math.floor(cellNum / 3);
        console.log(theRow);
        let theColumn = cellNum % 3;
        console.log(theColumn);
        results = checkResults(theRow, theColumn, first)
    }
    return results;
}

function checkDiag2() {
    let results;
    for (var i = 1, first = true; i < 4; i++ , first = false) {
        let cellNum = i * 2;
        console.log(cellNum);
        let theRow = Math.floor(cellNum / 3);
        console.log(theRow);
        let theColumn = cellNum % 3;
        console.log(theColumn);
        results = checkResults(theRow, theColumn, first)
    }
    return results;
}

function checkWin() {
    //check win across columns
    for (let i = 0; i < 3; i++) {
        let results = checkColumn(i);
        console.log("results")
        console.log(results);
        if (results[0] == 3) {
            gameOver = true;
            writeComment("X has won!");
            return true;
        }
    }
    //check win across rows
    for (let i = 0; i < 3; i++) {
        let results = checkRow(i);
        console.log("results")
        console.log(results);
        if (results[0] == 3) {
            gameOver = true;
            writeComment("X has won!");
            return true;
        }
    }
    let results = checkDiag1();
    console.log("results")
    console.log(results);
    if (results[0] == 3) {
        gameOver = true;
        writeComment("X has won!");
        return true;
    }

    results = checkDiag2();
    console.log("results")
    console.log(results);
    if (results[0] == 3) {
        gameOver = true;
        writeComment("X has won!");
        return true;
    }
    return false;
}
function checkifOcanWin() {
    //check win across columns
    for (let i = 0; i < 3; i++) {
        let results = checkColumn(i);
        console.log("O can win");
        console.log("results")
        console.log(results);
        if (results[1] == 2 && results[2] == 1) {
            document.getElementById(results[3]).innerText = "O"
            gameOver = true;
            writeComment("Game Over!");
            return true;
        }
    }
    //check win across rows
    for (let i = 0; i < 3; i++) {
        let results = checkRow(i);
        console.log("results")
        console.log(results);
        if (results[1] == 2 && results[2] == 1) {
            document.getElementById(results[3]).innerText = "O"
            gameOver = true;
            writeComment("O wow O Won!");
            return true;
        }
    }
    let results = checkDiag1();
    console.log("results")
    console.log(results);
    if (results[1] == 2 && results[2] == 1) {
        document.getElementById(results[3]).innerText = "O"
        gameOver = true;
        writeComment("O has done it again!");
        return true;
    }

    results = checkDiag2();
    console.log("results")
    console.log(results);
    if (results[1] == 2 && results[2] == 1) {
        document.getElementById(results[3]).innerText = "O"
        gameOver = true;
        writeComment("It's O Witches!");
        return true;
    }
    return false;
}

function checkifOcanBlock() {
    //check win across columns
    for (let i = 0; i < 3; i++) {
        let results = checkColumn(i);
        console.log("O can block");
        console.log("results")
        console.log(results);
        if (results[0] == 2 && results[2] == 1) {
            document.getElementById(results[3]).innerText = "O"
           
            return true;
        }
    }
    //check win across rows
    for (let i = 0; i < 3; i++) {
        let results = checkRow(i);
        console.log("results")
        console.log(results);
        if (results[0] == 2 && results[2] == 1) {
            document.getElementById(results[3]).innerText = "O"
           
            return true;
        }
    }
    let results = checkDiag1();
    console.log("results")
    console.log(results);
    if (results[0] == 2 && results[2] == 1) {
        document.getElementById(results[3]).innerText = "O"
       
        return true;
    }

    results = checkDiag2();
    console.log("results")
    console.log(results);
    if (results[0] == 2 && results[2] == 1) {
        document.getElementById(results[3]).innerText = "O"
       
        return true;
    }
    return false;
}
function findSetupMove() {
    //check win across columns
    for (let i = 0; i < 3; i++) {
        let results = checkColumn(i);
        console.log("findSetupMove");
        console.log("results")
        console.log(results);
        if (results[1] == 2 && results[2] == 2) {
            document.getElementById(results[3]).innerText = "O"
           
            return true;
        }
    }
    //check win across rows
    for (let i = 0; i < 3; i++) {
        let results = checkRow(i);
        console.log("results")
        console.log(results);
        if (results[1] == 2 && results[2] == 2) {
            document.getElementById(results[3]).innerText = "O"
           
            return true;
        }
    }
   
    return false;
}
function oMove() {
    updateBoard();
    if (checkWin()) {
        return;
    }
    // if O can win!
    if (checkifOcanWin()) {
        return;
    }
    //if O cab Block
    if (checkifOcanBlock()) {
        return;
    }
    if (board[1][1] == ""){
        document.getElementById(4).innerText = "O";
        return;
    }
    if(findSetupMove()){
       
        return;
    }
    //play a opposite corner
    if (board[0][0]== "X" && board [2][2]== ""){
        document.getElementById(8).innerText = "O";
        return;
    }
    if (board[2][0]== "X" && board [0][2]== ""){
        document.getElementById(2).innerText = "O";
        return;
    }
    if (board[2][2]== "X" && board [0][0]== ""){
        document.getElementById(0).innerText = "O";
        return;
    }
    if (board[0][2]== "X" && board [2][0]== ""){
        document.getElementById(6).innerText = "O";
        return;
    }
   
   
    //Place O in the first open square
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (board[i][j] == "") {
                document.getElementById(i * 3 + j).innerText = "O";
                return;
            }
        }
    }
    writeComment("TIE GAME SNITCHES");
    gameOver == true;

}

function clicked(e) {
    e.preventDefault();
    //console.log(e);
    var id = e.target.id;
    if (id == null || id == "") {
        return;
    } else if (id == "ng") {
        clearComment();
        for (var i = 0; i <= 8; i++) {
            document.getElementById(i).innerText = "";
        }
        gameOver = false;
    } else if (id >= 0 && id <= 8) {
        if (gameOver) {
            return;
        }
        let cell = document.getElementById(id);
        clearComment();
        if (cell.innerText == "") {
            cell.innerText = "X"
            oMove();
        } else {
            writeComment("Please pick a empty cell");
        }
    }
}
