//https://programmers.co.kr/learn/courses/30/lessons/42583
//다리를 지나는 트럭

const bridge_length	= 100;
const weight = 100;
const truck_weights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;

    const dq = [];
    let time = 0;
    //totalWeight 쓰는 이유 : 매번 큐에서 sum을하여 totalWeight를 쓴다면..시간복잡도가 빡셀것같아..
    let totalWeight = 0;

    // dq.reduce((a,c) => a + c,0))
    while(dq.length || truck_weights.length){
        time++;
        //dq의 크기가 bridge_length보다 작고 dq 트럭들의 무게가 weight보다 작은 지
        if(dq.length <= bridge_length && totalWeight + truck_weights[0] <= weight) {
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

    return ++time;
}

console.log(solution(bridge_length, weight, truck_weights));

// function solution1(bridge_length, weight, truck_weights) {
//   // '다리'를 모방한 큐에 간단한 배열로 정리 : [트럭무게, 얘가 나갈 시간].
//   let time = 0, qu = [[0, 0]], weightOnBridge = 0;

//   // 대기 트럭, 다리를 건너는 트럭이 모두 0일 때 까지 다음 루프 반복
//   while (qu.length > 0 || truck_weights.length > 0) {
//     console.log(qu);
//     console.log(time);
//     // 1. 현재 시간이, 큐 맨 앞의 차의 '나갈 시간'과 같다면 내보내주고,
//     //    다리 위 트럭 무게 합에서 빼준다.
//     if (qu[0][1] === time) weightOnBridge -= qu.shift()[0];

//     if (weightOnBridge + truck_weights[0] <= weight) {
//       // 2. 다리 위 트럭 무게 합 + 대기중인 트럭의 첫 무게가 감당 무게 이하면 
//       //    다리 위 트럭 무게 업데이트, 큐 뒤에 [트럭무게, 이 트럭이 나갈 시간] 추가.
//       weightOnBridge += truck_weights[0];
//       qu.push([truck_weights.shift(), time + bridge_length]);
//     } else {
//       // 3. 다음 트럭이 못올라오는 상황이면 얼른 큐의
//       //    첫번째 트럭이 빠지도록 그 시간으로 점프한다.
//       //    참고: if 밖에서 1 더하기 때문에 -1 해줌
//       if (qu[0]) time = qu[0][1] - 1;
//     }
//     // 시간 업데이트 해준다.
//     time++;
//   }
//   return time;
// }

// solution1(bridge_length, weight, truck_weights);