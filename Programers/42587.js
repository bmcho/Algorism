//https://programmers.co.kr/learn/courses/30/lessons/42587
//프린터

// const priorities = [2, 1, 3, 2];
// const location = 2;

const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

function solution(priorities, location) {
    var answer = 0;

    //location 같이 움직이는 걸로
    while(priorities) {
        let print = priorities.shift();
        //우선운위 비교
        let hasMaxValue = priorities.some(v => v > print);
        if(!hasMaxValue) {
            answer++;
            if(!location) return answer;
            else location -= 1; 
        } else {
            priorities.push(print);
            if(!location) location = priorities.length - 1;
            else location -= 1;
        }
    }
    return answer;
}

console.log(solution(priorities, location));


// function solution1(priorities, location) {
//     var arr = priorities.map((priority, index) => {
//         return {
//             index: index, priority: priority
//         };
//     });

//     var queue = [];

//     while(arr.length > 0) {
//         var firstEle = arr.shift();
//         var hasHighPriority = arr.some(ele => ele.priority > firstEle.priority);
//         if (hasHighPriority) {
//             arr.push(firstEle);
//         } else {
//             queue.push(firstEle);
//         }
//     }

//     return queue.findIndex(queueEle => queueEle.index === location) + 1;
// }