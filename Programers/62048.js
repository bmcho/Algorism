let w = 8;
let h = 12;


function solution(w, h) {
    var answer = 1;

    let gcd = 1;  //공약수
    let pW = 0; //패턴사각형의 너비
    let pH = 0; //패턴사각형의 높이

    for(let i = 2; i < (w > h ? h : w); i++) {
        if( w%i === 0 && h%i === 0 ) {
            if( i > gcd) {
                gcd = i;
            }
        }
    }

    pW = w/gcd;
    pH = h/gcd;
    answer = w * h - ((pW + pH - 1) * gcd);
    return answer;
}

console.log(solution(w,h));