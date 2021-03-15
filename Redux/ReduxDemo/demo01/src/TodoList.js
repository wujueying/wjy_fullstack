import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'

const data=[
    '早上9点起床',
    '早上十点去上傻逼职业规划课',
    '晚上去吃香锅鹅',
    '晚上七点去上课'
    
];

class TodoList extends Component {
   
    render() {
        return (
            <div style={{margin:'10px'}}>
                <div >
                    <Input 
                    placeholder='Write Something' 
                    style={{ width:'250px',marginRight:'10px'}} 
                    />
                    <Button type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={data}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}

                    />
                </div>
            </div>
        );
    }
}

export default TodoList;