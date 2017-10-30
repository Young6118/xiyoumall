import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// render 就是渲染的意思
// /> 不加就是错误的
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
