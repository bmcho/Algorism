"""
2. 시간표 구성
다음의 기능을 수행하는 함수 make_timetable을 Python 소스코드로 작성하세요(JavaScript로 작성도
가능합니다). 문제당 하나의 파일을 사용하세요.
* 복잡한 데이터와 높은 난도의 문제입니다. 해결 가능한 부분만 작성하셔도 괜찮습니다.
상황
1. 저는 카페 사장입니다.
2. 저희 카페는 매주 월-금 오전 10시부터 오후 6시까지 영업합니다.
3. 저 혼자로는 벅차서, 파트타이머를 씁니다. 제가 커피를 만들고, 파트타이머 1명이 주문을 받으면
모든 영업시간에 차질 없이 영업할 수 있습니다.
4. 저희 카페의 파트타이머는 A, B, C, D 총 4명이고, 이 4명이 교대해가면서 주문 받는 일을 하고
있습니다.
5. A, B, C, D는 각자 매주 일할 수 있는 시간이 다릅니다. 그래서 저는 파트타이머 4명의
업무가능시간을 매주 일요일에 받아서, 다음주의 근무 시간표를 만들고 있습니다.
조건
영업시간이 매주 월-금 10:00 ~ 18:00인 이 카페에서, 파트타이머 A, B, C, D의 이번주 근무
시간표를 작성하는 프로그램을 만들려고 합니다. Input으로 입력받은 각 파트타이머의
업무가능시간을 통해,
1) 시간표를 만들어야 하고
2) 알바생이 없는 시간을 최소로 줄여야하며
3) 이번주 중 아무도 근무할 수 없는 시간을 알아내야 합니다.
a) 단, 근무 가능한 알바생이 있으나, 10시간 초과로 근무가 불가능한 경우 아래
방식 중 선택하여 출력 가능합니다.
i) 아무도 근무할 수 없는 시간으로 취급
ii) 초과 근무로 근무 불가한 시간으로 취급
Input
- make_timetable의 인자로 각 파트타이머의 업무가능시간 리스트를 전달합니다.
- 입력 예시: make_timetable(a_time: list, b_time: list, c_time: list, d_time: list)
- a_time: 아르바이트생 A의 다음주 업무가능시간
- b_time: 아르바이트생 B의 다음주 업무가능시간
- c_time: 아르바이트생 C의 다음주 업무가능시간
- d_time: 아르바이트생 D의 다음주 업무가능시간
['10:00~14:00', '15:00~18:00', '11:00~13:00;14:00~16:00', '10:00~11:00', '15:00~18:00']
['11:00~14:00', '14:00~16:00', '16:00~18:00', '10:00~11:00;12:00~13:00', '14:00~16:00']
['14:00~16:00', '16:00~18:00', '10:00~12:00', '12:00~14:00', '14:00~16:00']
['14:00~18:00', '10:00~18:00', '12:00~14:00', '14:00~15:00;16:00~17:00', '10:00~12:00']
- 업무가능시간 리스트는 월~금 순서이며, 리스트의 길이는 5입니다(업무 불가능한 일자 없음).
- 하루 중 시간을 쪼개어 업무 가능한 경우 ‘;’로 시간을 구분합니다.
- 업무가능시간은 시간 단위로만 제공합니다. (11:30 같은 분 단위는 없음)
Output
- 각 알바생은 일주일 동안 10시간을 초과하여 근무할 수 없습니다.
- 자유 형식으로 출력합니다
"""

a_time = ['10:00~14:00', '15:00~18:00', '11:00~13:00;14:00~16:00', '10:00~11:00', '15:00~18:00']
b_time = ['11:00~14:00', '14:00~16:00', '16:00~18:00', '10:00~11:00;12:00~13:00', '14:00~16:00']
c_time = ['14:00~16:00', '16:00~18:00', '10:00~12:00', '12:00~14:00', '14:00~16:00']
d_time = ['14:00~18:00', '10:00~18:00', '12:00~14:00', '14:00~15:00;16:00~17:00', '10:00~12:00']

workers = [0,0,0,0]
work_time = [0,0,0,0]

# 10:00~14:00  --> 10,11 로 나누어 다차원 배열로 관리 할 수 있겠끔 변환시킨다
def split_time_to_hour_and_convert_dimensional_list(time_table: list, temp_time_list: list):
    # a: 1, b: 2, c: 3, d: 4
    for i in range(1,len(time_table)+1):
        table = time_table[i-1]

        for j in range(len(table)):
            times = table[j].split(';')

            for time in times:
                h_split = time.split('~')
                #10시 시작이기때문에 - 10을 해주자
                h_start = int(h_split[0][:2]) - 10
                h_end = int(h_split[1][:2]) - 10

                for k in range(h_start,h_end):
                    # j - 요일 / k - 시간대 / i - 알바생
                    temp_time_list[j][k].append(i)
                    work_time[i-1] += 1


