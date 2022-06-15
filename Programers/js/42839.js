//https://programmers.co.kr/learn/courses/30/lessons/42839
//소수찾기

//완전탐색
const numbers = "0123";

function solution(numbers) {
    var answer = 0;

    const result = [];
    const arr = numbers.split('');

    const isPrime = (number) => {
        if(number === 1 || number === 0) return false;
    
        // console.log(number);
        for(let i = 2; i * i <= number; i++) {
            if(number % i === 0) return false; 
        }
        return true;
    }
    
    const findPrime = (arr, target) => {
        // console.log(target);
        arr.forEach((v,i) => {
            console.log("v,i : ",v,i);
            if(target === '0') return;
            if(isPrime(Number(target+v))) {
                result.includes(target+v) ? '' : result.push(target+v);
            }
            const copyArr = [...arr];
            copyArr.splice(i,1);
            findPrime(copyArr, target+v);
        });
    }

    findPrime(arr,'');
    console.log(result);
    return result.length;
}

solution(numbers);




// const outArr2 = []
// const permute = (array, eachElements, outArr) => {
//     let chr
    
//     for(let i = 0; i < eachElements.length; i++) {
//         chr = eachElements.splice(i, 1)[0] // i위치에서 1만큼 제거한 배열의 0번 요소 
//         array.push(chr)
        
//         if(eachElements.length == 0) {
//             outArr.push(array.slice())   
//         }
        
//         permute(array, eachElements, outArr)
//         eachElements.splice(i, 0, chr) // i 위치에서 0만큼 제거(=아무것도 안함)한 뒤 chr을 i 위치에 삽입
//         array.pop()
//     }
//     return
    
// }
// permute([], cases, outArr2)
// console.log(outArr2.map(_ => _.join("")))