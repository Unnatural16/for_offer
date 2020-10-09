/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    for(var i = 0; i < board.length;i++){
        for(var j = 0; j< board[i].length;j++){
            if(code(0,i,j)) return true;
        }
    }
    function code(index,y,x){
        if(index>=word.length){
            return true
        }
        if(x<0||y<0||y>=board.length||x>=board[0].length||board[y][x]!=word[index]) return false
        board[y][x] = null
        if (code(index+1,y,x+1)||code(index+1,y,x-1)||code(index+1,y+1,x)||code(index+1,y-1,x)) return true
        board[y][x] = word[index]
        return false
    }
    return false
};
console.log(exist([["a"]],"a"))