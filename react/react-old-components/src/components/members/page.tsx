import * as React from 'react';
import {memberAPI} from '../../api/member';
// <> 泛型 泛指内部的关键数据类型
interface Props {

}
interface State {
    members: []
}
export class MembersPage extends React.Component<Props, State> {
    constructor(props){
        super(props);
        this.state = {
            members: []
        }
    }
    // 请求
    public componentDidMount(){
        // 职责分离
        memberAPI.fetchMembers()
          .then(members => {
              console.log(members);
          })
    }
    render(){
        return (
            <div className="row">
                <h2>Member Page</h2>
                <table className="table">
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}