//https://programmers.co.kr/learn/courses/30/lessons/42746
//가장 큰수

const numbers = [6, 10, 2];

function solution(numbers) {
    var answer = '';
    
    let result = 0;
    const recursive = (arr, target, index) => {

        if(numbers.length === index){
            target = target+arr[0];
            result = target > result ? target : result;
        } 

        // for(let i = 0; i < arr.length; i++) {
        //     const nextArr = [...arr].splice(i,1);
        //     recursive(nextArr, target+arr[i],index + 1);
        // }
    };
    recursive(numbers, '', 0);
    console.log(result);
    return answer;
}

solution(numbers);