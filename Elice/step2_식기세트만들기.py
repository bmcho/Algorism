'''
식기 세트 만들기
엘리스 공장에서는 앵무새 공장에서 숟가락과 젓가락을 배송받아 식기 세트를 만듭니다.
앵무새 공장에서 식기를 받아 올 때 숟가락과 젓가락이 섞여 있는 채로 받습니다.
식기 세트는 숟가락 1개 젓가락 2개가 들어갑니다.
그런데 앵무새 공장의 실수로 인해 엘리스 공장으로 식기가 주문한 것보다 많은 식기가 배송되었습니다.
그래서 엘리스 공장은 식기를 반납하려고 합니다.
※반납할 식기의 수는 숟가락과 젓가락 개수의 합이며, 엘리스 공장에서 원하는 대로 숟가락과 젓가락의 개수를 조정하여 반납하면 됩니다.
엘리스 공장은 가지고 있는 식기를 활용해 가능한 한 많이 식기 세트를 만들고 싶어 합니다.
최대로 만들 수 있는 식기 세트의 수를 구하는 프로그램을 작성하세요.
[입력]
첫번째 줄에 젓가락의 개수 C, 숟가락의 개수 S, 반납 할 식기의 개수 E를 차례로 입력합니다.
(0≤C≤100)(0≤C≤100)
(0≤C≤100)
(0≤S≤100)(0≤S≤100)
(0≤S≤100)
(0≤E≤S+C)(0≤E≤S+C)
(0≤E≤S+C)
[출력]
만들 수 있는 식기의 최댓값을 출력합니다.
[입력 예시]
50 40 4
[출력 예시]
25
'''

c, s, e = map(int,input().split())

'''
제외 없이 만들수 있는 최대 세트수
온전히 한세트를 제외하려면 필요한 수 3개
'''
cs = min(c//2,s)
'''
최대로 만들었을 때의 숟가락과 젓가락의 남은수
'''
rc = abs(cs*2 - c)
rs = abs(cs - s)

rcse = abs(rc + rs - e)

if rcse >= 0 :
    print(cs)
else :
    ee = e//3
    print(cs-ee)
    