# impossible = True 시 아무도 불가능한 시간 까지 체크
# woker 하나만 있는 시간대를 체크 한다.
def check_able_time(time_table:list, temp_time_list:list, impossible=False):
    for i in range(5):
        for j in range(8):
            if len(temp_time_list[i][j]) == 1:
                
                woker = temp_time_list[i][j][0]
                temp_time_list[i][j].remove(woker)

                if time_table[i][j] == 0:
                    time_table[i][j] = woker
                    workers[woker-1] += 1
                    work_time[woker-1] -= 1

                elif time_table[i][j] != 0 and workers[time_table[i][j]-1] > 10:

                    workers[time_table[i][j]-1] -= 1

                    time_table[i][j] = woker
                    workers[woker-1] += 1
                    work_time[woker-1] -= 1
            
            elif len(temp_time_list[i][j]) == 0 and impossible:
                time_table[i][j] = -1

# 10시간 초과한 woker를 temp_time_list에서 삭제
def delete_over_woker(worker: int, temp_time_list: list):
    for i in range(5):
        for j in range(8):
            if worker in temp_time_list[i][j]: 
                temp_time_list[i][j].remove(worker)
                work_time[worker-1] -= 1

def make_timetable(a_time: list, b_time: list, c_time: list, d_time: list):
    # 1주일은 8시간 5일
    # 1. 아무도 근무 할 수 없는 시간 파악
    # 2. 최대의 효율을 내기 위해서는 a~d까지 겹치지 않는 시간대를 체크
    # 3. 그 외 시간대를 10시간 이내로 파악

    # 최종 time table
    time_table = [[0 for _ in range(8)] for _ in range(5)]
    
    # 각 요일 시간대는 list로 관리하자
    # ex) 월요일 10시 타임 - [0] - 0번 인덱스
    temp_time_list = [[[] for _ in range(8)] for _ in range(5)]

    # 알바생들의 업무 가능 시간을 시간별로 끊고 총 가능 업무시간을 return
    split_time_to_hour_and_convert_dimensional_list([a_time,b_time,c_time,d_time], temp_time_list)

    # 우선 혼자 가능한 시간 + 아무도 불가능한 시간 체크
    check_able_time(time_table, temp_time_list, True)
    
    # 여기서 부터가 문제
    # 남은 업무시간이 제일 적게 남은 사람부터 채워주자

    for _ in range(4):
        # 업무시간 초과 된 사람 temp_time_table에서 제거
        if workers[0] >= 10 and work_time[0] != 0 : delete_over_woker(1,temp_time_list)
        if workers[1] >= 10 and work_time[1] != 0 : delete_over_woker(2,temp_time_list)                                           
        if workers[2] >= 10 and work_time[2] != 0 : delete_over_woker(3,temp_time_list)
        if workers[3] >= 10 and work_time[3] != 0 : delete_over_woker(4,temp_time_list)

        # # 위 작업 후 다시 한번 혼자 가능한 시간을 체크
        # check_able_time(time_table, temp_time_list)

        # workers, work_time 둘다 제일 작은 woker 부터
        next_woker = 0
        min_work_time = 99
        min_worker = 99
        for i in range(4):
            if workers[i] < min_worker and work_time[i] < min_work_time and work_time[i] != 0:
                min_worker = workers[i]
                min_work_time = work_time[i]
                next_woker = i+1

        # time table 채우기:
        for i in range(5):
            for j in range(8):
                if next_woker in temp_time_list[i][j]:
                    temp_time_list[i][j].remove(next_woker)

                    if time_table[i][j] == 0:

                        time_table[i][j] = next_woker
                        workers[next_woker-1] += 1
                        work_time[next_woker-1] -= 1

                    elif time_table[i][j] != 0: 
                        if workers[time_table[i][j]-1] > 10:

                            workers[time_table[i][j]-1] -= 1

                            time_table[i][j] = next_woker
                            workers[next_woker-1] += 1
                            work_time[next_woker-1] -= 1
                        
                        #현재 지정되어있는 알바생의 시간이 더 많으면 교체
                        elif workers[time_table[i][j]-1] > workers[next_woker-1]:
                            workers[time_table[i][j]-1] -= 1

                            time_table[i][j] = next_woker
                            workers[next_woker-1] += 1
                            work_time[next_woker-1] -= 1


    # 근무 가능한 알바생 but 10시간 초과 이 조건에 대한 기준을 모르겠다.
    # 나는 뒤에서 부터 처리하는걸로
    for i in range(4):
        if workers[i] < 11: continue

        worker = i + 1
        convert_work = workers[i] - 10
        break_flag = False
        for i in range(4,-1,-1):
            for j in range(7,-1,-1):
                if time_table[i][j] == worker:
                    time_table[i][j] = -2
                    convert_work -= 1
                    if convert_work == 0:
                        break_flag = True
                        break
            if break_flag: break

    for t in time_table:
        print(t)

make_timetable(a_time, b_time, c_time, d_time)

