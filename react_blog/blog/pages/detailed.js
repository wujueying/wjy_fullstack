import React,{useState} from 'react'
import Head from 'next/head'
import {Row, Col  ,Breadcrumb,Affix} from 'antd'
import {
  CalendarOutlined ,
  FolderOutlined,
  FireOutlined
} from '@ant-design/icons';

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/detailed.css'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'


const Detailed = (props) => {

  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer:renderer,
    gfm:true, // 启动GitHub样式的markdown
    pedantic:false, // markdown是否容错
    sanitize:false,  // 原始输出，忽略HTML标签
    tables: true,   // 支持GitHub形式的表格，必须打开gfm选项
    breaks: false,// 是否支持github的换行符
    smartList: true,
    highlight: function(code){ // 设置高亮显示
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(props.article_content)

  
  return (
    <>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
                <Breadcrumb.Item>xxxxx</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                React实战视频教程-技术胖Blog（更新第10集）
              </div>
              <div className="list-icon center">
                <span><CalendarOutlined />2019-06-23</span>
                <span><FolderOutlined />视频教程</span>
                <span><FireOutlined />5498人</span>
              </div>
              <div className="detailed-content">
               {html}
              </div>
            </div>
          </div>
        </Col>
  
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
              <div className="detailed-nav comm-box">
                <div className="nav-title">文章目录</div>
                <MarkNav
                  className="article-menu"
                  source={html}
                  ordered={false}
                />
              </div>
          </Affix>
        </Col>
      </Row>
        <Footer />
   </>
  )

}

Detailed.getInitialProps = async(context)=>{
  console.log(context.query.id)

  let id = context.query.id

  const promise = new Promise((resolve)=>{
    axios('http://127.0.0.1:7002/default/getArticleById').then(
      (res)=>{
        console.log(res)
        resolve(res.data.data[0])
      }
    )
  })

  return await promise
}

export default Detailed