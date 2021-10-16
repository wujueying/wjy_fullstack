import React from 'react';
import { Menu } from 'antd';
import styles from './SideMenu.module.css';
import {sideMenuList} from './mockup';
import { GifOutlined } from '@ant-design/icons'


export const SideMenu: React.FC = () => {
    return <Menu mode="vertical" className={styles['side-menu']}>
        {
            sideMenuList.map((item,index)=>{
                return <Menu.SubMenu
                  key={`side-menu-${index}`}
                  title={<span><GifOutlined />{item.title}</span>}
                >
                    {
                        item.subMenu.map((m,index) => {
                            return <Menu.SubMenu
                                key={`side-subMenu-${index}`}
                                title={<span><GifOutlined />{m.title}</span>}
                            >
                                {
                                    m.subMenu.map((m,index) => {
                                        return <Menu.Item>
                                            <span><GifOutlined />{m}</span>
                                        </Menu.Item>
                                    })
                                }
                            </Menu.SubMenu>
                        })
                    }
                </Menu.SubMenu>
            })
        }
    </Menu>
}