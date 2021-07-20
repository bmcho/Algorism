//https://programmers.co.kr/learn/courses/30/lessons/12981
//영어 끝말잇기

const n = 2;
const words =  ["hello", "one", "even", "never", "now", "world", "draw"];

function solution(n, words) {
    var answer = [];
    const play = new Map();

    play.set(words[0],1);

    for(let i = 1; i < words.length; i++){
        let f = words[i-1];
        let l = words[i];

        if(f.substr(-1,1) === l.substr(0,1) && !play.get(l)) {
            play.set(l,1);
        } 
        else if(f.substr(-1,1) !== l.substr(0,1) || play.get(l)) {
            let num = (i+1)%n;
            let order = Math.ceil((i+1)/n);
            answer.push(num);
            answer.push(order);
            break;
        }
    }
    console.log(answer);
    return answer.length === 0 ? [0,0] : answer;
}

solution(n, words);