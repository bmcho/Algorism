//https://programmers.co.kr/learn/courses/30/lessons/60058
//괄호 변환

const p = "()))((()";

function solution(p) {
    var answer = '';
    
    answer = reculsive(p);

    console.log(answer);
    return answer;
}

function reculsive(p) {
    if(p === '') return '';

    let u = '';
    let v = '';
    let r = 0;
    let l = 0;
    let isOk = true;
    let answer = '';

    for(let i = 0; i < p.length; i++) {
        if(p[i] === '(') l++;
        else r++;

        //올바른 괄호라면 항상 왼족 괄호 먼저 나와야 하기 때문에 l이 작아서는 안된다.
        if(l < r) isOk = false;

        if(l === r){
            u = p.substr(0,i+1);
            v = p.substr(i+1);

            console.log(u,v,isOk);
            if(isOk) {
                console.log('얏호');
                answer = u + reculsive(v);
                return answer;
            } else {
                console.log('허미',v);
                answer =  '(' + reculsive(v) + ')';
                console.log(answer);
                for(let j = 1; j < u.length - 1; j++)
                {
                    console.log('시작', u);
                    if(u[j] === '('){
                        answer += ')'
                    } else {
                        answer += '('
                    }
                }
                return answer;
            }
        }
    }
}


solution(p);