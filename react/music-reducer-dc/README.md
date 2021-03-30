- 数据传递有哪些方案
  1. reducer 缺点是复杂
  2. props 手续多 


- createContext  reducer  的异同 
  createContext   createStore  
  createContext.Provider  createStore.Provider
  value                          store
  useContext                  架构更加细致
  
  userInfo  我们的用户信息
  1. useEffect -> dispatch action {changeUserInfo ,payload} ->
  api -> 163 music api 
  