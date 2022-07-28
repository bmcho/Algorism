"""
1. 랜덤 조합
다음의 기능을 수행하는 함수 mix_members 를 Python 소스코드로 작성하세요(JavaScript로 작성도
가능합니다). 문제당 하나의 파일을 사용하세요.

상황:
사내의 팀원들 전체를 대상으로 랜덤한 조를 구성하려고 합니다. 한 조는 최소 5명, 최대 7명으로
구성하고, 조의 개수는 최소화해야 합니다
"""
from collections import defaultdict
import random

def mix_members(m):
    
    # 우선 리스트가 최소 10개 나오나 확인, 5명 으로 비교하면됨
    # m이 멤버목옥으로 들어왔다면 len()으로 확인가능
    if m // 5 < 10 or m > 700:
        return 'failure'

    # 멤버이름은 숫자로 대체
    members = [i for i in range(m)]
    mem_dict = defaultdict(list)

    # 먼저 7명으로 짤수 있는 최대의 조 편성 수,10개 미만이면 생각해 볼 필요가 있음
    max_seven = m // 7

    if max_seven < 10:
        # 각 조마다 5명씩 먼저 넣는다
        for i in range(1,11):
            for _ in range(5):
                out_mem = random.choice(members)
                members.remove(out_mem)
                mem_dict[f'{i}조'].append(out_mem)

            # 나머지 멤버 넣어주기
            group_cnt = 1
            while members:
                if len(mem_dict[f'{group_cnt}조']) < 7: 
                    out_mem = random.choice(members)
                    members.remove(out_mem)
                    mem_dict[f'{group_cnt}조'].append(out_mem)
                else: group_cnt += 1
    else:
        
        # 7명만으로 조를 꾸릴 수 있는 경우
        if not m % 7:
            for i in range(1,(m//7)+1):
                for _ in range(7):
                    out_mem = random.choice(members)
                    members.remove(out_mem)
                    mem_dict[f'{i}조'].append(out_mem)
        else: 
            # 7명, 6명, 5명 조 수를 먼저 구하자
            temp_m = m
            q_7, r = divmod(temp_m,7)
            q_5,q_6 = 0, 0

            # 나머지에 대해 5,6,11에 대해 나머지를 구해본다
            while True:
                # if not r % 11: # 11의 경우에는 5,6 조가 하나씩밖에 나올 수 없다
                #     q_5,q_6 = 1, 1
                #     break
                if r % 6 > 0 and not r % 6 % 5: # 6의 나머지가 5의 배수일 때
                    q_6 = r // 6
                    q_5 = r % 6 // 5
                    break
                elif not r % 6:
                    q_5 = r // 6
                    break
                elif not r % 5:
                    q_5 = r // 5
                    break

                q_7 -= 1
                r += 7

            """
            위와 같은 로직으로 구현 했을 경우 멤버의 수가 128명일 시 

            7명 조: 15조
            6명 조: 3조
            5명 조: 1조 
            마지막 6,5명 조에 대해 6,6,6,5가 아닌 7,6,5,5 가 될 수 도 있지만 
            최소한의 조가 나오되 그 안에서는 5명인 조가 최소한으로 나왔으면하는 의도로 위 로직을 구현
            """

            group_cnt = 1
            for _ in range(1,q_7+1):
                for _ in range(7):
                    out_mem = random.choice(members)
                    members.remove(out_mem)
                    mem_dict[f'{group_cnt}조'].append(out_mem)
                group_cnt += 1
            
            for _ in range(1,q_6+1):
                for _ in range(6):
                    out_mem = random.choice(members)
                    members.remove(out_mem)
                    mem_dict[f'{group_cnt}조'].append(out_mem)
                group_cnt += 1

            for _ in range(1,q_5+1):
                for _ in range(5):
                    out_mem = random.choice(members)
                    members.remove(out_mem)
                    mem_dict[f'{group_cnt}조'].append(out_mem)
                group_cnt += 1

    return mem_dict

m = int(input())

print(mix_members(m))