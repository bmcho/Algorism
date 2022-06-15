//https://programmers.co.kr/learn/courses/30/lessons/81302
//거리두기

const places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];
// const places = [["OOPOO", "OPOOO", "OOOOO", "OOOOO", "OOOOO"]] ;

// function solution(places) {
//     var answer = [];

//     const places_split = places.map(v => v.map(p => p.split('')));

//     console.log(places_split);
//     places_split.forEach(p => {
//         const pPos = [];

//         p.forEach((r,ridx) => {
//             r.forEach((c,cidx) =>{
//                 if(c === 'P') pPos.push([ridx,cidx]);
//             });
//         });
//         // console.log(pPos);

//         if(pPos.length === 0) {
//             answer.push(1);
//             return;
//         }
        
//         while(pPos.length > 1) {
//             let pos_1 = pPos.shift();
//             for(let i = 0; i < pPos.length-1; i++) {
//                 let pos_2 = pPos[i];
//                 //멘헤튼 거리 측정
//                 //두 테이블 T1, T2가 행렬 (r1, c1), (r2, c2)에 각각 위치하고 있다면, 
//                 //T1, T2 사이의 맨해튼 거리는 |r1 - r2| + |c1 - c2| 입니다.
//                 // console.log(pPos[i][0],pPos[i+1][0],pPos[i][1],pPos[i+1][1]);
//                 // console.log(Math.abs(pPos[i][0] - pPos[i+1][0]) + Math.abs(pPos[i][1] - pPos[i+1][1]));
//                 if( Math.abs(pos_1[0] - pos_2[0]) + Math.abs(pos_1[1] - pos_2[1]) < 3) {
//                     //두 응시자사이의 파티션이 있느냐
//                     //같은 row일때 
//                     if(pos_1[0] === pos_2[0] && 
//                        p[pos_1[0]][pos_2[1]-1] !== 'X') {
//                             answer.push(0);
//                             return;
//                     } 
//                     //같은 col일때
//                     else if(pos_1[1] === pos_2[1] &&
//                             p[pos_2[0] - 1][pos_1[1]] !== 'X') {
//                             answer.push(0);
//                             return;
//                     }
//                     //대각선일때
//                     else if((pos_1[1] !== pos_2[1] && pos_1[0] !== pos_2[0]) &&
//                            (p[pos_1[0]][pos_2[1]] !== 'X' || p[pos_2[0]][pos_1[1]] !== 'X')){
//                             answer.push(0);
//                             return;
//                     }
//                 }
//             }
//         }
        
//         answer.push(1);
//     });

//     console.log(answer);
//     return answer;
// }

function solution(places) {
    var answer = [];
    
    const movePos = [[1,0],[0,1],[-1,0],[0,-1]];
    const posMap = places.map(v => v.map(p => p.split('')));
    
    const bfs = (row, col, arr, pPos) =>{
        //거리 2이하의 숫자만 비교하면 된다.
        const q = [];
        const visit = new Array(5).fill('').map(v => new Array(5).fill(-1));

        q.push([row,col]);
        visit[row][col] = 0;

        while(q.length > 0) {
            let [row,col] = q.pop();

            for(let [r,c] of movePos) {
                let nr = row + r;
                let nc = col + c;
                if(nr > -1 && nc > -1 && nr < 5 && nc < 5){
                    if(arr[nr][nc] !== 'X' && visit[nr][nc] == -1 && visit[row][col] + 1 < 3) {
                        q.push([nr,nc]);
                        visit[nr][nc] = visit[row][col] + 1;
                    }
                }
            }
        }

        console.log(visit);
        //멘헤튼 거리 체크
        for(let [r,c] of pPos) {
            if(visit[r][c] !== -1) return false;
        }

        return true;
    }

    posMap.forEach(p => {
        const pPos = [];
        p.forEach((r,ridx) => r.forEach((c,cidx) => {
            if(c === 'P') pPos.push([ridx, cidx]);
        })) ;

        let result = true;
        for(let i = 0; i < pPos.length; i++) {
            const pos = pPos[i];
            const sPos = [...pPos];
            sPos.splice(i,1)
            result = bfs(pos[0],pos[1], p, sPos);
            if(!result) break;
        }
        answer.push(result ? 1 : 0);
    });

    console.log(answer);
    return answer;
}

solution(places) ;