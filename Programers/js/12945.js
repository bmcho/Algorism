function solution(n) {
    var answer = 0;
    const arr = Array.from({length:n+1},() => 0)
    arr[0] = 0
    arr[1] = 1
    arr[2] = 1
    
    for (var i = 3; i <= n; i++){
        arr[i] = (arr[i-2] + arr[i-1]) % 1234567
    }
    
    answer = arr[n]
    
    return answer;
}