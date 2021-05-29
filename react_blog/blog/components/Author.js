import {Avatar,Divider} from 'antd'
import {GithubOutlined, QqOutlined, WechatOutlined  } from '@ant-design/icons';
import '../static/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://iknow-pic.cdn.bcebos.com/503d269759ee3d6dca0839db49166d224e4aded0" /></div>
            <div className="author-introduction">
                <h2>Time_</h2>
                奋斗中的前端练习生，妄图卖码为生，在这里分享技术
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account"/>
                <Avatar size={28} icon={<QqOutlined />} className="account"/>
                <Avatar size={28} icon={<WechatOutlined />} className="account"/>

            </div>
        </div>
    )

}

export default Author