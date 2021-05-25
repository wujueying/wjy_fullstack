- react 性能优化
   三种方式  旧方式  
   React hooks  带来了新的方式  
   1. shouldComponentUpdate 
   2. React.PureComponent
   3. React.memo 
   4. useEffect 
   5. useMemo
   6. useCallback   
   7. React.Lazy  


- 父子组件
   父组件 setState 
   子组件，无辜的被 更新，
    
   渲染  更新   

- React组件受到 state/props的影响，默认行为是state每次发现变化，组件都会重新渲染
     shouldComponentUpdate true 默认 |  false  跳过更新 
     render -> createElement(element) -> vdom -> {type:'div'}    

