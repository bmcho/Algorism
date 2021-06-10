
const n = [1,2,3,4];

function solution(n) {
    var answer = '';
    //나머지가  0:4, 1:1, 2:2
    const convertArr =  [4,1,2];

    while (n) {
        let temp = n % 3;
        answer = convertArr[temp] + answer;
        if (!temp) { //나머지가 0
            n = parseInt(n / 3 - 1);
        } else {
            n = parseInt(n/3);
        }
    }
    return answer;
};

solution(6);




