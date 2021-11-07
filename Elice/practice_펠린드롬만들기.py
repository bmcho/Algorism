'''
팰린드롬 만들기
팰린드롬이란, 앞으로 읽으나 뒤로 읽으나 똑같은 문자열을 말한다. 예를 들어, “aba”, “abdba”, “abffba” 는 모두 팰린드롬이다.

임의의 문자열이 주어질 때, 몇 개의 문자를 적당히 삭제하면 이를 팰린드롬으로 만들 수 있다. 예를 들어, “abca”가 주어질 경우, 알파벳 ‘b’를 삭제하면 “aca”가 되므로, 팰린드롬으로 만들 수 있다.

임의의 문자를 제거함으로써 주어진 문자열을 팰린드롬으로 만들고 싶다고 할 때, 제거해야 하는 문자의 최소 개수를 출력하는 프로그램을 작성하세요.

실습
입력
첫 번째 줄에 문자열이 주어진다. 문자열의 길이는 3000을 넘지 않는다.

출력
팰린드롬을 만들기 위해 제거해야 하는 문자의 개수의 최솟값을 출력한다.

입력 예시 1
abcfba
출력 예시 1
1
입력 예시 2
abcdefg
출력 예시 2
6
'''

'''
        p[i][j] = p[i+1][j-1] ,                  data[i] == data[j]
                = min(p[i+1][j],p[i][j-1]) + 1,  data[i] != data[j] 
'''

def palindrome(data) : 

    n = len(data)
    p = [[0] * n for _ in range(n)]
    
    for i in range(n-2, -1, -1) : 
        for j in range(i+1, n) :
            if data[i] == data[j]:
                p[i][j] = p[i+1][j-1]
            else :
                p[i][j] = min(p[i+1][j], p[i][j-1]) + 1
                
    return p[0][len(data)-1]
    
print(palindrome(input()))