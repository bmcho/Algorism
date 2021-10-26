# 함정 발동

# 8 * 8개의 방으로 이루어진 정사각형 모양의 미로가 있습니다. 이 미로에는 함정이 설치되어 있습니다.
# 함정의 위치는 가장 왼쪽 위 칸 (0, 0)부터 시작하여 한 칸씩 번갈아 모든 칸에 설치되어 있다고 합니다.
# 미로의 각 방에는 1명의 사람이 있거나 없을 수 있습니다. 사람들의 위치가 주어질 경우, 몇 명의 사람이 함정에 걸릴지 구하는 프로그램을 작성하세요.
# 단, 함정이 있는 방에 있는 사람은 항상 함정에 걸린다고 합니다.

bomb = [[0 for _ in range(8)] for _ in range(8)]

for r in range(8):
    start = 0
    if r % 2 == 1:
        start = 1
        
    for c in range(start,8, 2):
        bomb[r][c] = 1
        
cnt = 0

for r in range(8) :
    h = input()
    for c in range(8) :
        if bomb[r][c] == 1 and h[c] == 'H' :
            cnt += 1   
            
print(cnt)