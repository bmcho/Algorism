//https://programmers.co.kr/learn/courses/30/lessons/42746
//가장 큰수

const numbers = [6, 10, 2];

function solution(numbers) {
    var answer = '';
    
    //실패... numbers의 길이가 100000개 이하이끼때문에
    //최대 복잡도는 100000!이 된다.. 안돼 안돼
    // let result = 0;
    // const recursive = (arr, target, index) => {

    //     if(numbers.length-1 === index){
    //         target = Number(target+arr[0]);
    //         result = target > result ? target : result;
    //         return;
    //     }

    //     for(let i = 0; i < arr.length; i++) {
    //         const nextArr = [...arr];
    //         nextArr.splice(i,1);
    //         recursive(nextArr, target+arr[i], index+1);
    //     }
    // };
    // recursive(numbers, '', 0,);
    // return result+"";

    // 문자열 비교 a+b가 크냐 b+a가 크냐

    numbers.map(v => v+"").sort((a,b) => (b+a) - (a+b));

    return numbers[0] === '0' ? 0 : numbers.join('');

}

solution(numbers);