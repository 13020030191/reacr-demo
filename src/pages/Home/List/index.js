import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Input } from 'antd'
import PageHeaderWrapper from '../../../components/PageHeaderWrapper'
import { getRouterData } from '../../../router/router'
import { getRoutes } from '../../../utils/utils'

class List extends Component {

  render () {
    const { location, match } = this.props
    const routerData = getRouterData()
    const routes = getRoutes(match.path, routerData)

    const mainSearch = (
      <div style={{textAlign: 'center'}}>
        <Input.Search
          placeholder="请搜索"
          enterButton="搜索"
          size="large"
          onSearch={value => {console.log(value)}}
          style={{width: 522}}
        />
      </div>
    )
    return (
      <PageHeaderWrapper
        title="搜索列表"
        content={mainSearch}
        tabActiveKey={location.pathname.replace(`${match.path}/`, '')}
      >
        <Switch>
          {
            routes.map(item => (
              <Route
                key={item.key}
                path={item.path}
                component={item.component}
                exact={item.exact}
              />
            ))
          }
        </Switch>
      </PageHeaderWrapper>
    )
  }
}

export default List
