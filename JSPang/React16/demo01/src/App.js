import React,{Component} from 'react'

class App extends Component{
    render(){
        return(
            // JSX 就是在react里面写HTML的代码
            <ul className="my-list">
                <li>{false?'JSPang.com':'技术胖'}</li>
                <li>I love React</li>
            </ul>
        )
        // var child1 = React.createElement('li',null,'JSPang.com')
        // var child2 = React.createElement('li',null,'I Love React')
        // var root = React.createElement('ul',{className:'my-list'},child1,child2)
    }
}
export default App