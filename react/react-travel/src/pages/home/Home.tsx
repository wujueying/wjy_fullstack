import React from 'react';
import { Header, Footer, SideMenu, Carousel, ProductCollection } from '../../components';
import styles from './Home.module.css';
import { Row, Col, Typography } from 'antd';
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import { productList1, productList2, productList3 } from '../../mockups'


export class HomePage extends React.Component {
    render (){
        return (
            <div className="App">
                <Header/>
                {/* 内容 */}
                <div className={styles['page-content']}>
                    <Row style={{ marginTop: 20 }}>
                        <Col span={6}>
                        <SideMenu />
                        </Col>
                        <Col span={18}>
                        <Carousel />
                        </Col>
                    </Row>
                    <ProductCollection 
                        title={
                            <Typography.Title level={1} type="warning">爆款推荐</Typography.Title>
                        }
                        sideImage={sideImage}
                        products={productList1}
                    />
                    <ProductCollection 
                        title={
                            <Typography.Title level={2} type="warning">新品上市</Typography.Title>
                        }
                        sideImage={sideImage2}
                        products={productList2}
                    />
                    <ProductCollection 
                        title={
                            <Typography.Title level={3} type="warning">国内游推荐</Typography.Title>
                        }
                        sideImage={sideImage3}
                        products={productList3}
                    />
                </div>
                <Footer/>
            </div>
        )
    }
}