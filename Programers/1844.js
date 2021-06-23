// https://programmers.co.kr/learn/courses/30/lessons/1844
//https://zzemal.tistory.com/72
// 게임 맵 최단 거리

const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
//const map = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]];



function solution(maps) {
    var answer = 0;
    let r = maps.length;
    let c = maps[0].length;
    let move = new Array(r);
    for(let i = 0; i < r; i++){
        move[i] = new Array(c);
    }

    const moveCharacter = (row, col, cnt) => {
        //유효성 체크
        //row, col이 0보다 작거나 벽일경우
        //row, col 이 4보다 큰경우
        //또는 이미 들린 곳이거나
        // console.log("row : ",row, " col : ", col);
        if(row < 0 || col < 0 || row > r-1 || col > c-1) {
            return;
        }
        
        //벽이기 때문에 더이상 진행할 수 없음
        if(maps[row][col] === 0)  {
            return;
        }

        if(!move[row][col]) move[row][col] = cnt;
        else { 
            // console.log(move[row][col]);
            return;
        }

        //동서남북 4방향
        //row+1, col
        //row, col+1
        //row-1, col
        //row, col-1
        moveCharacter(row+1,col, cnt+1);
        moveCharacter(row,col+1, cnt+1);
        moveCharacter(row-1,col, cnt+1);
        moveCharacter(row,col-1, cnt+1);
    }

    moveCharacter(0,0,1);

    return !move[r-1][c-1] ? -1 : move[r-1][c-1];
}

solution(maps);