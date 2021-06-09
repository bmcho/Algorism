const numbers = [1, 1, 1, 1, 1];
const target = 3;

//DFS
function solution(numbers, target) {
    var answer = 0;
    (function reculsive(num, index) {
        if(index === numbers.length) {
            if(num === target) {
                answer++;
            }
            return;
        } else {
            reculsive(num + numbers[index], index+1);
            reculsive(num - numbers[index], index+1);
        }
        return;
    })(0, 0);
    // console.log(answer);
    return answer;
}
//BFS
function solution1(numbers, target) {
    var answer = 0;

    let work = 0;
    let bfs = []
    bfs.push([numbers[0], -numbers[0]]);
    let index = 1;
    while(bfs.length !== 0) {
        let lst = bfs.shift();
        work++;
        if(index !== numbers.length) {
            let nlst = [];
            for(let num of lst){
                work++;
                nlst.push(num + numbers[index]);
                nlst.push(num - numbers[index]);
            }
            bfs.push(nlst);
            index++;
        } else {
            for(let num of lst) {
                work++;
                if(num === target){
                    answer++;
                }
            }
        }
    }
    console.log(work);
    return answer;
}