import React, { Component, PropTypes } from 'react'
// import { connect } from './react-redux'
import {connect} from 'react-redux'

class ThemeSwitch extends Component {

    static propTypes = {
        themeColor: PropTypes.string,
        onSwitchColor: PropTypes.func
    }
    // static contextTypes = {
    //     store: PropTypes.object
    // }

    // constructor() {
    //     super()
    //     this.state = { themeColor: '' }
    // }

    // componentWillMount() {
    //     console.log('componentWillMount..........')
    //     const {store} = this.context        
    //     this._updateThemeColor()
    //     store.subscribe(() => this._updateThemeColor())
    // }

    // _updateThemeColor() {
    //     console.log('_updateThemeColor..........')
    //     const { store } = this.context
    //     const state = store.getState()
    //     this.setState({ themeColor: state.themeColor })
    // }

    handleSwitchColor(color) {
        // console.log('handleSwitchColor.......'+ color)
        // const {store} = this.context
        // store.dispatch({
        //     type: 'CHANGE_THEME_COLOR',
        //     themeColor: color
        // })
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }

    }

    render() {
        return (
            <div>
                <button style={{ color: this.props.themeColor }} onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
                <button style={{ color: this.props.themeColor }} onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({ type: 'CHANGE_THEME_COLOR', themeColor: color })
        }
    }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch