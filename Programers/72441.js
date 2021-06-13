const orders = ["ABCDE"]; //, , 
const course = [2,3,5];

function solution(orders, course) {
    var answer = [];
    let setMenu = [];
    let maxOrder = [];


    function combine(arr, c) {
        console.log(arr);
        arr.forEach(e => {
            if(c == 1) return arr;

            let menu = combine(arr.slice(1), c-1);
            
            

        })
    }

    orders.map(order => order.split("").sort()).forEach(e =>{
        course.forEach(c => {
            maxOrder[c] = 1;

            combine(e,c);
            // for(let i = 0; i < e.length-(c-1); i++){


            //     let standard = e.slice(i,i+c-1);
            //     let add = e.slice(i+c-1);
            //     add.forEach(m => {
            //         setMenu[standard.concat(m).join("")] = setMenu[standard.concat(m).join("")] ? setMenu[standard.concat(m).join("")] += 1 : 1; 
            //         // console.log(setMenu[standard.concat(m).join("")] );
            //         maxOrder[c] = maxOrder[c] > setMenu[standard.concat(m).join("")] ? maxOrder[c] : setMenu[standard.concat(m).join("")];
            //     });
            // }
        });
    })
    setMenu = Object.entries(setMenu);
    console.log(setMenu);
    return course.map( c => {
        console.log(maxOrder[c]);
        return setMenu.filter(menu => (menu[0].length === c && menu[1] === maxOrder[c] && menu[1] > 1)).map(e => e[0]);
    }).flatMap(e=> e).sort();

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


console.log(solution(orders, course));


// console.log("fds".split(''));


function solution1(orders, course) {
    let answer = [];
    const list = {};
    
    const getCombination = (arr, n) => {
        // console.log(arr,n);
        const result = [];
        if(n === 1) return arr.map(e => [e]);
        arr.forEach((e, idx, origin) => {
            const rest = origin.slice(idx + 1);
            const combinations = getCombination(rest, n-1);
            console.log(combinations);
            const attached = combinations.map(combi => [e, ...combi]);
            result.push(...attached);
        });
        return result;
    }
    
    orders.map((order) => {
        const orderArr = order.split('').sort();
        //만들수 있는 조합 메뉴의 수는 2부터 시작해서 최대 주문된 구성 수까지
        for(let i = 2; i <= orderArr.length; i++) {
        	//만약 조합메뉴의 수가 스카피가 원하는 조합메뉴 수와 일치하지 않는다면 넘어감
            //구해봤자 스카피는 원하지 않기 때문
            if(!course.includes(i)) continue;
            const orderCombis = getCombination(orderArr, i);
            // console.log(orderCombis);
            //list라는 Object에 key = 조합 value = 같은 조합이 주문된 수를 넣어줌
            orderCombis.map(orderCombi => {
                const string = orderCombi.join('');
                list[string] = list[string]? list[string] + 1 : 1;
            });
        };
    });
    
    let listArr = Object.entries(list);
    course.map(c => {
    	//스카피가 원하는 조합메뉴 수와 일치하는 조합과 최소 2번 이상 주문된 조합을 필터링해준다.
        const candidates = listArr.filter(e => e[0].length === c && e[1] > 1);
        if(candidates.length > 0) {
        	//해당하는 조합에서 가장 많이 주문된 주문 수 구하기
            let max = Math.max(...candidates.map(e => e[1]));
            //가장 많이 주문된 조합을 answer 배열에 push 해줌
            candidates.map(e => {
                if(e[1] === max) answer.push(e[0]);
            });
        }
    })
    //마지막으로 알파벳 오름차순으로 정렬해서 return 하기
    return answer.sort();
};

// solution1(orders, course);


// function solution2(orders, course) {
//     const orderedCountMap = new Map();
//     const maxCountMap = new Map();
//     const courseSet = new Set(course);
    
//     function combination(result, index, str) {
//         console.log(result);
//         console.log(index);
//         console.log(str);
//         console.log(courseSet);
//         if (courseSet.has(result.length)) {
//             let count = orderedCountMap.get(result) || 0;
//             orderedCountMap.set(result, ++count);
            
//             const max = maxCountMap.get(result.length) || 0;
//             if (max < count) {
//                 maxCountMap.set(result.length, count);
//             }
//         }
        
//         for (let i = index; i < str.length; i++) {
//             combination(result + str[i], i + 1, str);
//         }
//     }
    
//     orders.map(order => order.split("").sort().join(""))
//         .forEach(e => combination("", 0, e));
    
//     return course
//         .map(length => {
//             const max = maxCountMap.get(length);
//             return Array.from(orderedCountMap)
//                 .filter(e => 
//                     e[0].length === length && e[1] >= 2 && e[1] === max
//                 )
//                 .map(e => e[0]);
//         })
//         .flatMap(e => e)
//         .sort();
// }

//  solution2(orders, course);