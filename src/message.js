import React from 'react';

// 引入我们自己的 css
import './message.css'


// class  是 es6 中创建对象的语法糖
// 语法糖实际上就是方便你写程序的语法特性
// 实际上和以前的等价 另一种写法
class Message extends React.Component {
    // render 函数 这个函数语法很奇怪 因为是 es6 定义方法的样子
    // <Message name="Young" />
    // <Message name="洋" />
    // {} 里面写任意一个 js 语言的表达式
    render() {
      return (
        // return 只有一个标签 最外层一定要有一个标签
        // 并不是 html 会被 react 转为 html
        // className 不是 class
        // jsx 之于 react
        <div className="message-div">
          <div>Hello {this.props.name}</div>
          <div>大写 {this.props.name.toUpperCase()}</div>
        </div>
      )
    }
}

export default Message
