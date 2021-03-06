'''
두 문자열 사이의 거리
두 문자열 s1, s2가 주어진다. 이제 s1에서 문자 하나를 추가하거나 제거할 수 있으며, 이를 반복함으로써 s2를 얻고싶다고 하자. 예를 들어, s1 = “abc”, s2 = “bdcf” 라고 하면, s1에서 a를 제거하고 d를 추가, 그리고 f를 추가하면 s2를 얻을 수 있다. 즉, 다음과 같은 경로로 s1에서 s2를 얻을 수 있다.

“abc” -> “bc” -> “bdc” -> “bdcf”

두 문자열 s1, s2 사이의 거리란, s1에서 s2를 만들기 위해 필요한 문자 삽입, 삭제 횟수의 최소값으로 정의된다. 예를 들어, s1 = “abc”, s2 = “bdcf”라면, 두 문자열의 거리는 3이다. 왜냐하면, s1에서 문자의 추가 및 삭제를 3번 하면 s2를 얻을 수 있기 때문이며, 이보다 더 적은 연산을 통해서는 s2를 얻을 수 없다.

두 문자열이 주어질 때, 두 문자열 사이의 거리를 출력하는 프로그램을 작성하시오.

실습
입력
첫 번째 줄에 문자열 s1, 두 번째 줄에 문자열 s2가 주어진다. 문자열의 길이는 2000을 넘지 않는다.

출력
두 문자열 사이의 거리를 출력한다.

입력 예시
abc
bdcf
출력 예시
3
'''


'''
삽입과 삭제 총 두가지의 경우가 있음
변경도 있지만 변경은 결국 삭제 삽입의 결과이므로 2번 행동한것과 같다

점화식 : dp[i][j] = : min(dp[i-1][j],dp[i][j])+1 if s1[i] != s2[j](j = 0~len(j))
                   : dp[i-1][j-1]               if s1[i] == s2[j](j = 0~len(j))
'''
from sys import stdin

s1 = stdin.readline().strip()
s2 = stdin.readline().strip()

l1 = len(s1) + 1
l2 = len(s2) + 1

dp = [[0] * l1 for _ in range(l2)]
'''
각 s1,s2가 빈문자열 ''에 대한 문자열 거리 입력
'''
for i in range(l1) :
    dp[0][i] = i
for i in range(l2) :
    dp[i][0] = i

for i in range(1, l1) :
    for j in range(1, l2) :
        if s1[i-1] != s2[j-1] :
            dp[j][i] = min(dp[j-1][i], dp[j][i-1]) + 1
        else :
            dp[j][i] = dp[j-1][i-1]

print(dp[-1][-1])
