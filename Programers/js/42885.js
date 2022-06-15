//https://programmers.co.kr/learn/courses/30/lessons/42885
//구명보트

const people = [70, 50, 80, 50];
const limit = 100;

// function solution(people, limit) {
//     var answer = 0;
//     let _people = [...people];

//     while(_people.length > 0) {
//         let fst = _people.shift();

//         if(fst !== limit) {
//             for(let i = 0; i < _people.length; i++){
//                 let sec = _people[i];
//                 if(fst + sec === limit) {
//                     _people.splice(i,1);
//                     break;
//                 }

//                 if(fst + sec < limit) {
//                     _people.splice(i,1);
//                     break;
//                 }
//             }
//         }
//         answer++;
//     }

//     console.log(answer);
//     return answer;
// }


function solution(people, limit) {
    var answer = 0;
    let s = 0;
    let e = people.length-1;

    people.sort((a,b) => a-b);

    while(s <= e) {
        console.log(people[s]+" "+ people[e]);
        if(people[s] + people[e] > limit) {
            e--;
        } else {
            s++;
            e--;
        }
        answer++;
    }
    return answer;
}

solution(people, limit);