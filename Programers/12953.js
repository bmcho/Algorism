//https://programmers.co.kr/learn/courses/30/lessons/12953
//N개의 최소 공배수

const arr = [2,6,8,14];

function solution(arr) {
    var answer = 0;

    arr.sort((a,b) => (a-b));
    let max = arr.pop();

    let i = 1;
    while(i) {
        let num = max * i;
        console.log(num);
        const calc = arr.filter(v => num%v !== 0);     
        if(calc.length === 0) {
            answer = num;
            break;
        }
        i++;
    }
    return answer;
}

solution(arr);


//다른사람 풀이
function nlcm(num) {
    return num.reduce((a,b) => {
       return a*b / gcd(a,b);
    }) 
   };
   
   function gcd(a, b) {
       console.log(a,b);
       console.log(a % b);
     return a % b ? gcd(b, a%b) : b
   }