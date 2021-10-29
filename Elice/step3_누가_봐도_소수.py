# 누가 봐도 소수
# 엘리스 토끼는 디지털 체로 문자를 출력할 수 있는 LCD 판에 소수를 출력하였습니다.

# 엘리스 토끼는 소수 881을 출력하였는데 엘리스의 앞에 앉아있던 체셔에게는 180도 뒤집힌 188로 보였습니다. 그래서 체셔는 이건 소수가 아니라고 따졌습니다.


# 1, 0, 2, 5, 8은 뒤집혀도 그대로입니다.
# 6은 9가 되고, 9는 6이 됩니다.
# 3, 4, 7은 뒤집히면 더 이상 숫자가 아닙니다.
# 그래서 엘리스 토끼는 마주 보고 앉은 두 사람에게 모두 소수로 보이는 소수를 찾으려 합니다. 엘리스 토끼를 도울 수 있는 프로그램을 작성하세요.

# [입력]
# 첫 번째 줄에 정수 N을 입력합니다.
# (1≤N≤107)(1 ≤ N ≤ 10^{7})
# (1≤N≤10 
# 7
#  )
# N의 첫 숫자는 0이 아닙니다.
# [출력]
# N이 엘리스 토끼와 체셔에게 모두 소수로 보이면 “yes”를 출력하고, 아니면 “no”를 출력합니다.
# [입력 예시]
# 151
# [출력 예시]
# yes

import math

def primeDiscrimination(n) :
    m = math.ceil(n ** 0.5)
    for i in range(2,m+1) :
        if n % i == 0 :
            return False
    return True

def primeBidirectional(n):
    #3,4,7은 더 이상 숫자가 아니게 됨으로 return no
    for i in n :
        if i == '3' or i == '4' or i == '7' :
            return 'no'
    
    #정방향 숫자
    f = int(n)
    #역방향 숫자
    temp = ''
    for i in reversed(n) :
        if i == '6' :
            temp += '9'
        elif i == '9' :
            temp += '6'
        else :
            temp += i
    
    r = int(temp)
    
    #소수 판별
    p1 = primeDiscrimination(f)
    p2 = primeDiscrimination(r)
    
    return 'yes' if p1 == True and p2 == True else 'no'
    
result = primeBidirectional(input())

print(result)
        