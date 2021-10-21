def solution() :
    [n,k] = map(int,input().split(' '))
    
    '''
        #형사가 이동한 횟수를 표기하기 위한 배열이며 이미 경유한 section도 타나낸다
        #range를 0~100001으로 준 이유
            - index값은 0부터 시작함으로 0,10000일때 0~99999가 생성이됨
              풀이를 편하게 하기 위해
    '''
    sector = [0 for i in range(0,100001)]
    
    q = []
    q.append(n)
    
    while len(q) > 0 :
        idx = q.pop(0)
        
        if idx == k :
            break
        else :
        
            '''
                #형사가 이동할수 있는 section 은 100000보다 같거나 작아야하며 0보다 커야한다
                    * 3, + 1 < 100001(<= 100000)
                    - 1 > 0(>= 1)

                #형사가 범인보다 앞에 있다면(n > k) 앞으로 갈 필요가 없다
                    (n > k) => * 3, + 1 (x)
                
                #형사가 범인보다 뒤에 있다면(n < k) 뒤로 갈 필요가 없다
                    (n < k) => -1 (x)
                
                #이미 경유한 section이라면 queue에 넣을 필요가 없다.
            '''

            '''공간이동 o'''
            if idx * 3 < 100001 and sector[idx * 3] == 0 and idx * 3 < k + 1 :
                sector[idx * 3] = sector[idx] + 1 
                q.append(idx * 3) 

            '''#공간이동 x'''
            '''뒤로 이동'''
            if idx - 1 > 0 and sector[idx - 1] == 0 and idx > k - 1:
                sector[idx - 1] = sector[idx] + 1
                q.append(idx - 1) 
            '''앞으로 이동'''
            if idx + 1 < 100001 and sector[idx + 1] == 0 and idx < k + 1:
                sector[idx + 1] = sector[idx] + 1
                q.append(idx + 1)
    
    print(sector[k])
    
solution()