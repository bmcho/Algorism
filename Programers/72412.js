// https://programmers.co.kr/learn/courses/30/lessons/72412
//순위 검색
// ,"python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"
const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];

function solution(info, query) {
    var answer = [];
    const infoMap = [];

    const combine = (arr, score, index) => {
        const key = arr.join('');

        infoMap[key] ? infoMap[key].push(score) : infoMap[key] = [score];

        for(let i = index; i < arr.length; i++) {
            const temp = [...arr];
            temp[i] = '-';
            combine(temp, score, i + 1);
        }
    };

    info.forEach(i => {
        const arr = i.split(' ');
        const score = arr.pop();
        combine(arr,score,0);
    });

    query.forEach(q => {
        const value = q.replace(/\s+and+\s/g,'').split(/\s(?=[0-9])/g);
        const arr = infoMap[value[0]];
        const score = Number(value[1]);

        let cnt = 0;
        if(arr) {
            arr.sort((a,b) => a - b);

            let s = 0;
            let e = arr.length;
            while(s < e) {
                let m = Math.floor((s+e)/2);
                let v = Number(arr[m]);
                if(v >= score) {
                    e = m;
                } else if(v < score){
                    s = m + 1;
                }
            }
           cnt = arr.length - s;
        } 
        answer.push(cnt);
    });

    console.log(answer);
    return answer;
}


solution(info, query);