import React,{Component,Fragment} from 'react'

class Xiaojiejie extends Component{

    constructor(props){
        // 在构造函数里初始化调用父类的值
        super(props)
        this.state={
            inputValue:'',
            list:['基础按摩','精油推背']
        }
    }
    render(){
        return(
            // flex
            <Fragment>
         
                <div>
                    {/* input加上value赋值进行绑定数据 */}
                    <input value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>  
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index) => {
                            return (
                                <li 
                                  key={index + item}
                                  onClick={this.deleteItem.bind(this,index)}
                                >
                                    {item}
                                </li>
                            )
                        })
                    }
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

    // 增加列表
    addList(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''  // 添加完毕是的inputValue的值为空
        })
    }

    // 删除列表项
    deleteItem(index){
        console.log(index)
    }


}

export default Xiaojiejie