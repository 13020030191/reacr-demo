import { asyncComponent } from '../components/AsyncComponent'


// 登录注销注册
const UserLayout = asyncComponent(() => import(/*webpackChunkName:'userLayout'*/'../layouts/UserLayout'))
const BasicLayout = asyncComponent(() => import(/*webpackChunkName:'basicLayout'*/'../layouts/BasicLayout'))
const Login = asyncComponent(() => import(/*webpackChunkName:'login'*/'../pages/User/Login'))
const Register = asyncComponent(() => import(/*webpackChunkName:'register'*/'../pages/User/Register'))
const RegisterResult = asyncComponent(() => import(/*webpackChunkName:'registerResult'*/'../pages/User/RegisterResult'))

// 报错页面
const Three = asyncComponent(() => import(/*webpackChunkName:'three'*/'../pages/Exception/403'))
const Four = asyncComponent(() => import(/*webpackChunkName:'four'*/'../pages/Exception/404'))
const Five = asyncComponent(() => import(/*webpackChunkName:'five'*/'../pages/Exception/500'))
const TriggerException = asyncComponent(() => import(/*webpackChunkName:'triggerException'*/'../pages/Exception/TriggerException'))

// home
const List = asyncComponent(() => import('../pages/Home/List'))
const Detail = asyncComponent(() => import('../pages/Home/Detail'))
const Edit = asyncComponent(() => import('../pages/Home/Edit'))
const Home1 = asyncComponent(() => import('../pages/Home/Home1'))

export const getRouterData = () => {
  return {
    '/': {
      name: '首页',
      component: BasicLayout,
    },
    '/home/list': {
      name: '列表页',
      component: List
    },
    '/home/detail': {
      name: '详情页',
      component: Detail
    },
    '/home/edit': {
      name: '编辑页',
      component: Edit
    },
    '/home1': {
      name: '瞎玩',
      component: Home1
    },
    '/exception/403': {
      name: '403',
      component: Three,
    },
    '/exception/404': {
      name: '404',
      component: Four,
    },
    '/exception/500': {
      name: '500',
      component: Five,
    },
    '/exception/trigger': {
      name: 'trigger',
      component: TriggerException,
    },
    '/user': {
      name: '账户',
      component: UserLayout,
    },
    '/user/login': {
      name: '登录',
      component: Login,
    },
    '/user/register': {
      name: '注册',
      component: Register,
    },
    '/user/register-result': {
      name: '注册结果',
      component: RegisterResult,
    },
  }
}
