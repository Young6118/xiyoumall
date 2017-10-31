import React from 'react'
import Remarkable from 'remarkable'

import './editor.css'

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    var mdString = '输入 *markdown 语法* 就能看到效果'
    this.state = {
      value: mdString,
    }
  }

  handleChange() {
    this.setState({
      // this.refs 是隐含的对象
      //  input 是 ref=input 的标签
      value: this.refs.input.value
    })
  }

  getRawMarkup() {
    var md = new Remarkable()
    return {
      __html: md.render(this.state.value)
    }
  }

  render() {
    // dangerouslySetInnerHTML 是 innerHTML 在 react 中 jsx 的写法
    // ref 是给 this.ref 用的
    return (
      <div className="MarkdownEditor">
        <h1>markdown 编辑器</h1>
        <h3>原是文本</h3>
        <textarea
          onChange={this.handleChange}
          ref="input"
          defaultValue={this.state.value} />
        <h3>结果预览</h3>
        <div
          className="content"
          dangerouslySetInnerHTML = {this.getRawMarkup()}
          />
      </div>
    )
  }
}

export default MarkdownEditor
