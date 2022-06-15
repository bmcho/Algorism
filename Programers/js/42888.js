//https://programmers.co.kr/learn/courses/30/lessons/42888
//오픈채팅방

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];

function solution(record) {
    var answer = [];
    //해당 ID uid값의 마지막 nickname 값만 가지고 있으면 된다.
    let logs = record.map(log => log.split(' '));
    console.log(logs)
    let userInfo = {};
    logs.forEach(log => {
        if(log.length === 3){
            userInfo[log[1]] = log[2];
        }
    });
    console.log(userInfo)

    logs.forEach(log => {
        if(log[0] === 'Enter') {
            answer.push(`${userInfo[log[1]]}님이 들어왔습니다.`);
        } else if(log[0] === 'Leave') {
            answer.push(`${userInfo[log[1]]}님이 나갔습니다.`);
        }
    });
    return answer;
}

solution(record);