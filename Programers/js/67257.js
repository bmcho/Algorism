//https://programmers.co.kr/learn/courses/30/lessons/67257
//수식 최대화

const expresstion  = "100-200*300-500+20";

function solution(expression) {
    // +, -, *의 경우의 수
    const permutation = [
         ['+', '-', '*']
        ,['+', '*', '-']
        ,['-', '+', '*']
        ,['-', '*', '+']
        ,['*', '+', '-']
        ,['*', '-', '+']
    ];

    let clacNum = expression.split(/\D/g);
    //이렇게 split을 할 경우 숫자가 처음과 끝이기 때문에 공백의 데이터가 두개 생김 양쪽으로 빼주자
    let clacSign = expression.split(/\d+/g);
    clacSign.shift();
    clacSign.pop();
    // console.log(clacNum)
    // console.log(clacSign)

    function claculation(num1, num2, sign) {
        switch(sign){
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
        }
    }

    let result;
    permutation.forEach(signs => {
        const copyNum = clacNum.slice();
        const copySign = clacSign.slice();
        signs.forEach(sign => {
            for(let i = 0; i < copySign.length; i++){
                if(sign === copySign[i]) {
                    // console.log(copySign.length);
                    copyNum.splice(i, 2, claculation(Number(copyNum[i]),Number(copyNum[i+1]), copySign[i]));
                    copySign.splice(i,1);
                    // console.log(copyNum);
                    i--;
                }
            }
        });
        let absNum = Math.abs(copyNum[0]);        
        result = result ? result > absNum ? result : absNum : absNum;
    });
    
    return result;
};