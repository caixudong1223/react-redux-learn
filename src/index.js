import React from 'react';
import ReactDOM from 'react-dom';
import Index from './Demo'
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<Index />, document.getElementById('root'));
// registerServiceWorker();

// let appState = {
//     title: {
//         text: 'React.js 小书',
//         color: 'red',
//     },
//     content: {
//         text: 'React.js 小书内容',
//         color: 'blue'
//     }
// }

// function renderApp(appState, oldAppState = {}){

//     if(appState === oldAppState) return
//     console.log('render app...')

//     renderTitle(appState.title, oldAppState.title)
//     renderContent(appState.content, oldAppState.content)
// }

// function renderTitle(title, oldTitle = {}){
//     if(title === oldTitle) return
//     console.log('render title...')
//     const titleDOM = document.getElementById('title')
//     titleDOM.innerHTML = title.text
//     titleDOM.style.color = title.color
// }

// function renderContent(content, oldContent = {}){
//     if(content === oldContent) return
//     console.log('render content...')
//     const titleDOM = document.getElementById('content')
//     titleDOM.innerHTML = content.text
//     titleDOM.style.color = content.color
// }

// //定义一个reducer，初始化和switch case
// function reducer(state, action){ //所有对数据的操作必须通过 dispatch 函数
//     if(!state){ //初始化
//         return appState 
//     }

//     switch(action.type){ //计算新的state
//         case 'UPDATE_TITLE_TEXT':
//             return {// 构建新的对象并且返回
//                 ...state,
//                 title: {
//                     ...state.title,
//                     text: action.text
//                 }
//             }
//         case 'UPDATE_TITLE_COLOR':
//             return {
//                 ...state,
//                 title: {
//                     ...state.title,
//                     color: action.color
//                 }
//             }
//         default:
//             return state
//     }
// }

// const ADD_USER = 'ADD_USER'
// const DELETE_USER = "DELETE_USER"
// const UPDATE_USER = "UPDATE_USER"

// const usersReducer = (state = [], action) => { //state是一个存储用户信息的数组
//     switch (action.type) {
//         case ADD_USER:
//             return [...state, action.user]
//         case DELETE_USER:
//             return [...state.slice(0, action.index), ...state.slice(action.index+1)]
//         case UPDATE_USER:
//             return [...state.map((user, index) => {
//                 if(index === action.index){
//                     return {
//                         ...user,
//                         ...action.user
//                     }
//                 }
//                 else{
//                     return user
//                 }
//             })]
//         default:
//             return state
//     }
// }


// //生产store
// function createStore(reducer){ //专门生产这种 state 和 dispatch 的集合
//     //reducer 是不允许有副作用的。你不能在里面操作 DOM，也不能发 Ajax 请求，更不能直接修改 state，它要做的仅仅是 —— 初始化和计算新的 state。
//     let state = null
//     const listeners = []

//     const subscribe = (listener) => listeners.push(listener) //listener事件监听
//     const getState = () => state
//     const dispatch = (action) => {
//         state = reducer(state, action)
//         listeners.forEach((listener) => listener())
//     }

//     dispatch({}) // 初始化 state
//     return {getState, dispatch, subscribe}
// }

// const store = createStore(reducer)
// let oldAppState = store.getState()//缓存旧的appstate


// // 监听数据变化重新渲染页面
// store.subscribe(() => {
//     const newAppState = store.getState()
//     renderApp(newAppState, oldAppState)
//     oldAppState = newAppState
// }) //...后面不管如何 store.dispatch，都不需要重新调用 renderApp

// renderApp(store.getState())// 首次渲染页面


// // 后面可以随意 dispatch 了，页面自动更新
// store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' }) // 修改标题文本
// store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }) // 修改标题颜色
//renderApp(store.getState()) // 把新的数据渲染到页面上
// ...后面不管如何 store.dispatch，都不需要重新调用 renderApp