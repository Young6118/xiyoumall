/**
* TodoApp 模块
* @module
* @exports TodoApp
*/

import React from 'react'
import './todo.css'

/**
  * TodoApp 类，代表 todo 组件
  * @class
*/
class TodoApp extends React.Component {
  /**
  * @constructor
  * @praram {object} state - todo 的内容
  */
  constructor(props) {
    super(props)
    // 用 bind 来绑定 this
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      items: [],
      text: '',
    }
  }
  /**
  * 返回自定义 todo 组件
  * @returns {*}
  */
  render() {
    var buttonTitle = '添加第' + (this.state.items.length + 1) + ' 个 todo'
    return (
      <div className="todo-div">
      <h2>TODO</h2>
      <TodoList todos={this.state.items} />
      <div>
        <input onChange={this.handleChange} value={this.state.text} placeholder="输入事项" />
        <button onClick={this.handleSubmit}>{buttonTitle}</button>
      </div>
    </div>
    )
  }

  /**
  *handle the change of input
  * equals that you bind the input elelment with "change" event
  * must bind event, or you can't see the change of the input elelment
  * @todo handleChange
  */
  handleChange(e) {
    /**
    * state: the value of input
    * @var {state}
    */
    var state = {
      text: e.target.value
    }
    /**
    * items 不变动 setState 只改动 text
    * react 会在设置状态时重新调用 render
    × 所以需要重新将数据加上
    * @param {string} items 不变动 setState 只改动 text
    */
    this.setState(state)
  }

  /**
  * arow function bind this
  * @todo handleSubmit
  */

  handleSubmit = (e) => {
    var i = {
      text: this.state.text,
      /**
      * set time as id 确保唯一性
      * 为每一个 todo 设置一个不重复的数值
      * @constant id
      */
      id: Date.now()
    }
    this.setState((prevState) => {
      return {
        items: prevState.items.concat(i),
        text: ''
      }
    })
  }
}

/**
* TodoList 模块
* @module
*/

class TodoList extends React.Component {
  /**
  * TodoApp 传入参数 state 所以可以使用 props
  * @param {props}
  */
  render() {
    /**
    * map 需要有循环参数 key 比如 todo 的 id，方便 react 更新特定的数据
    * @method map
    */
    return (
      <ul>
        {this.props.todos.map(t => (
            <li key={t.id}>{t.text}</li>
          ))}
      </ul>
    )
  }
}

export default TodoApp
