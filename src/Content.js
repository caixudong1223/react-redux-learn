import React, { Component, PropTypes } from 'react'
import ThemeSwitch from './ThemeSwitch'
// import {connect} from './react-redux'
import {connect} from 'react-redux'

class Content extends Component {
    static propTypes = {
        themeColor: PropTypes.string
    }
    // static contextTypes = {
    //     store: PropTypes.object
    // }

    // constructor() {
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

    // _updateThemeColor() {
    //     const { store } = this.context
    //     // console.log(store)
    //     const state = store.getState()
    //     // console.log(state)
    //     this.setState({ themeColor: state.themeColor })
    // }


    render() {
        return (
            <div>
                <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}

const mapStateProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

Content = connect(mapStateProps)(Content)

export default Content