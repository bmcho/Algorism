//https://programmers.co.kr/learn/courses/30/lessons/17677
//뉴스 클러스터링
// const str1 = 'E=M*C^2';
// const str2 = 'e=m*c^2';

// const str1 = 'handshake';
// const str2 = 'shake hands';

const str1 = "aa1+aa2";
const str2 = "AAAA12";


function solution(str1, str2) {
    var answer = 0; 
    
    const divisionStr = (str) => {
      const returnStr = [];  
      const regEx = /^[A-Z]+$/;
        
      for(let i = 0; i < str.length-1; i++){
        let sub = str.substring(i, i+2);
        if(regEx.test(sub)){
          returnStr.push(sub);
        }
      }
        return returnStr;
    }

    // let diviStr1 = [];
    let diviStr1 = divisionStr(str1.toUpperCase());
    let diviStr2 = divisionStr(str2.toUpperCase());

    // console.log(diviStr1);
    // console.log(diviStr2);
    // //합집합 수 구하기
    // const unionStr = diviStr1.filter(item => diviStr2.includes(item));

    // //교집합 수 구하기
    // const intersectionStr = diviStr1.filter((item) => diviStr2.includes(item));
    // //중복 제거

    const unionStr = [];
    const intersectionStr = [];

    for(let i = 0; i < diviStr1.length; i++) {
        
        if(diviStr2.includes(diviStr1[i])) {
            // console.log(i);
            intersectionStr.push(diviStr2.splice(diviStr2.indexOf(diviStr1[i]), 1));
        }
        unionStr.push(diviStr1[i]);
    }
    // console.log(unionStr);

    for(let i = 0; i < diviStr2.length; i++) 
        unionStr.push(diviStr2[i]);

    if(!unionStr.length) return 65536;
    if(!intersectionStr.length) return 0;

    return Math.floor((intersectionStr.length / unionStr.length * 65536));
}

 console.log(solution(str1, str2));


 //참조
function solution1(str1, str2) {
    var answer = 1
  
    str1 = str1.toUpperCase()
    str2 = str2.toUpperCase()
    
    // 첫번째 글자 영문자 넣을 배열
    var arr1 = []
    // 두번째 글자 영문자 넣을 배열
    var arr2 = []
  
    // 두글자씩 짜르는데 영문자 아닌 것이 있으면 넘어간다.
    for (var i = 0; i < str1.length - 1; i++) {
      var tmp = str1.slice(i, i + 2)
      if (tmp.search(/[^A-Z]/g) >= 0) {
        continue
      }
      arr1.push(tmp)
    }
    for (var i = 0; i < str2.length - 1; i++) {
      var tmp = str2.slice(i, i + 2)
      if (tmp.search(/[^A-Z]/g) >= 0) {
        continue
      }
      arr2.push(tmp)
    }
    
    arr1.sort()
    arr2.sort()

    console.log(arr1);
    console.log(arr2);
  
    var a = [] // 중복포함, 교집합 배열 (multi set)
    var b = [] // 중복포함, 합집합 배열
  
    for (var i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) >= 0) {
        a.push(arr1.splice(arr1.indexOf(arr2[i]), 1))
      }
      b.push(arr2[i])
    }
  
    for (var i = 0; i < arr1.length; i++) {
      b.push(arr1[i])
    }
    
    // console.log(a, b);
  // 계속 13번 테스트케이스가 안되서 애먹었었는데
  // 이렇게 분모가 0이 될경우, 분자가 0이될 경우 따로 분리해줘야함!!!
  if (b.length === 0) return 65536
  if (a.length === 0) return 0

  return Math.floor((a.length / b.length) * 65536)
}

// console.log(solution1(str1, str2));