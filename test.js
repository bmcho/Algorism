// s = "{{2},{2,1},{2,1,3},{2,1,3,4}}"
s = "{{1,2,3},{2,1},{1,2,4,3},{2}}"

function solution(s) {
    var answer = [];
    let arr = s.replace(/{{*|}}/g,'').split("},").map(v => v.split(','));
    arr.sort((a,b) => a.length - b.length);

    answer = arr.reduce((acc, cur) => {
        console.log("---------------------")
        let a =(cur.filter(v => {
                console.log(v)
                return !acc.includes(Number(v)) ? v : null
            }
        ))
        console.log(a)

        let v = (cur.filter(v => !acc.includes(Number(v)))[0]);
        acc.push(Number(v));
        return acc;
    }, []);

    return answer;
}


console.log(solution(s))