import React,{Component,Fragment} from 'react'

class Xiaojiejie extends Component{

    constructor(props){
        // 在构造函数里初始化调用父类的值
        super(props)
        this.state={
            inputValue:'jspang',
            list:[]
        }
    }
    render(){
        return(
            // flex
            <Fragment>
         
                <div>
                    {/* input加上value赋值进行绑定数据 */}
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>  
                    <button>增加服务</button>
                </div>
                <ul>
                    <li>头部按摩</li>
                    <li>精油推背</li>
                </ul>
        
            </Fragment>
        )
    }

    inputChange(e){
        // console.log(this)
        // this.setState 不是固定写法，只是这个写法性能最佳最好
        this.setState({
            inputValue:e.target.value
        })

    }
}

export default Xiaojiejie