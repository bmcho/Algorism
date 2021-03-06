//https://programmers.co.kr/learn/courses/30/lessons/77485
//행렬 테두리 회전하기

// const rows = 6;
// const columns = 6;
// const queries = [[2,2,5,4],[3,3,6,6],[5,1,6,3]];

const rows = 3;
const columns = 3;
const queries = [[1,1,2,2], [1,2,2,3],[2,1,3,2],[2,2,3,3]]

function solution(rows, columns, queries) {
    var answer = [];
    const procession = [];
    
    //행렬생성
    let i = 0;
    for(let r = 0; r < rows; r++) {
        const row = []
        for(let c = 0; c < columns; c++) {
            row[c] = ++i;
        }
        procession.push(row);
    }

    queries.forEach(ele => {
        // console.log(procession);
        //x1,y1 시작
        //x2,y2 끝
        //x가 row y가 column
        const [x1,y1,x2,y2] = ele;

        //1 ≤ x1 < x2 ≤ rows, 1 ≤ y1 < y2 ≤ columns
        //x,y,vlaue 로 구성되어있는 arr만들기
        //x1,y1 => x2,y2까지의 모든 수 구하기
        //시계방향이기 때문에 x1,y1에서 시작해서 다시 x1,y1만나기까지
        //1 ≤ x1 < x2 ≤ rows의 조건에 따라 처음 시작은 mx1 + 1 로 시작한다
        //시작
        let [mr,mc] = [x1,y1];
        const numbers = [];
        
        let result = procession[mr-1][mc-1];
        mc++;
        numbers.push([mr,mc,result]);
        
        while(!(mr === x1 && mc === y1)){
            //최소값 구하기
            let num = procession[mr-1][mc-1];
            result = !result ? num : result > num ? num : result;

            //(my === y1 && mx  <  x2) : mx+1;
            //(mx === x2 && my  <  y2) : my+1;
            //(my === y2 && mx  >  x1) : mx-1;
            //(mx === x1 && my  >  y1) : my-1;
            //mx 
            if     (mr === x1 && mc < y2)    mc += 1; 
            else if(mc === y2 && mr < x2)    mr += 1;
            else if(mr === x2 && mc > y1)    mc -= 1;
            else if(mc === y1 && mr > x1)    mr -= 1;
            //다음 좌표로 저장
            numbers.push([mr,mc,num]);
        }
        // console.log(numbers);
        //좌표 변경하기
        numbers.forEach(v=> {
            procession[v[0]-1][v[1]-1] = v[2];
        });

        answer.push(result);
    });
    
    // console.log(answer);
    return answer;
}

solution(rows, columns, queries);