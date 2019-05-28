import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Debounce from 'lodash-decorators/debounce'
import { Menu, Icon, Spin, Dropdown, Avatar, Divider } from 'antd'

import styles from './index.less'

class GlobalHeader extends Component {
  componentWillUnmount () {
    this.triggerResizeEvent.cancel()
  }

  //获取notice列表
  // getNoticeData = (notices) => {
  //   if (notices.length === 0) {
  //     return {}
  //   }
  //   const newNotices = notices.map(notice => {
  //     const newNotice = { ...notice }
  //     if (newNotice.datetime) {
  //       newNotice.datetime = moment(notice.datetime).fromNow()
  //     }
  //     // transform id to item key
  //     if (newNotice.id) {
  //       newNotice.key = newNotice.id
  //     }
  //     if (newNotice.extra && newNotice.status) {
  //       const color = {
  //         todo: '',
  //         processing: 'blue',
  //         urgent: 'red',
  //         doing: 'gold',
  //       }[newNotice.status]
  //       newNotice.extra = (
  //         <Tag color={color} style={{ marginRight: 0 }}>
  //           {newNotice.extra}
  //         </Tag>
  //       )
  //     }
  //     return newNotice
  //   })
  //   return groupBy(newNotices, 'type')
  // }

  //左侧菜单展开收缩
  toggle = () => {
    const { collapsed, onCollapse } = this.props
    onCollapse(!collapsed)
    this.triggerResizeEvent()
  }

  @Debounce(600)
  
  triggerResizeEvent () {
    const event = document.createEvent('HTMLEvents')
    event.initEvent('resize', true, false)
    window.dispatchEvent(event)
    console.log('监听窗口事件')
  }

  onClear = (tabTitle) => {
    console.log(tabTitle)
  }

  render () {
    const {
      currentUser = {},
      collapsed,
      isMobile,
      logo,
      onMenuClick,
    } = this.props
    console.log(this.props)
    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        {/* <Menu.Item key='userCenter'>
          <Icon type="user"/>个人中心
        </Menu.Item>
        <Menu.Item key='userSettings'>
          <Icon type="setting"/>个人设置
        </Menu.Item>
        <Menu.Item key="triggerError">
          <Icon type="close-circle"/>触发报错
        </Menu.Item> */}
        <Menu.Item key="logout">
          <Icon type="logout"/>退出登录
        </Menu.Item>
      </Menu>
    )
    // const noticeData = this.getNoticeData(notices)
    return (
      <div className={styles.header}>
        {
          isMobile && [
            <Link to="/" className={styles.logo} key="logo">
              <img src={logo} alt="logo" width="32"/>
            </Link>,
            <Divider type="vertical" key="line"/>,
          ]
        }
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <div className={styles.right}>
          {
            currentUser.name ? (
              <Dropdown overlay={menu}>
                <span className={`${styles.action} ${styles.account}`}>
                  <Avatar size="small" className={styles.avatar}
                          src={currentUser.avatar}/>
                  <span className={styles.name}>{currentUser.name}</span>
                </span>
              </Dropdown>
            ) : (
              <Spin size="small" style={{ marginLeft: 8 }}/>
            )
          }
        </div>
      </div>
    )
  }
}

export default GlobalHeader



