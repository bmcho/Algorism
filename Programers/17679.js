//https://programmers.co.kr/learn/courses/30/lessons/17679
// 프렌즈 4블록

const m = 6;
const n = 6;
// const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];
const board = ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"];

function solution(m, n, board) {
    var answer = 0;

    const _board = board.map(v => v.split(''));
    while(1) {
        const remove = [];
        for(let r = 0; r < m-1; r++){
            for(let c = 0; c < n-1; c++){
                if(_board[r][c] === 0) continue;
                
                let block = _board[r][c];
                if(block === _board[r+1][c] && block === _board[r][c+1] && block=== _board[r+1][c+1]){
                    remove.push([r,c]);
                    remove.push([r+1,c]);
                    remove.push([r,c+1]);
                    remove.push([r+1,c+1]);
                }
            }
        }

        if(remove.length === 0) break;

        for(let [r,c] of remove) {
            _board[r][c] = 0;
        }

        for(let c = 0; c < n; c++) {
            for(let r = m-1; r > -1; r--) {
                if(_board[r][c] === 0) {
                    let run = 1;
                    while(r-run > -1) {
                        if(_board[r-run][c] !== 0)
                        {
                            _board[r][c] = _board[r-run][c];
                            _board[r-run][c] = 0;
                            break;
                        }
                        run++;
                    }
                }
            }
        }
    }

    answer = _board.reduce((a,c) => {
        c.forEach(v => {
            if(v === 0) a++;
        });
        return a;
    },0);
    return answer;
}

solution(m, n, board);