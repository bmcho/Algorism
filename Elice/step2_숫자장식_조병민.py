# def solution() :
#     inParam = input().split(' ')
    
#     n = int(inParam[0])
#     m = int(inParam[1])
    
#     #1~n까의 수의 배열
#     list_n = [i for i in range(1,n+1)] 
    
#     for i in range(1,n+1) :
#         # 수의 배열, 해당 i의 수, 숫장장식 수(맨 앞의 수는 i이기 때문에 -1 해준다)
#         reculsive_func(list_n, [i], m)  

# def reculsive_func(lst, f, m) :
#     if len(f) == m :
#         print(' '.join(map(str,f)))
#         return
        
#     for i in range(1,len(lst)+1) :
#         reculsive_func(lst, f+[i], m)
    
# solution()



def DFS(L):
    if L == m:
        # for i in range(m):
        #     print(arr[i],end=' ') # '1 2 3 4' -> '1 2 3 4 ' 로 나와서 오류
        print(' '.join(map(str,arr))) # 숫자형 배열 -> 문자열 
        return 
    for i in range(1,n+1):
            arr[L]=i # L4
            DFS(L+1)
            
n,m = map(int, input().split())
arr = [0] * m 
DFS(0)