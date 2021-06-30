//https://programmers.co.kr/learn/courses/30/lessons/42583
//다리를 지나는 트럭

const bridge_length	= 2;
const weight = 10;
const truck_weights = [7,4,5,6];

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;

    const dq = [];
    let time = 0;
    //totalWeight 쓰는 이유 : 매번 큐에서 sum을하여 totalWeight를 쓴다면.. 반복문을 많이 쓰게 되니깐
    let totalWeight = 0;

    // dq.reduce((a,c) => a + c,0))
    while(dq.length || truck_weights.length){
        time++;

        //dq의 크기가 bridge_length보다 작고 dq 트럭들의 무게가 weight보다 작은 지
        if(dq.length < bridge_length && totalWeight + truck_weights[0] < weight) {
            let truck = truck_weights.shift();
            dq.push([truck,1]);
            totalWeight += truck;
        }
        
        if(dq[0][1] === bridge_length) {
            totalWeight -= dq[0][0];
            dq.shift();
        }

        dq.forEach(v => v[1]++);
    }

    return time;
}


console.log(solution(bridge_length, weight, truck_weights));