# 소수의 법칙
# 소수를 관찰하던 공준이는 특별한 규칙을 발견했습니다. 어떤 자연수 N을 관찰하든 간에 N보다 크고 2N보다 작거나 같은 소수는 언제나 한 개 이상 존재한다는 것입니다.

# 예를 들어, N이 14인 경우 14보다 크고 28 이하인 소수는 17, 19, 23, 총 3개가 있습니다.

# N이 주어졌을 때, N보다 크고 2N보다 작거나 같은 소수의 개수를 구하는 프로그램을 작성하세요.


# [입력]
# 자연수 N을 입력합니다.
# (1<=N<=123,456)(1<=N<=123,456)
# (1<=N<=123,456)
# [출력]
# N보다 크고, 2N보다 작거나 같은 소수의 개수를 출력합니다.
# [입력 예시]
# 14
# [출력 예시]
# 3

import math

def prime_list(n):
    # 에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
    sieve = [True] * (n * 2)
    # n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
    m = math.ceil((n*2) ** 0.5)
    for i in range(2, m):
        if sieve[i] == True:           # i가 소수인 경우
            for j in range(i+i, (n * 2) , i): # i이후 i의 배수들을 False 판정
                sieve[j] = False
                
    # 소수 목록 산출
    return len([i for i in range(n, n*2) if sieve[i] == True])
 
result = prime_list(int(input()))

print(result)