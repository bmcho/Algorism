//https://programmers.co.kr/learn/courses/30/lessons/60057
//문자열 압축
const s = "ababcdcdababcdcd";
        //    ababcdcd


function solution(s) {
    var answer = 1000;
    if(s.length === 1) {
        return 1;
    } else {
        for(let i = 1; i <= parseInt(s.length/2); i++) {
            let result = '';
            let run = 1;
            for(let j = 0; j < s.length; j += i) {
                let cur = s.substr(j , i);
                let next = s.substr(j + i, i);
                console.log(`${cur} vs ${next}`)
                if(cur === next) {
                    run++;
                } else {
                    result = run > 1 ? result + run + cur : result + cur;
                    console.log(result);
                    run = 1;
                }
            }
            // strings.push(string.length);
            answer = answer > result.length ?  result.length : answer;
        }
        return answer;
    }
}

console.log(solution(s));


// function solution1(s) {
// 	//문자열 길이 1인 경우
//     if (s.length === 1) return 1;
//     let strings = [];
//     let answer = 0;
//     //첫번째 반복문은 압축할 문자열 길이 1부터 시작 ~ 문자열 길이 / 2
//     for(let i = 1; i <= parseInt(s.length / 2); i++) {
//         let cnt = 1;
//         let string = '';
//         for(let j = 0; j < s.length; j += i) {
//             const current = s.substr(j, i);
//             console.log(current);
//             const next = s.substr(j+i, i);
//             if(current === next) {
//                 cnt++;
//             } else {
//                 string = cnt > 1? string + cnt + current : string + current;
//                 cnt = 1;
//             }
//         }
//         strings.push(string.length);
//     }
//     return Math.min(...strings);
// }

// console.log(solution1(s));


// function solution3(s) {
//     var answer = 1000;
    
//     if(s.length === 1) {
//         return 1;
//     } else {
//         for(let i = 1; i <= parseInt(s.length/2); i++) {
//             let result = '';
//             let com = s.substr(0,i);
//             let run = 1;
//             for(let j = i; j < s.length; j += i) {
//                 let temp = s.substr(j, i);

//                 if(com === temp) {
//                     run++;
//                 } else {
//                     result = result + (run === 1 ? '' : run) + com;
//                     com = temp;
//                     run = 1;
//                 }

//                 if(i + j >= s.length) {
//                     result = result + (run === 1 ? '' : run) + com;
//                     com = temp;
//                     run = 1;
//                 }
//             }
//             answer = answer > result.length ?  result.length : answer;
//         }
//         return answer;
//     }
// }