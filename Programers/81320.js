//https://programmers.co.kr/learn/courses/30/lessons/81302
//거리두기

const places = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];
// const places = [["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"]];

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

    
    const bfs = (row, col, arr, idx) =>{
        const q = [];
        q.push([row,col]);

        while(q.length > 0) {
            let [row,col] = q.pop();

            for(let mv of movePos) {
                
            }

            console.log(row,col);
        }
    }

    posMap.forEach(p => {
        const pPos = [];
        p.forEach((r,ridx) => r.forEach((c,cidx) => {
            if(c === 'P') pPos.push([ridx, cidx]);
        })) ;

        for(let pos of pPos) {
            bfs(pos[0],pos[1],posMap,0);
        }
       
    });
    


    return answer;
}

solution(places);