//https://programmers.co.kr/learn/courses/30/lessons/68645
//삼각 달팽이

const n = 7;

function solution(n) {
    var answer = [];

    //총 블럭의 개수
    const reculsive = (n,cnt) => {
        if(n == 0) return cnt;
        cnt += n;
        return reculsive(n-1, cnt);
    }

    let block = reculsive(n, 0);

    const range = Array.from({length:block}, (v,i) => i+1);
    let arr =[];
    //맨 끝줄은 n ~ n+6 까지 이므로 먼저 빼고 시작
    arr[n] = range.splice(n-1,n);
    arr[1] = range.splice(0,1);

    //테두리 블럭 완성
    for(let i = n-1; i > 1; i--) {
        arr[i] = range.splice(i-2,2);
    }

    let flag = false;
    let r = n-1;
    
    while(range.length) {
        if(flag) {
            for(let i = r; i > 1; i--) {
                arr[i].splice(1,0,range.splice(i-2,2));
            }

            flag = false;
            r--;
        }else {
            console.log(r);
            arr[r].splice(1,0, range.splice(r-2,r-1));
            flag = true;
            r--;
        }
    }
  
    let aa = [];

    for(let i = 1; i <= n; i ++){

    }

    return answer;
}

solution(n);