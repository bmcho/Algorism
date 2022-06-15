//https://programmers.co.kr/learn/courses/30/lessons/64065
//튜플
const s = "{{2},{2,1},{2,1,3},{2,1,3,4}}"

function solution(s) {
    var answer = [];
    let arr = s.replace(/{{*|}}/g,'').split("},").map(v => v.split(','));
    arr.sort((a,b) => a.length - b.length);

    console.log(arr);
    answer = arr.reduce((acc, cur) => {
        let v = (cur.filter(v => !acc.includes(Number(v)))[0]);
        acc.push(Number(v));
        return acc;
    }, []);

    return answer;
}

solution(s);

function solution1(s) {
    const subsets = s.substring(1, s.length-2).split('},')
    	.map(str=>str.substring(1).split(',')
        .map(v=>Number(v)));
 
    subsets.sort((a, b) => a.length - b.length);
    console.log(subsets);
 
    const ans = subsets.reduce((acc, subset) => {
        const value = subset.filter(v => !acc.includes(v))[0];
        acc.push(value);
        return acc;
    }, []);
    
    return ans;
}

solution1(s);