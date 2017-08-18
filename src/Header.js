import React, { Component, PropTypes } from 'react';
// import {connect} from './react-redux'
import {connect} from 'react-redux'


class Header extends Component {
    static PropTypes = {
        themeColor: PropTypes.string
    }   
    // static contextTypes = {
    //     store: PropTypes.object 
    // }

    // constructor(){
    //     super()
    //     this.state = {
    //         themeColor: ''
    //     }
    // }

    // componentWillMount() {
    //     const {store} = this.context
    //     this._updateThemeColor()
    //     store.subscribe(() => this._updateThemeColor())
    // }

    // _updateThemeColor(){
    //     const { store } = this.context  //context中获取store
    //     const state = store.getState()  //获取状态对象
    //     this.setState({
    //         themeColor: state.themeColor
    //     })
    // }


    //++++++
   


    render() {
        return (
            <h1 style={{ color: this.props.themeColor }}>React.js 小书</h1>
        )
    }
}


const mapStateProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Header = connect(mapStateProps)(Header)

export default Header;