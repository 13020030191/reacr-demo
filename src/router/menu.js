import { isUrl } from '../utils/utils'

const menuData = [
  {
    name: '第一列表',
    icon: 'home',
    path: 'home',
    children: [
      {
        name: '列表页',
        path: 'list',
      },
      {
        name: '详情页',
        path: 'detail',
      },
      {
        name: '编辑页',
        path: 'edit',
      },
    ],
  },
  {
    name: '瞎玩首页1',
    icon: 'home',
    path: 'home1',
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    hideInMenu: true,
    children: [
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true,
      },
    ],
  },
]

function formatter (data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item
    if (!isUrl(path)) {
      path = parentPath + item.path
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    }
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`,
        item.authority)
    }
    return result
  })
}

export const getMenuData = () => formatter(menuData)
