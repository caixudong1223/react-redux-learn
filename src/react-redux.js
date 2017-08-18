import React, { Component, PropTypes } from 'react'

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor(){
            super()
            this.state = {
                allProps : {} //用来保存需要传给被包装组件的所有的参数
            }
        }

        componentWillMount() {
            const { store } = this.context
            this._updateProps()
            store.subscribe(() => this._updateProps())
        }

        _updateProps (){ //生命周期 componentWillMount 会调用调用 _updateProps 进行初始化，然后通过 store.subscribe 监听数据变化重新调用 _updateProps。
            const { store } = this.context
            let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props): {} // 额外传入 props，让获取数据更加灵活方便 
            //让 connect 返回新组件和被包装的组件使用参数保持一致,会把所有传给 Connect 的 props 原封不动地传给 WrappedComponent
            
            let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) :{}
            
            this.setState({
                allProps: { // 整合普通的 props 和从 state 生成的 props
                    ...stateProps,
                    ...this.props,
                    ...dispatchProps
                }
            })
        }

        render() {
            const {store} = this.context
            let stateProps = mapStateToProps(store.getState())
            // {...stateProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return <WrappedComponent {...this.state.allProps}/>
        }
    }
    return Connect
}

export class Provider extends Component {
    static PropTypes = {
        store: PropTypes.object,
        children: PropTypes.any
    }

    static childContextTypes = {
        store: PropTypes.object
    }

    getChildContext (){
        return {
            store: this.props.store
        }
    }

    render(){
        return (
            <div>{this.props.children}</div>
        )
    }
}
