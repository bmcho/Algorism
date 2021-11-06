'''
연속 부분 최대합
nnn개의 숫자가 주어질 때, 연속 부분을 선택하여 그 합을 최대화 하는 프로그램을 작성하시오. 예를 들어, 다음과 같이 8개의 숫자가 있다고 하자.

1 2 -4 5 3 -2 9 -10

이 때, 연속 부분이란 연속하여 숫자를 선택하는 것을 말한다. 가능한 연속 부분으로써 [1, 2, -4], [5, 3, -2, 9], [9, -10] 등이 있을 수 있다. 이 연속 부분들 중에서 가장 합이 큰 연속 부분은 [5, 3, -2, 9] 이며, 이보다 더 합을 크게 할 수는 없다. 따라서 연속 부분 최대합은 5+3+(-2)+9 = 15 이다.

실습
입력
첫째 줄에 nnn개의 숫자가 주어진다. (1≤n≤100,0001 \leq n \leq 100,0001≤n≤100,000)

출력
nnn개의 숫자에 대하여 연속 부분 최대합을 출력한다.

입력 예시
1 2 -4 5 3 -2 9 -10
출력 예시
15
'''
def getSubsum1(data) :
    '''
    n개의 숫자가 list로 주어질 때, 그 연속 부분 최대합을 반환하는 함수를 작성하세요.

    왼쪽의 최대합, 오른쪽의 최대합을 구한 후

    왼쪽 + 오른쪽의 최대합 중 가장 큰 합을 반환
    왼쪽(mid -> 0) , 오른쪽(mid -> n)
    '''
    
    n = len(data)
    
    if n == 1 :
        return data[0]
    
    mid = n // 2
    
    left = getSubsum1(data[:mid])
    right = getSubsum1(data[mid:])
    
    Sum = 0
    
    leftSum = 0
    rightSum = 0
    
    '''
    break를 하지 않는 이유는
    n까지의 leftSum이 Sum 보다 크더라도
    n+1의 수를 더했을때 sum + n+1 > leftSum 일수 있기때문
    '''
    for i in range(mid-1, -1, -1):
        Sum += data[i]
        leftSum = max(Sum, leftSum)
    
    Sum = 0
    
    for i in range(mid, n):
        Sum += data[i]
        rightSum = max(Sum, rightSum)

    return max(left, right, leftSum+rightSum)

def getSubsum2(data) :
    '''
    n개의 숫자가 list로 주어질 때, 그 연속 부분 최대합을 반환하는 함수를 작성하세요.

    이전 까지의 최대 합이 현재 수보다 작다면 현재 수를 시작으로 하는 합보다 작다는 말
    즉 이전 sum < data[i] 작다면 sum = data[i]
    '''
    
    maxSum = []
    final_max = data[0]
    maxSum.append(data[0])
    
    for n in range(1, len(data)):
        maxSum.append(max(maxSum[n-1], 0) + data[n])
        final_max = max(final_max, maxSum[n])
            
    
    return final_max

data = [int(x) for x in input().split()]
print(getSubsum1(data))
print(getSubsum2(data))