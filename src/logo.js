import React from 'react'
import logo from './logo.svg'


class Logo extends React.Component {
  render() {
    return (
      <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">欢迎来到 YoungChou 的第一个 react demo</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        哈哈 我们用了自动脚本 源文件发生改变 自动编译运行哦
      </p>
      </div>
    )
  }
}

export default Logo
