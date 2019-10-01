class TicTacToe {
     constructor() {
        this.player = "x";
        this.gameFinished = false;                
        this.matrix = [[8, 8, 8], [8, 8, 8], [8, 8, 8]];
    }

    getCurrentPlayerSymbol() {
        return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == 8) {
            if (this.player == "x") {
                this.matrix[rowIndex][columnIndex] = "x";
                this.player = "o";
            } else {
                this.matrix[rowIndex][columnIndex] = "o";
                this.player = "x";
            }
        }
    }

    isFinished() {                
        if (this.getWinner() != null || this.isDraw()) {
            return true;
        } 
        return false;
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if (this.matrix[i].toString() == "x,x,x" || this.matrix[i].toString() == "o,o,o") {
                this.gameFinished = true;
            }
        }
        let str = this.matrix.toString();
        str = str.replace(/[,]/g, "");
        if ((str[0] + str[4] + str[8]) == "ooo" || (str[0] + str[4] + str[8]) == "xxx") {
            this.gameFinished = true;
        }
        if ((str[2] + str[4] + str[6]) == "ooo" || (str[2] + str[4] + str[6]) == "xxx") {
            this.gameFinished = true;
        }
        if ((str[0] + str[3] + str[6]) == "ooo" || (str[0] + str[3] + str[6]) == "xxx") {
            this.gameFinished = true;
        }
        if ((str[1] + str[4] + str[7]) == "ooo" || (str[1] + str[4] + str[7]) == "xxx") {
            this.gameFinished = true;
        }
        if ((str[2] + str[5] + str[8]) == "ooo" || (str[2] + str[5] + str[8]) == "xxx") {
            this.gameFinished = true;
        }

        if (this.gameFinished) {
            if (this.player == "x") {
                return "o";
            } else {
                return "x";
            }
        }
        return null;
    }

    noMoreTurns() {
        let allCell = this.matrix.toString();
        if (!allCell.includes(8)) {
            return true;
        }
        return false;
    }

    isDraw() {
        if (this.noMoreTurns() && this.getWinner() === null) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex] == 8) {
            return null;
        }
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
