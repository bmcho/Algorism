//https://programmers.co.kr/learn/courses/30/lessons/12978
//배달

const N = 5;
const road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]];
const K = 3;

function solution(N, road, K) {
    var answer = 0;

    const dist = Array.from({length : N+1}, () => Infinity);
    const adj = Array.from({length : N+1}, () => []);

    // 1-1.
    road.forEach(([a,b,c]) => {        
        adj[a].push([b, c]); 
        adj[b].push([a, c]); 
    });
    // console.log(dist);
    // console.log(adj);
    // console.log(adj[1]);

    const pq = [[1,0]];
    dist[1] = 0;

    while(pq.length) {
        let [d] = pq.pop();
        adj[d].forEach(n => {
            if(dist[n[0]] > dist[d]+n[1]) {
                dist[n[0]] = dist[d]+n[1];
                console.log(n);
                pq.push(n);
            }
            console.log(dist);
        });
    }

    return dist.filter(v => v <= K).length;
}

console.log(solution(N, road, K));