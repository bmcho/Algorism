//https://programmers.co.kr/learn/courses/30/lessons/42578
//위장

const clothes = [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]];

function solution(clothes) {
    var answer = 1;
    let hashMap = [];
    clothes.forEach(c => {
        hashMap[c[1]] = hashMap[c[1]] ? hashMap[c[1]] + 1 : 1;
    });

    for(let cnt in hashMap) {
        
        answer *= (hashMap[cnt]+1);
    }
    return answer-1;
}


solution(clothes);