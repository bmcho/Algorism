// https://programmers.co.kr/learn/courses/30/lessons/76502
// 괄호 회전하기

const s = "[](){}";
// const s = "[(])";

function solution(s) {
    var answer = 0;
    if(s.length % 2) return 0;
    const str = s.split('');

    let stack = [];
    let flag = true;
    for(let i = 0; i < s.length; i++){
        flag = true;
        for(let b of str) {
            //stack에 데이터가 없는데 우괄호면 잘못 된 데이터\
            if(stack.length === 0 && 
                (b === ')' || b=== ']' || b === '}')) {
                    flag = false;
                    break;
                }
            
            if(stack.length === 0){
                stack.push(b);
                continue;
            }            

            if(stack.length) {
                if(b === '(' || b=== '[' || b === '{') {
                    stack.push(b);
                    continue;
                }

                let l = stack.pop();
                if((l ==='(' && b !== ')') 
                    || (l ==='[' && b !== ']') || (l ==='{' && b !== '}')) {
                        flag = false;
                        break;
                }
            }
            
        }
        if(flag) answer++;
        let shift = str.shift();
        str.push(shift);
    }
    return answer;
}

solution(s)



//첫번쨰 시도 
//"[(])" 같은 케이스 실패
function solution1(s) {
    var answer = 0;

    const str = s.split('');

    for(let i = 0; i < s.length; i++){
        let b1 = 0;
        let b2 = 0;
        let b3 = 0;

        for(let b of str) {
            if(b === '('){
                b1++;
            }
            else if(b === ')'){
                if(--b1 < 0) break;
            }

            if(b === '['){
                b2++;
            }
            else if(b === ']'){
                if(--b2 < 0) break;
            }

            if(b === '{'){
                b3++;
            }
            else if(b === '}'){
                if(--b3 < 0) break;
            }
        }

        if(b1 === 0 && b2 === 0 && b3 === 0)  answer++;

        let shift = str.shift();
        str.push(shift);
    }
    return answer;
}

//정규식 신기
function solution2(s) {
    var answer = 0;

    for (let i = 0; i < s.length; i++) {
        s = s.slice(1, s.length)+s[0];

        let string = s;
        //괄호는 짝수이기때문에 전체 길이의 반만 비교해도 됨
        //[\[][\]] => [\[\]] ,\[+\] , \[\] 으로도 바꾸어도 값 나옴
        for (let j = 0; j < Math.floor(s.length/2); j++) {
            string = string.replace(/([\[][\]]|[\{][\}]|[\(][\)])+/g, "");

            if (!string) break;
        }

        answer += !string ? 1 : 0;
    }

    return answer;
}