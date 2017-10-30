import React from 'react'
import './todo.css'

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    // 用 bind 来绑定 this
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      items: [],
      text: '',
    }
  }

  render() {
    // 在外面写好变量到里面去用
  }
}
