//https://programmers.co.kr/learn/courses/30/lessons/62048
//멀쩡한 사각형

let w = 6;
let h = 10;

function solution(w, h) {
    var answer = 1;

    let gcd = 1;  //공약수
    // let pW = 0; //패턴사각형의 너비
    // let pH = 0; //패턴사각형의 높이

    for(let i = 2; i <= (w > h ? h : w); i++) {
        if( w%i === 0 && h%i === 0 ) {
            if( i > gcd) {
                gcd = i;
            }
        }
    }
    // pW = w/gcd;
    // pH = h/gcd;

    // answer = w * h - ((pW + pH - gcd));
    return w * h - (w + h - gcd);
}

console.log(solution(w,h));


function solution1(w,h){
    const gcd = (a, b) => {
        console.log(a,b);
        return b === 0 ? a : gcd(b, a % b);
    };

    return w * h - (w + h - gcd(w, h));
}

solution1(w,h);