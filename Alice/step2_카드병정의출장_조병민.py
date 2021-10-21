def solution() :
    inParam = input().split(' ')
    
    n = int(inParam[0])
    m = int(inParam[1])
    
    #1~n까의 수의 배열
    lst = [i for i in range(1,n+1)] 
    
    for i in range(len(lst)) :
        # 수의 배열, 해당 i의 수, 숫장장식 수(맨 앞의 수는 i이기 때문에 -1 해준다)
        reculsive_func(lst[i+1:len(lst)], [lst[i]], m)  

def reculsive_func(lst, f, m) :
    if len(f) == m :
        print(' '.join(map(str,f)))
        return
        
    for i in range(len(lst)) :
        reculsive_func(lst[i+1:len(lst)], f+[lst[i]], m)
    
solution()