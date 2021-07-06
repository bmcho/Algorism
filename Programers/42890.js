//https://programmers.co.kr/learn/courses/30/lessons/42890
//후보키

const relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];

function solution(relation) {
    var answer = 0;
    
    const length = relation[0].length;
    const subset = 1<<length;
    const set = new Set();
    
    for(let i = 1; i < subset; i++) {
        let temp = relation.map(x => x.filter((_, idx) => i & (1<<idx)).join(""));
        const tempSet = new Set(temp);
        
        temp.length === tempSet.size ? set.add(i) : '';
    }
    
    for(let x of set) {
        for(let y of set){
            if(x >=y) continue;
            if((x & y) === x) set.delete(y);
        }
    }
    
    return set.size;
}

function solution1(relation) {
    const cols = relation[0].length;
    const check = 1 << cols;
    const answer = new Set();
    
    console.log(check);
    
    for(let i = 1; i < check; i++) {
        let temp = relation.map(x => x.filter((_, col) => (1<<col)).join(""));
        console.log(temp);
        // const set = new Set(temp);

        // if(temp.length === set.size) answer.add(i);
    }
}

solution1(relation);








