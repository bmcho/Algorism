
//https://programmers.co.kr/learn/courses/30/lessons/12899
//124의 나라

const n = [1,2,3,4];

function solution(n) {
    var answer = '';
    //나머지가  0:4, 1:1, 2:2
    const convertArr =  [4,1,2];

    while (n) {
        console.log(n);
        let temp = n % 3;
        // console.log(temp);
        answer = convertArr[temp] + answer;
        if (!temp) { //나머지가 0
            n = parseInt(n / 3 - 1);
        } else {
            n = parseInt(n/3);
        }
    }
    console.log(answer);
    return answer;
};

solution(11);

console.log(2 % 3);



