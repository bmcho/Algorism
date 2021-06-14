const orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
const course = [2,3,5];

function solution(orders, course) {
    var answer = [];
    let menu = [];
    let maxOrder = [];

    function combine(str, index, order) {
        if(course.indexOf(str.length) !== -1) {
            menu[str] = menu[str] ? menu[str] += 1 : 1;
            maxOrder[str.length] = maxOrder[str.length] ? menu[str] > maxOrder[str.length] ? menu[str] : maxOrder[str.length] : menu[str];
        }

        for(let i = index; i < order.length; i++){
            combine(str+order[i], i + 1, order);
        }
    }

    orders.map(order => order.split("").sort()).forEach(e =>{
            combine('',0,e);
    })

    // console.log(menu);
    // console.log(maxOrder);
    
    menu = Object.entries(menu);
    return course.map(cnt => {
        return menu.filter(v => (v[0].length === cnt && v[1] > 1 && maxOrder[cnt] === v[1])).map(e => e[0]);
    }).flatMap(e=>e).sort();
    // setMenu = Object.entries(setMenu);
    // console.log(setMenu);
    // return course.map( c => {
    //     console.log(maxOrder[c]);
    //     return setMenu.filter(menu => (menu[0].length === c && menu[1] === maxOrder[c] && menu[1] > 1)).map(e => e[0]);
    // }).flatMap(e=> e).sort();

    // console.log(setMenu);
    // course.forEach(c => {
    //     let cooks = [];
    //     orders.forEach(o => {
    //         // -c를 하는 이유 : c가 2 즉 2개의 코스요리를 타나낸다고할때
    //         // ABCFG를 예시로 G의 경우는 마지막 요리이기 때문에 비교할 필요가 없기 때문
    //         for(let i = 0; i <= o.length - c; i++) {
    //             let j = i + 1;
    //             let menu = [];
    //             while(j + c -1 <= o.length) {
    //                 //문자 열 만들기
    //                 // console.log(o.substring(i,i+1) ,o.substring(j,j + c-1));
    //                 menu.push(o.substring(i,i+1));
                     
    //                 let cook = o.substring(i,i+1) + o.substring(j,j + c-1);
    //                 // console.log(cook);
    //                 answer[cook] = answer[cook] ? answer[cook] += 1 : 1
    //                 cooks[cook] = cooks[cook] ? cooks[cook] += 1 : 1
    //                 j++;
    //             }
    //         } 
    //     });
    //     //가장 많이 주문 된 메뉴 골라내기
    //    let listArr = Object.entries(cooks);
    //     console.log(listArr);
    // }); 
    // // console.log(answer);
    // // console.log(answer['AC']);
    // return answer;
}


solution(orders, course);

function solution1(orders, course) {
    const setAllCombination = function(cnt, order){
        const n = order.length;
        for(let comb = 1; comb < (1 << n); comb++){
            let res = '';
            for(let i = 0; i < n; i++){
                if(comb & (1<<i)) res += order[i];
            }       
            if(res.length < 2) continue;
            if(cnt[res] === undefined) cnt[res] = 0;
            cnt[res]++;
        }
    }
    const cnt = {};
    orders.map(order => order.split('').sort()).forEach(order => setAllCombination(cnt, order));
 
    console.log(cnt);
    const cntArray = Object.entries(cnt).filter(v => v[1] > 1);
    return course.reduce((ans, c) => {
        const tmp = cntArray.filter(v => v[0].length === c);
        const maxVal = tmp.reduce((ret, v) => Math.max(ret, v[1]), -1)
        return ans.concat(tmp.filter(v => v[1] === maxVal).map(v => v[0]));
    }, []).sort();
}

// solution1(orders, course);