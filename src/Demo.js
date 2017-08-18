import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Content from './Content'
// import {Provider} from './react-redux'
import {createStore}  from 'redux'
import {Provider} from 'react-redux'
import './index.css'


// function createStore(reducer) {
//     let state = null
//     let listeners = []

//     const subscribe = (listener) => listeners.push(listener)
//     const getState = () => state
//     const dispatch = (action) => {
//         state = reducer(state, action)
//         listeners.forEach((listener) => listener())
//     }

//     dispatch({}) //初始化state

//     return { getState, dispatch, subscribe }
// }

const themeReducer = (state, action) => {
    if (!state) return { themeColor: 'red' }

    switch (action.type) {
        case 'CHANGE_THEME_COLOR':
            return { ...state, themeColor: action.themeColor }
        default:
            return state
    }
}

const store = createStore(themeReducer)

class Index extends Component {
    // static childContextTypes = {
    //     store: PropTypes.object
    // }

    // getChildContext() {
    //     return { store }
    // }


    render() {
        return (
            <Provider store = {store}>
                <div>
                    <Header />
                    <Content />
                </div>
            </Provider>
        )
    }
}

export default Index