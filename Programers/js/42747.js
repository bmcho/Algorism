//https://programmers.co.kr/learn/courses/30/lessons/42747
//H-index

// const citations = [3, 0, 6, 1, 5];
// const citations = [1,1,2,2,3,6,7,9,2];
const citations = [4, 3, 3, 3, 3];

function solution(citations) {
    var answer = 0;

    let sum = citations.reduce((a,c) => a+c);
    if(sum === 0) return 0;

    citations.sort((a,b) => (a-b));
    
    let max = citations[citations.length-1];

    for(let i = 0; i <= max; i++){
        let u = 0;
        for(let j = 0; j < citations.length; j++){
            if(i <= citations[j]) u++;
        }
        // console.log(u ,i);
        if(u >= i) answer = i;
    }

    return answer;
}

function solution2(citations) {
     citations = citations.sort(sorting);
     var i = 0;
     while(i + 1 <= citations[i]){
         i++;
     }
     console.log(i);
     return i;


     function sorting(a, b){
         return b - a;
     }
}

solution2(citations);