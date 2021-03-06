'''
사탕 가게
엘리스의 이상한 사탕 가게에는 일렬로 놓인 판매대가 있습니다. 엘리스는 사탕을 채우는 개수에 특별한 규칙을 두어 판매대를 채웠습니다.

첫 번째 판매대의 사탕은 n개부터 시작해 다음번 판매대의 사탕의 개수는 다음과 같은 규칙을 적용해 채웁니다.

n이 짝수라면, 2로 나눈다.
n이 홀수라면, 3을 곱한 뒤 1을 더한다.
사탕을 채우는 개수가 1이면 엘리스는 판매대를 채우는 것을 끝냈습니다.

첫 번째 판매대의 사탕 개수를 줬을 때, 판매대 중 사탕의 개수가 최대인 것을 골라, 사탕의 개수를 출력하는 프로그램을 작성하세요.

[입력]
첫 번째 줄에 엘리스가 처음에 판매대에 넣은 사탕의 개수인 자연수 N을 입력합니다.
(1≤N≤100,000)(1≤N≤100,000)
(1≤N≤100,000)
[출력]
첫 번째 줄에 판매대 중 사탕의 개수가 최대인 것을 골라 사탕의 개수를 출력합니다.
[입력 예시]
9
[출력 예시]
52
'''
n = int(input())

candy = [n]
while n != 1 :
    if n % 2 == 0 :
        n = n//2
        candy.append(n)
    else :
        n = n * 3 + 1
        candy.append(n)

print(max(candy))